"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  createIcon,
  IconProps,
  useColorModeValue,
  AspectRatio,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

export default function HomeHero() {
  return (
    <Container maxW={"7xl"} px={{ base: 4, md: 6 }} overflow={"hidden"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 10, xl: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 2 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            color={"red.400"}
          >
            Global Hyperloop Competition
          </Heading>

          <Text
            as={"span"}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            display="flex"
            textDecoration={"quote"}
            mt={1}
          >
            <CiCalendar className="mr-4" />
            Jan 2026,
          </Text>
          <Text
            as={"span"}
            fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
            display="flex"
            textDecoration={"quote"}
            mt={1}
          >
            <FaLocationDot className="mr-4" />
            IIT Madras, Chennai
          </Text>

          <Text>
            It's an event, where innovation knows no bounds! Unleash your
            creativity, accelerate breakthroughs, and be a part of the
            revolution!
          </Text>
          <Stack mt={6} direction={{ base: "column", sm: "row" }}>
            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
              Take a look at {"   "}
              <Link href="/gallery" passHref>
                <Button
                  rounded="xl"
                  size="lg"
                  fontWeight="bold"
                  px={6}
                  colorScheme="red"
                  bg="red.400"
                  _hover={{ bg: "red.500" }}
                  mx={4}
                >
                  GHC 2025
                </Button>
              </Link>
            </motion.div>
          </Stack>
        </Stack>

        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-25%"}
            left={0}
            zIndex={0}
            color={useColorModeValue("red.300", "red.400")}
          />
          <Box
            position={"relative"}
            height={{ base: "200px", md: "300px" }}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <AspectRatio h={"100%"} w={"100%"} ratio={1}>
              <iframe
                title="GHC Introduction"
                src="https://www.youtube.com/embed/tzBII1qi8yY?autoplay=1"
                allowFullScreen
                allow="autoplay; encrypted-media"
              />
            </AspectRatio>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

//Comments

{
  /* <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "10%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
           Introducing,
            </Text> */
}

{
  /* <Text color={"gray.500"}>
            It's an event, where innovation knows no bounds! Unleash your
            creativity, accelerate breakthroughs, and be a part of the
            revolution – the Hyperloop revolution starts here!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
              <Link href={"/signup"}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"bold"}
                  px={6}
                  colorScheme={"red"}
                  bg={"red.400"}
                  _hover={{ bg: "red.500" }}
                >
                  Get started
                </Button>
              </Link>
            </motion.div>

            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
              <Link href={"/about/mission#what-is-hyperloop"}>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
                >
                  How It Works
                </Button>
              </Link>
            </motion.div>
          </Stack>*/
}
