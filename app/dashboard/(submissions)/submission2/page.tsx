"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  Flex,
  VStack,
  useDisclosure,
  CloseButton,
  Image,
  useColorModeValue,
  Heading,
  HStack,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  DrawerContent,
  Drawer,
} from "@chakra-ui/react";
import { FiHome, FiUser, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useGetTeam from "../../../../utils/useGetTeam";

interface LinkItemProps {
  name: string;
  icon: React.ComponentType;
  url?: string;
  hasDropdown?: boolean; // Added flag for dropdown items
}

const LinkItems: LinkItemProps[] = [
  { name: "Home", icon: FiHome, url: "/" },
  { name: "Team Details", icon: FiUser, url: "/dashboard" },
  { name: "Submissions", icon: FiUser, hasDropdown: true }, // Dropdown enabled
];

const SidebarContent = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => (
  <Box
    bg={useColorModeValue("white", "gray.900")}
    borderRight="1px"
    borderRightColor={useColorModeValue("gray.200", "gray.700")}
    w={{ base: "full", md: 60 }}
    pos="fixed"
    h="full"
    display={{ base: isOpen ? "block" : "none", md: "block" }} // Hide on mobile when closed
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Link href="/">
        <Image
          src={useColorModeValue("/GHC-LOGO-gray.900.png", "/GHC-logo.png")}
          h={6}
          alt="GHC_logo"
        />
      </Link>
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
    </Flex>

    {LinkItems.map((link) =>
      link.hasDropdown ? (
        <Menu key={link.name}>
          <MenuButton as={Button} rightIcon={<FiChevronDown />} mx="4" mt="2">
            {link.name}
          </MenuButton>
          <MenuList>
            <Link href="/dashboard/submission1">
              <MenuItem>Demonstration</MenuItem>
            </Link>
            <Link href="/dashboard/submission2">
              <MenuItem>DesignX Blueprint</MenuItem>
            </Link>
            <Link href="/dashboard/submission3">
              <MenuItem>Hyperloop Innoquest</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      ) : (
        <Link key={link.name} href={link.url || "/"}>
          <NavItem icon={link.icon}>{link.name}</NavItem>
        </Link>
      )
    )}
  </Box>
);

const NavItem = ({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType;
  children: React.ReactNode;
}) => (
  <Flex
    align="center"
    p="4"
    mx="4"
    borderRadius="lg"
    cursor="pointer"
    _hover={{ bg: "teal.500", color: "white" }}
    transition="background-color 0.2s ease-in-out"
  >
    {Icon && <Icon style={{ marginRight: "8px" }} />}
    {children}
  </Flex>
);

const Submissions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent onClose={onClose} display={{ base: "none", md: "block" }} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* <MobileNav onOpen={onOpen} /> */}
      <VStack spacing={6} ml={{ base: 0, md: 60 }} p="8">
        <Heading as="h1" size="xl" mb={4}>
          Submission Dashboard
        </Heading>
        <Divider />

        <Heading
          as="h2"
          size="lg"
          mx="auto"
         
          textAlign="center"
          fontWeight="semibold"
          mb={4}
          color="teal.500"
        >
          DesignX Blueprint
        </Heading>

        <HStack
          spacing={8}
          justifyContent="space-around"
          w="full"
          flexDirection={{ base: "column", md: "row" }} // Adjust flexDirection for mobile responsiveness
        >
         

          {/* Card 1 */}
          <Box
            w="full"
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            borderRadius="md"
            shadow="md"
          >
            <Heading size="md" mb={4}>
              Upload Option 1
            </Heading>
            <Input
              type="file"
              id="file-input-1"
              display="none"
              onChange={(e) => handleFileChange(e, setFile1)}
            />
            <Button
              as="label"
              htmlFor="file-input-1"
              colorScheme="teal"
              _hover={{ bg: "teal.600" }}
            >
              Upload File 1
            </Button>
            {file1 && (
              <Text
                mt={2}
                fontSize="sm"
                color={useColorModeValue("gray.500", "gray.300")}
              >
                File: {file1.name}
              </Text>
            )}
          </Box>

          {/* Card 2 */}
          <Box
            w="full"
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            borderRadius="md"
            shadow="md"
          >
            <Heading size="md" mb={4}>
              Upload Option 2
            </Heading>
            <Input
              type="file"
              id="file-input-2"
              display="none"
              onChange={(e) => handleFileChange(e, setFile2)}
            />
            <Button
              as="label"
              htmlFor="file-input-2"
              colorScheme="teal"
              _hover={{ bg: "teal.600" }}
            >
              Upload File 2
            </Button>
            {file2 && (
              <Text
                mt={2}
                fontSize="sm"
                color={useColorModeValue("gray.500", "gray.300")}
              >
                File: {file2.name}
              </Text>
            )}
          </Box>

          {/* Card 3 */}
          <Box
            w="full"
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            borderRadius="md"
            shadow="md"
          >
            <Heading size="md" mb={4}>
              Upload Option 3
            </Heading>
            <Input
              type="file"
              id="file-input-3"
              display="none"
              onChange={(e) => handleFileChange(e, setFile3)}
            />
            <Button
              as="label"
              htmlFor="file-input-3"
              colorScheme="teal"
              _hover={{ bg: "teal.600" }}
            >
              Upload File 3
            </Button>
            {file3 && (
              <Text
                mt={2}
                fontSize="sm"
                color={useColorModeValue("gray.500", "gray.300")}
              >
                File: {file3.name}
              </Text>
            )}
          </Box>
        </HStack>

        {/* Placeholder when no submissions are uploaded */}
        {!file1 && !file2 && !file3 && (
          <Text color={useColorModeValue("gray.600", "gray.400")} mt={4}>
            No submissions uploaded yet. Please upload files to get started.
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default Submissions;
