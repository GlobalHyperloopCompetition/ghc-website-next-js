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
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import useGetTeam from "../../../../utils/useGetTeam";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../../../../firebase/config";

interface User {
  id: string;
  email: string;
  uid: string;
  teamname?: string;
  designfile?: string;
  demonstrationfile?: string;
}

const Submissions = () => {
  const storage = getStorage(app);
  const [demonstrationFile, setDemonstrationFile] = useState<File | null>(null);
  const [cdrFile, setCdrFile] = useState<File | null>(null);
  const [team] = useGetTeam();
  const [loading, setLoading] = useState(false); // Loading state

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
    if (!cdrFile) {
      alert("Please Upload CDR File");
    }

    e.preventDefault();
    const [downloadURL, cdrUrl] = await Promise.all([
      uploadFile(demonstrationFile, "demonstration"),
      uploadFile(cdrFile, "cdr"),
    ]);
    try {
      setLoading(true); // Set loading state to true
      const response = await fetch("/api/filesubmission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: team?.email,
          // demonstrationFileUrl: downloadURL,
          files: {
            demonstrationFile: downloadURL,
            cdr: cdrUrl,
          },
        }),
      });

      if (!response.ok) {
        alert("Failed to upload  file");
        throw new Error("Failed to upload the  file");
      }

      const data = await response.json();

      if (!data.success) {
        alert("Failed to upload ");
        throw new Error("Failed to upload the ");
      }

      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading ", error);
      alert("Failed to upload  file");
    } finally {
      setLoading(false); // Reset loading
    }
  };

  return (
    <VStack spacing={8} p={8}>
      <Heading as="h1" size="lg">
        Submission Dashboard
      </Heading>
      <Divider />
      <Heading as="h1" size="lg" fontWeight="semibold" color="teal.500">
        Demonstration
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
            <FormControl>
              <FormLabel>Demonstration Proposal Document (DPD)</FormLabel>
              <Input
                type="file"
                accept=".pdf"
                onChange={(e) =>
                  setDemonstrationFile(e.target.files?.[0] || null)
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Comprehensive Demonstration Report (CDR)</FormLabel>
              <Input
                type="file"
                accept=".pdf"
                onChange={(e) => setCdrFile(e.target.files?.[0] || null)}
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
