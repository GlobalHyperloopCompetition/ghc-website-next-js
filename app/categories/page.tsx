"use client";

import {
  Box,
  Container,
  Button,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ReactElement } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { motion } from "framer-motion";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface CardProps {
  heading: string;
  description?: string;
  icon?: ReactElement;
  href: string;
}

const animatedWrapperStyle = {
  background:
    "linear-gradient(90deg, #ff0033, #ff9900, #33cc33, #0099ff, #cc00ff)",
  backgroundSize: "400% 400%",
  animation: "borderAnim 6s linear infinite",
  padding: "3px",
  borderRadius: "999px",
};

const keyframes = `
@keyframes borderAnim {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

if (typeof document !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = keyframes;
  document.head.appendChild(styleTag);
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  const showSubmit = href && href !== "#";

  return (
    <Box
      maxW={{ base: "full", md: "300px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={8}
      bg={useColorModeValue("white", "gray.900")}
    >
      <Stack align={"start"} spacing={4}>
        {icon && (
          <Flex w={16} h={16} align={"center"} justify={"center"} rounded={"full"}>
            {icon}
          </Flex>
        )}

        <Box mt={2}>
          <Heading size="md" mb={4}>
            {heading}
          </Heading>
          {description && <Text mt={1}>{description}</Text>}
        </Box>

        {showSubmit && (
          <Box style={animatedWrapperStyle} width="100%">
            <Button
              as="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              width="100%"
              rounded="full"
              bg={useColorModeValue("white", "gray.800")}
              _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
              fontWeight="bold"
            >
              Submit
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

const Page = () => {
  return (
    <>
      <Box bg={useColorModeValue("white", "gray.800")} maxW="full">
        <Navbar />

        <Stack spacing={4} as={Container} maxW={"7xl"} textAlign={"center"} my={15}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            fontWeight={"bold"}
          >
            <Text as={"span"} color={"red.400"}>
              GHC 2026{" "}
            </Text>
            <Text as={"span"}>| Competition Categories</Text>
          </Heading>
        </Stack>

        <Container maxW={"7xl"} my={16}>
          <Flex flexWrap="wrap" gridGap={6} justify="space-evenly">
            <Card
              heading={"Pod Demonstration"}
              icon={<Image src={"/demo_comp.jpg"} alt="demo" w={10} h={10} />}
              description="Compete with your subscale prototypes systems Run them in our vacuum environment tube, designed to mimic working conditions of full-scale Hyperloop"
              href="https://forms.gle/5hLJUrrKY1YA6raX7"
            />

            <Card
              heading={"DesignX BluePrint"}
              icon={<Image src={"/bluePrint.jpg"} alt="bluePrint" w={10} h={10} />}
              description="Present your ideas, designs, research, and software simulations to an international jury of experts. Build a basis for your future prototypes"
              href="https://forms.gle/hTzJ8Ne6qGfyW1ik8"
            />

            <Card
              heading={"Hyperloop Innoquest"}
              icon={<Image src={"/caseStudy.jpg"} alt="caseStudy" w={10} h={10} />}
              description="Understand the real-life problems in implementing new technologies at a large scale"
              href="https://forms.gle/YMTCPWy98XE66XMc6"
            />

            <Card
              heading={"Cabin Design"}
              icon={<Image src={"/demo_comp.jpg"} alt="caseStudy" w={10} h={10} />}
              description="Show how space is optimised for passenger comfort, accessibility, and safety"
              href="#"
            />
          </Flex>
        </Container>

        <Box
          py={{ base: 10, md: 14 }}
          mt={10}
          mx="auto"
          bg={useColorModeValue("gray.50", "gray.700")}
          rounded="md"
          shadow="md"
          maxW={"7xl"}
        >
          <Stack spacing={10} textAlign={"center"} align={"center"}>
            <Heading fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}>
              Register Now
            </Heading>

            <Text color={"gray.500"}>
              Be part of an exclusive community that drives the future of transportation!
            </Text>

            <List spacing={3} textAlign="left" mx="auto" maxW="4xl">
              <ListItem fontSize={"xl"}>
                <ListIcon as={CheckCircleIcon} color="green.400" />
                Free participation and industry updates
              </ListItem>
              <ListItem fontSize={"xl"}>
                <ListIcon as={CheckCircleIcon} color="green.400" />
                Regular Updates to cutting-edge Hyperloop research
              </ListItem>
              <ListItem fontSize={"xl"}>
                <ListIcon as={CheckCircleIcon} color="green.400" />
                Exclusive access to GHC Wiki
              </ListItem>
            </List>

            <Box borderBottom="2px solid" borderColor="gray.200" w="40%" />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="https://forms.gle/ENnNUHNLrJNDdLuB7">
                <Button rounded={"full"} size={"lg"} colorScheme="red">
                  Register Now
                </Button>
              </Link>
            </motion.div>

            <Text color={"gray.500"} maxW={"3xl"}>
              "The Global Hyperloop Competition is the future of transportation innovation.
              Join us and be a part of this revolution!"
            </Text>
          </Stack>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default Page;
