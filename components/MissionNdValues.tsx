"use client"


import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FcApproval, FcBullish, FcConferenceCall } from "react-icons/fc";

interface CardProps {
  heading: string;
  description?: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "300px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={8}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.200", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md" mb={4}>
            {heading}
          </Heading>
          {description && (
            <Text mt={1} fontSize={"sm"}>
              {description}
            </Text>
          )}
        </Box>
        {/* <Button variant={'link'} colorScheme={'red'} size={'sm'}>
                    Learn more
                </Button> */}
      </Stack>
    </Box>
  );
};

export default function MissionNdvalues() {
  return (
    <Box pb={10} px={0}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        w={"full"}
        px={0}
        py={10}
      >
        <Stack
          spacing={8}
          as={Container}
          maxW={"6xl"}
          textAlign={"center"}
          py={4}
          mb={10}
          id="what-is-hyperloop"
        >
          <Stack
            spacing={4}
            as={Container}
            maxW={"3xl"}
            textAlign={"center"}
            py={6}
          >
            <Heading fontSize={{ base: "4xl", sm: "6xl" }} fontWeight={"bold"}>
              What is Hyperloop?
            </Heading>
          </Stack>

          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Image
              src="/hyp-hero.jpeg"
              width={{ base: "full", md: "50%" }}
              objectFit={"contain"}
              rounded={"lg"}
              alt={"feature image"}
            />
            <Box
              px={6}
              textAlign={"left"}
              alignSelf={"center"}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              <Text mb={6} fontSize={"lg"}>
                Hyperloop, the “fifth mode of transport”, is a high-speed
                transportation system for long-distance travel. It involves an
                electromagnetically levitating pod within a vacuum tube thus
                eliminating friction & air drag and potentially allowing the pod
                to reach speeds up to Mach 1.0
              </Text>
              <Text fontSize={"lg"}>
                This mode of transport will be marked by its immunity to
                weather, collision-free commute which can move at twice the
                speed of a plane, with low power consumption and energy storage
                for 24-hour operations. Overall the Hyperloop will be a
                sustainable mode of transportation running on solar or
                electrical energy.
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Image src={"/why-hyp.png"} style={{ width: "100vw" }} mt={6} />

      <Container maxW={"5xl"} py={16}>
        <Box textAlign={"center"} mb={10}>
          <Heading
            as={"span"}
            bgGradient="linear(to-r, red.500, purple.300)"
            bgClip="text"
            fontSize={{ base: "2xl", sm: "5xl" }}
            fontWeight={"bold"}
          >
            Why GHC?
          </Heading>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
          <VStack spacing={6}>
            <Heading
              fontSize={{ base: "1xl", sm: "3xl" }}
              color={useColorModeValue("gray.700", "gray.300")}
            >
              Hyperloop: A Boon
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"} textAlign={"justify"}>
              Hyperloop trumps the four existing forms of transport in ways more
              than one - high speed and connectivity with significantly lesser
              power consumption. The GHC aims to shed light on these benefits of
              the hyperloop and generate great interest and support for its
              introduction to the world as the new and primary form of
              transportation.
            </Text>
          </VStack>
          <VStack spacing={6}>
            <Heading
              fontSize={{ base: "1xl", sm: "3xl" }}
              color={useColorModeValue("gray.700", "gray.300")}
            >
              Synergic Research
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"} textAlign={"justify"}>
              The Global Hyperloop Competition 2025 will essentially serve as a
              platform for forging innovation among transportation researchers
              around the world to pave the way for the development of the
              Hyperloop technology. This is not only a competition, but a
              pedestal for the world to come together and re-engineer mobility.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>

      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        my={6}
      >
        <Heading fontSize={{ base: "2xl", sm: "5xl" }} fontWeight={"bold"}>
          GHC’s Mission
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Transcending borders in speed and innovation
        </Text>
      </Stack>

      <Container maxW={"5xl"} my={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"The Hyperloop Vision"}
            icon={<Icon as={FcBullish} w={10} h={10} />}
            description={
              "By explaining the technologies involved in Hyperloop and its associated benefits - incredible speed, safety and sustainability - to people, GHC will ensure the development of a massive Hyperloop community over the years to revolutionalise the existing transport system."
            }
            href={"#"}
          />
          <Card
            heading={"The Conference"}
            icon={<Icon as={FcConferenceCall} w={10} h={10} />}
            description={
              "Serving as a stage for Hyperloop enthusiasts, the Conference gives an opportunity for networking and collaboration among students, academicians and industrialists in order to propel the research and development of the hyperloop technologies."
            }
            href={"#"}
          />
          <Card
            heading={"The Competition"}
            icon={<Icon as={FcApproval} w={10} h={10} />}
            description={
              "The Competetion aims to engage students and teams to ideate, innovate and develop. The competitive spirit will drive teams to showcase different perspectives on the hyperloop technology and assist its growth."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
