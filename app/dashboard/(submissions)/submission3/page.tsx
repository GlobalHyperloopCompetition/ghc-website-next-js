"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  useDisclosure,
  useColorModeValue,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import useGetTeam from "../../../../utils/useGetTeam";

const Submissions = () => {
  const { onClose } = useDisclosure();
  const [team] = useGetTeam();
  const { data: session } = useSession();
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <VStack spacing={6} ml={{ base: 0, md: 60 }} p="8">
      <Heading as="h1" size="xl" mb={4}>
        Submission Dashboard
      </Heading>
      <Divider />
      <Box flexDirection={{ base: "column", md: "row" }}>
        <Heading
          as="h2"
          size="lg"
          mx="auto"
          textAlign="center"
          fontWeight="semibold"
          mb={4}
          color="teal.500"
        >
          Hyperloop Innoquest
        </Heading>
      </Box>
      <Text fontWeight={600} color={useColorModeValue("gray.900", "gray.100")}>
        Submissions for Hyperloop Innoquest will start soon.
      </Text>
    </VStack>
  );
};

export default Submissions;
