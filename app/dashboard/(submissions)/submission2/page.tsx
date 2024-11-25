"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  Text,
  VStack,
  Heading,
  HStack,
  Divider,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";

import useGetTeam from "../../../../utils/useGetTeam";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../../../firebase/config";

const Submissions = () => {
  const storage = getStorage(app);
  const [designFileUrl, setDesignFileUrl] = useState<File | null>(null);
  const [pdsFileUrl, setPdsFileUrl] = useState<File | null>(null);
  const [team] = useGetTeam();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const uploadFile = async (file: File | null, folderName: string) => {
    if (!file) return null;

    const fileId = uuidv4();
    try {
      const fileRef = ref(
        storage,
        `submissions/${folderName}/${team?.uid}/${fileId}`
      );
      const snapshot = await uploadBytes(fileRef, file);
      return await getDownloadURL(snapshot.ref);
    } catch (error) {
      console.error(`Error uploading ${folderName} file:`, error);
      alert(`Failed to upload ${folderName} file`);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!pdsFileUrl) {
      alert("Please select a PDS file.");
      return;
    }

    setLoading(true);
    try {
      const [designUrl, pdsUrl] = await Promise.all([
        uploadFile(designFileUrl, "design"),
        uploadFile(pdsFileUrl, "pds"),
      ]);

      if (!designUrl || !pdsUrl) {
        throw new Error("File upload failed");
      }

      const response = await fetch("/api/filesubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: team?.email,
          files: {
            design: designUrl,
            pds: pdsUrl,
          },
        }),
      });

      if (!response.ok) {
        alert("Submission failed");
        throw new Error("Submission failed");
      }
    } catch (error) {
      alert("Submission failed");
      console.error("Submission Error:", error);
    } finally {
      alert("Submission successful");
      setLoading(false);
    }
  };

  return (
    <VStack spacing={8} p={8}>
      <Heading as="h1" size="lg">
        Submission Dashboard
      </Heading>
      <Divider />
      <Heading as="h1" size="lg" fontWeight="semibold" color="teal.500">
        DesignX Blueprint
      </Heading>
      <Box
        w="full"
        maxW="600px"
        bg={"gray.700"}
        p={6}
        boxShadow="lg"
        borderRadius="md"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel>Registration Design Submission (RDS)</FormLabel>
              <Input
                type="file"
                accept=".pdf"
                onChange={(e) => setDesignFileUrl(e.target.files?.[0] || null)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Preliminary Design Submission (PDS)</FormLabel>
              <Input
                type="file"
                accept=".pdf"
                onChange={(e) => setPdsFileUrl(e.target.files?.[0] || null)}
              />
            </FormControl>
            <Text fontSize="sm" color="gray.500">
              Note: Please upload files in PDF format only.
            </Text>
            <Button
              type="submit"
              colorScheme="teal"
              isLoading={loading}
              loadingText="Submitting"
              w="full"
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default Submissions;
