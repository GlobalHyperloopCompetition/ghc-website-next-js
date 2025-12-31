"use client";

import {
  Box,
  Text,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  VStack,
  Flex,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Documents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const keyframes = `
      @keyframes ghcBorderAnim {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    const styleTag = document.createElement("style");
    styleTag.innerHTML = keyframes;
    document.head.appendChild(styleTag);
    return () => {
      if (styleTag && styleTag.parentNode) styleTag.parentNode.removeChild(styleTag);
    };
  }, []);

  const animatedWrapperStyle = {
    background:
      "linear-gradient(90deg, #ff0033, #ff9900, #33cc33, #0099ff, #cc00ff)",
    backgroundSize: "400% 400%",
    animation: "ghcBorderAnim 5.5s linear infinite",
    padding: "3px",
    borderRadius: "999px",
    display: "inline-block",
  };

  const timeDifference = (date: string) => {
    const now = new Date();
    const pastDate = new Date(date);
    const diff = now.getTime() - pastDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 5) {
      return `New`;
    } else if (days > 60) {
      return `${Math.floor(days / 30)} months ago`;
    } else {
      return `${days} days ago`;
    }
  };

  return (
    <Container maxW={"7xl"}>
      <Navbar />

      <Flex
        direction="row"
        align="center"
        justify="center"
        minHeight="70vh"
        wrap={"wrap"}
        p={4}
      >
        <VStack width={"100%"} spacing={8} align="center" textAlign="center">
          <Heading as="h1" size="2xl" color={useColorModeValue("teal.600", "teal.300")}>
            Document Archive
          </Heading>
          <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.300")}>
            Explore our collection of documents and resources
          </Text>

          <Flex
            wrap={"wrap"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            gap={6}
          >
            <LinkBox
              as="article"
              maxW="sm"
              p={5}
              borderWidth={10}
              rounded="lg"
              shadow="md"
              bg={useColorModeValue("white", "gray.700")}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box as="time" dateTime="2024-11-10T12:22:00Z" color={useColorModeValue("gray.500", "gray.400")}>
                {timeDifference("2025-10-29T12:22:00Z")}
              </Box>
              <Heading size="md" my={2}>
                <LinkOverlay
                  href="https://drive.google.com/file/d/1FS4FXYkboV0-Y15xXLf76idML1r3YZNi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={useColorModeValue("teal.500", "teal.300")}
                >
                  CDR Guidelines
                </LinkOverlay>
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.300")}>
                GLOBAL HYPERLOOP COMPETITION 2026
              </Text>

             
            </LinkBox>

            <LinkBox
              as="article"
              maxW="sm"
              p={5}
              borderWidth={10}
              rounded="lg"
              shadow="md"
              bg={useColorModeValue("white", "gray.700")}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box as="time" dateTime="2024-09-22T12:22:00Z" color={useColorModeValue("gray.500", "gray.400")}>
                {timeDifference("2025-10-29T12:22:00Z")}
              </Box>
              <Heading size="md" my={2}>
                <LinkOverlay
                  href="https://drive.google.com/file/d/1mOi8ZaSU4cCeYDngHvckLTogxOFkAxvJ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={useColorModeValue("teal.500", "teal.300")}
                >
                  PDS Guidelines (DesignX)
                </LinkOverlay>
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.300")}>
                GLOBAL HYPERLOOP COMPETITION 2026
              </Text>

           
            </LinkBox>

            <LinkBox
              as="article"
              maxW="sm"
              p={5}
              borderWidth={10}
              rounded="lg"
              shadow="md"
              bg={useColorModeValue("white", "gray.700")}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box as="time" dateTime="2024-09-22T12:22:00Z" color={useColorModeValue("gray.500", "gray.400")}>
                {timeDifference("2025-10-29T12:22:00Z")}
              </Box>
              <Heading size="md" my={2}>
                <LinkOverlay
                  href="https://drive.google.com/file/d/1CPO2V6Qxkee3iWZFWxIHrcjAaKa26RtA/view?usp=sharing "
                  target="_blank"
                  rel="noopener noreferrer"
                  color={useColorModeValue("teal.500", "teal.300")}
                >
                  RPD Guidelines (Innoquest)
                </LinkOverlay>
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.300")}>
                GLOBAL HYPERLOOP COMPETITION 2026
              </Text>

            
            </LinkBox>

            <LinkBox
              as="article"
              maxW="sm"
              p={5}
              borderWidth={10}
              rounded="lg"
              shadow="md"
              bg={useColorModeValue("white", "gray.700")}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box as="time" dateTime="2025-10-29T12:22:00Z" color={useColorModeValue("gray.500", "gray.400")}>
                {timeDifference("2025-10-29T12:22:00Z")}
              </Box>
              <Heading size="md" my={2}>
                <LinkOverlay
                  href="https://drive.google.com/file/d/1er6znhix7hlQo8C8ScNMLhKx4cRVJhd_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={useColorModeValue("teal.500", "teal.300")}
                >
                  DPS Template
                </LinkOverlay>
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.300")}>
                GLOBAL HYPERLOOP COMPETITION 2026
              </Text>
            </LinkBox>

            <LinkBox
              as="article"
              maxW="sm"
              p={5}
              borderWidth={10}
              rounded="lg"
              shadow="md"
              bg={useColorModeValue("white", "gray.700")}
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box as="time" dateTime="2024-09-17T12:22:00Z" color={useColorModeValue("gray.500", "gray.400")}>
                {timeDifference("2025-10-29T12:22:00Z")}
              </Box>
              <Heading size="md" my={2}>
                <LinkOverlay
                  href="https://drive.google.com/file/d/1MjrvPXmSPSBmUxmAdK10CH_gnobO1GMC/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={useColorModeValue("teal.500", "teal.300")}
                >
                  Competition Framework
                </LinkOverlay>
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.300")}>
                GLOBAL HYPERLOOP COMPETITION 2026
              </Text>
            </LinkBox>
          </Flex>
        </VStack>
        {/* ================= SUBMISSION SECTION ================= */}
<VStack mt={16} spacing={6} textAlign="center">
  <Heading size="lg" color={useColorModeValue("teal.600", "teal.300")}>
    Submissions
  </Heading>

  <Flex wrap="wrap" gap={6} justify="center">
    <Box style={animatedWrapperStyle}>
      <Button
        as="a"
        href="https://forms.gle/5hLJUrrKY1YA6raX7"
        target="_blank"
        rel="noopener noreferrer"
        px={10}
        rounded="full"
        bg={useColorModeValue("white", "gray.800")}
        fontWeight="bold"
      >
        Submit DPD
      </Button>
    </Box>

    <Box style={animatedWrapperStyle}>
      <Button
        as="a"
        href="https://forms.gle/hTzJ8Ne6qGfyW1ik8"
        target="_blank"
        rel="noopener noreferrer"
        px={10}
        rounded="full"
        bg={useColorModeValue("white", "gray.800")}
        fontWeight="bold"
      >
        Submit PDS
      </Button>
    </Box>

    <Box style={animatedWrapperStyle}>
      <Button
        as="a"
        href="https://forms.gle/YMTCPWy98XE66XMc6"
        target="_blank"
        rel="noopener noreferrer"
        px={10}
        rounded="full"
        bg={useColorModeValue("white", "gray.800")}
        fontWeight="bold"
      >
        Submit RPD
      </Button>
    </Box>
    <Box style={animatedWrapperStyle}>
      <Button
        as="a"
        href="https://forms.gle/P9UFZyuEg1DSfTXZ8"
        target="_blank"
        rel="noopener noreferrer"
        px={10}
        rounded="full"
        bg={useColorModeValue("white", "gray.800")}
        fontWeight="bold"
      >
        Submit CDR
      </Button>
    </Box>
    <Box style={animatedWrapperStyle}>
      <Button
        as="a"
        href="https://forms.gle/Sq3wBWsgcLuqBXzm7"
        target="_blank"
        rel="noopener noreferrer"
        px={10}
        rounded="full"
        bg={useColorModeValue("white", "gray.800")}
        fontWeight="bold"
      >
        Submit FDS
      </Button>
    </Box>
  </Flex>
</VStack>

      </Flex>

      <Box width={"full"} mt={8}>
        <Footer />
      </Box>
    </Container>
  );
};

export default Documents;
