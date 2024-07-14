"use client";

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  Image,
  Stack,
  FormControl,
  Input,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import {
  FiHome,
  FiCompass,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiUser,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import useGetTeam from "../../../utils/useGetTeam";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePresence, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

interface LinkItemProps {
  name: string;
  icon: IconType;
  url?: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  headName: string;
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Team Details", icon: FiHome, url: "/dashboard" },
  { name: "Explore", icon: FiCompass, url: "/about/activity" },
  { name: "Settings", icon: FiSettings, url: "/dashboard/settings" },
  { name: "Profile", icon: FiUser, url: "/dashboard/profile" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "black")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link href="/">
          <Image
            alt="GHC_LOGO"
            src={useColorModeValue("/GHC-LOGO-BLACK.png", "/GHC-logo.png")}
            h={6}
          />
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link key={link.name} href={link.url || "/"}>
          <NavItem icon={link.icon}>{link.name}</NavItem>
        </Link>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "red.500",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, headName, ...rest }: MobileProps) => {
  const navigate = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { data: session } = useSession();

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
      bg={useColorModeValue("white", "black")}
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
        {/* <Text
                    display={{ base: 'flex', md: 'none' }}
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold">
                    GHC
                </Text> */}
        <Image
          alt="GHC_logo"
          display={{ base: "flex", md: "none" }}
          src={useColorModeValue("/GHC-LOGO-BLACK.png", "/GHC-logo.png")}
          h={6}
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
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={session?.user?.image!} />
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
            <MenuList
            // bg={useColorModeValue('white', 'black')}
            // borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <Link href={"/dashboard/profile"}>
                <MenuItem>Profile</MenuItem>
              </Link>
              <Link href={"/dashboard/settings"}>
                <MenuItem>Settings</MenuItem>
              </Link>

              <MenuDivider />
              <MenuItem onClick={handleLogout}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const Loading = () => {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();
  const [team, isLoading, isError] = useGetTeam();

  const show = {
    opacity: 1,
    display: "block",
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  };

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isLoading ? show : hide}
      ref={ref}
      transition={{ ease: "easeOut", duration: 3 }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"all ease 12s"}
        height={"100vh"}
        width={"100vw"}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ ease: "easeIn" }}
        >
          <Text fontWeight={"extrabold"} fontSize={"6xl"}>
            GHC
          </Text>
        </motion.div>
      </Box>
    </motion.div>
  );
};

const FormElement = ({
  handleChange,
  value,
  title,
  tagline,
  type,
  bgColor,
  btnTextColor,
}: any) => {
  return (
    <VStack bg={bgColor} borderWidth={"1px"} borderRadius={"md"}>
      <VStack
        p={8}
        pb={0}
        spacing={4}
        mb={4}
        textAlign={"left"}
        alignItems={"flex-start"}
      >
        <Heading fontSize={"2xl"}>{title}</Heading>
        <Text fontSize={"sm"}>{tagline}</Text>
        <FormControl isRequired id={title}>
          <Input
            focusBorderColor="red.400"
            type={type || "text"}
            onChange={handleChange}
            value={value}
          />
        </FormControl>
      </VStack>

      <VStack borderTopWidth={"1px"} w={"full"} px={8} py={4}>
        <HStack justifyContent={"space-between"} w={"full"}>
          <Text fontSize={"sm"} opacity={0.7}>
            Please use 32 characters at maximum.
          </Text>
          <Button
            size="sm"
            bg={"gray.100"}
            color={btnTextColor}
            _hover={{ opacity: 0.7 }}
            variant="solid"
          >
            Update
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

const SettingsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [team, isLoading, isError] = useGetTeam();
  console.log(isError);

  const [input, setInput] = useState({
    email: "",
    password: "",
    teamname: "",
    homeUniversity: "",
    activemembers: undefined,
    attendeventmembers: undefined,
    teamrepresentetive: "",
    emailrepresentetive: "",
    numberrepresentetive: undefined,
    teamlogo: "",
    officialteamname: "",
    teamaddress: "",
    country: "",
    postalcode: undefined,
  });
  const bgColor = useColorModeValue("white", "black");
  const btnTextColor = useColorModeValue("black", "black");
  const toast = useToast();
  const toastShown = useRef(false);

  useEffect(() => {
    setInput(team);
  }, [team]);

useEffect(() => {
  if (!toastShown.current) {
    toast({
      title: "Website Under Development",
      description:
        "This website is currently under development. Features may be incomplete.",
      status: "info",
      duration: 2500,
      isClosable: true,
    });
    toastShown.current = true;
  }
}, [toast]);

  function handleChange(e: any) {
    const { name, value } = e.target;
    // setError(undefined);
    // setLoading(false);
    setInput((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "black")}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SidebarContent
            onClose={() => onClose}
            display={{ base: "none", md: "block" }}
          />
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav headName={team?.teamrepresentetive} onOpen={onOpen} />
          <Stack
            ml={{ base: 0, md: 60 }}
            p="8"
            justify={"center"}
            align={"center"}
          >
            {/* Content */}
            <VStack spacing={6}>
              <FormElement
                bgColor={bgColor}
                btnTextColor={btnTextColor}
                value={input?.teamname}
                handleChange={handleChange}
                title="Team Name"
                tagline="This is your team's visible name within GHC. For example, the name of your company or team."
              />
              <FormElement
                bgColor={bgColor}
                btnTextColor={btnTextColor}
                value={input?.teamrepresentetive}
                handleChange={handleChange}
                title="Team Representative"
                tagline="This is your team's visible name within GHC. For example, the name of your company or team."
              />
              <FormElement
                bgColor={bgColor}
                btnTextColor={btnTextColor}
                value={input?.homeUniversity}
                handleChange={handleChange}
                title="University"
                tagline="This is your team's visible name within GHC. For example, the name of your company or team."
              />
              <FormElement
                bgColor={bgColor}
                btnTextColor={btnTextColor}
                value={input?.activemembers}
                type="number"
                handleChange={handleChange}
                title="Number of Active Members"
                tagline="This is your team's visible name within GHC. For example, the name of your company or team."
              />
              <FormElement
                bgColor={bgColor}
                btnTextColor={btnTextColor}
                value={input?.teamaddress}
                handleChange={handleChange}
                title="Address"
                tagline="This is your team's visible name within GHC. For example, the name of your company or team."
              />
              <FormElement
                bgColor={bgColor}
                btnTextColor={btnTextColor}
                value={input?.country}
                handleChange={handleChange}
                title="Country"
                tagline="This is your team's visible name within GHC. For example, the name of your company or team."
              />
              <FormElement
                bgColor={bgColor}
                btnTextColor={btnTextColor}
                value={input?.postalcode}
                handleChange={handleChange}
                title="Postal Code"
                tagline="This is your team's visible name within GHC. For example, the name of your company or team."
              />
            </VStack>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default SettingsPage;
