"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  Flex,
  FlexProps,
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
  IconButton,
  Avatar,
  MenuDivider,
  useColorMode,
} from "@chakra-ui/react";
import { FiHome, FiUser, FiChevronDown, FiMenu, FiBell } from "react-icons/fi"; // Imported required icons
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"; // Import signOut
import useGetTeam from "../../../../utils/useGetTeam"; // Assuming this hook is correct
import { useRouter } from "next/router"; // Import useRouter
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface LinkItemProps {
  name: string;
  icon: React.ComponentType;
  url?: string;
  hasDropdown?: boolean;
}

interface NavItemProps extends FlexProps {
  icon: React.ComponentType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  headName: string;
  onOpen: () => void;
}

const LinkItems: LinkItemProps[] = [
  { name: "Home", icon: FiHome, url: "/" },
  { name: "Team Details", icon: FiUser, url: "/dashboard" },
  { name: "Submissions", icon: FiUser,hasDropdown: true },
];

// 

const SidebarContent = ({ onClose }: { onClose: () => void }) => (
  <Box
    bg={useColorModeValue("white", "gray.900")}
    borderRight="1px"
    borderRightColor={useColorModeValue("gray.200", "gray.700")}
    w={{ base: "full", md: 60 }}
    pos="fixed"
    h="full"
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
              <MenuItem> Pod Demonstration</MenuItem>
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

const MobileNav = ({ onOpen, headName, ...rest }: MobileProps) => {
  const navigate = useRouter(); // Added useRouter hook for navigation
  const { colorMode, toggleColorMode } = useColorMode();
  const [team, isLoading] = useGetTeam();

  function handleLogout() {
    signOut({ redirect: false });
    navigate.push("/");
  }

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Link href="/">
        <Image
          display={{ base: "flex", md: "none" }}
          src={useColorModeValue("/GHC-LOGO-BLACK.png", "/GHC-logo.png")}
          h={6}
          alt="GHC_Logo"
        />
      </Link>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
        <Flex alignItems={"center"}>
          {isLoading ? (
            <>...</>
          ) : (
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar size={"sm"} src={team?.profilePictureUrl || ""} />{" "}
                  {/* Handled undefined or null profile picture */}
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="sm">{headName}</Text>
                    <Text fontSize="xs" color="gray.600">
                      Team Rep
                    </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </HStack>
    </Flex>
  );
};

const Submissions = () => {
  const { onClose } = useDisclosure();
  const { data: session } = useSession();
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false); // Loading state

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setDesignFile(selectedFile);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Prevent submission if no file is selected

   

    const formData = new FormData();
    formData.append("email", session?.user.email || ""); // Get email from session
    formData.append("design", designFile);

    setLoading(true); // Set loading to true

    for (const entry of formData.entries()) {
      const [key, value] = entry;
      console.log(`${key}:`, value instanceof File ? value.name : value);
    }

    try {
      const response = await fetch(`/api/filesubmission`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Files uploaded successfully!");
        setDesignFile(null); // Reset the file input
      } else {
        alert(data.message);
      }
      console.log(response);
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("An error occurred while uploading the files.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent onClose={onClose} />
      <VStack spacing={6} p="8">
        <Heading as="h1" size="xl" mb={4}>
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
            DesignX BluePrint
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
                Registration Design Submission (RDS){" "}
              </Heading>
              <Input
                type="file"
                name="designFile" // Change this to match the correct state variable
                onChange={handleFileChange}
                required 
              />
            </Box>
          </HStack>
          <Button type="submit" colorScheme="teal" isLoading={loading} mt={4}>
            Submit
          </Button>
        </form>
      </VStack>
    </Box>
  );
};

export default Submissions;
