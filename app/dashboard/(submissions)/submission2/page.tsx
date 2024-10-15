"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  Text,
  VStack,
  useDisclosure,
  Heading,
  HStack,
  Divider,
} from "@chakra-ui/react";

import useGetTeam from "../../../../utils/useGetTeam";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../../../firebase/config";

const Submissions = () => {
  const { onClose } = useDisclosure();
  const storage = getStorage(app);
  const [designFileUrl, setdesignFileUrl] = useState<File | null>(null);
  const [team] = useGetTeam();
  const [loading, setLoading] = useState(false); // Loading state

  const handleUpload = async () => {
    const file = designFileUrl; // Get the file from the input element

    if (file) {
      console.log(`Uploading file: ${file.name}`);
      const fileId = uuidv4(); // Generate a unique ID for the file

      try {
        // 1. Upload file to Firebase Storage
        const fileRef = ref(
          storage,
          `submissions/design/${team?.uid}/${fileId}`
        ); // Use fileId in the path to avoid name conflicts
        const snapshot = await uploadBytes(fileRef, file); // Upload the file to the reference
        console.log("File uploaded to Firebase Storage.");

        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log(`File available at: ${downloadURL}`);
        return downloadURL;
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("Failed to upload file");
        return null;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const downloadURL = await handleUpload();
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch("/api/filesubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: team?.email,
          designFileUrl: downloadURL,
        }),
      });

      if (!response.ok) {
        alert("Failed to upload design file");
        throw new Error("Failed to upload the design file");
      }

      const data = await response.json();

      if (!data.success) {
        alert("Failed to upload design file");
        throw new Error("Failed to upload the design file");
      }

      alert("Design file uploaded successfully!");
    } catch (error) {
      console.error("Error uploading design file:", error);
      alert("Failed to upload design file");
    } finally {
      setLoading(false); // Reset loading
    }
  };

  return (
    <VStack spacing={6} p="8">
      <Heading as="h1" size="lg">
        Submission Dashboard
      </Heading>
      <Divider />
      <form onSubmit={handleSubmit}>
        <Heading
          as="h2"
          size="lg"
          fontWeight="semibold"
          mt={4}
          mb={4}
          color="teal.500"
        >
          DesignX Blueprint
        </Heading>
        <HStack spacing={8} justifyContent="space-around" w="full">
          <Box
            w="full"
            bg={"teal.600"}
            boxShadow={"2xl"}
            p={4}
            maxW="500px"
            borderRadius="md"
          >
            <Heading size="md" mb={4}>
              Registration Design Submission (RDS)
            </Heading>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setdesignFileUrl(e.target.files[0]);
                }
              }}
            />
          </Box>
        </HStack>
        <Text fontSize="sm" color="gray.600">
          Note - Please upload in pdf format only
        </Text>
        <Button type="submit" colorScheme="teal" isLoading={loading} mt={4}>
          Submit
        </Button>
      </form>
    </VStack>
  );
};

export default Submissions;
