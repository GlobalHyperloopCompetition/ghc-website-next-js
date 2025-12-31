"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  IconProps,
  useColorModeValue,
  AspectRatio,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

/* ================= MOTION ================= */
const MotionBox = motion(Box);

/* ================= NEON CTA (REUSABLE) ================= */
const NeonCTA = ({
  label,
  href,
  showNew = false,
}: {
  label: string;
  href: string;
  showNew?: boolean;
}) => {
  return (
    <MotionBox
      position="relative"
      display="inline-block"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      initial="rest"
      animate="rest"
    >
      {/* NEW badge */}
      {showNew && (
        <MotionBox
          variants={{
            rest: { opacity: 0, y: -6, scale: 0.9 },
            hover: { opacity: 1, y: -14, scale: 1 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          position="absolute"
          top="-8px"
          right="-8px"
          bg="red.500"
          color="white"
          fontSize="xs"
          fontWeight="bold"
          px={2}
          py={1}
          rounded="full"
          boxShadow="0 0 12px rgba(255,0,0,0.6)"
          zIndex={2}
        >
          NEW
        </MotionBox>
      )}

      {/* Animated border */}
      <MotionBox
        variants={{
          rest: { backgroundPosition: "0% 50%" },
          hover: { backgroundPosition: "100% 50%" },
        }}
        transition={{ duration: 1.4, ease: "linear", repeat: Infinity }}
        p="2px"
        rounded="xl"
        bgGradient="linear(to-r, red.400, pink.400, purple.400, red.400)"
        backgroundSize="300% 300%"
      >
        <Button
          as={Link}
          href={href}
          rounded="xl"
          size="lg"
          px={8}
          fontWeight="bold"
          letterSpacing="0.12em"
          color="white"
          bg="black"
          _hover={{ bg: "gray.900" }}
        >
          {label}
        </Button>
      </MotionBox>
    </MotionBox>
  );
};

/* ================= HOME HERO ================= */
export default function HomeHero() {
  return (
    <Container maxW="7xl" px={{ base: 4, md: 6 }} overflow="hidden">
      <Stack
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8, md: 10, xl: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        {/* LEFT */}
        <Stack flex={1} spacing={4}>
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            color="red.400"
          >
            Global Hyperloop Competition
          </Heading>

          <Text
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            display="flex"
            alignItems="center"
            gap={3}
          >
            <CiCalendar />
            Jan 22–25, 2026
          </Text>

          <Text
            fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            display="flex"
            alignItems="center"
            gap={3}
          >
            <FaLocationDot />
            IIT Madras, Chennai
          </Text>

          <Text maxW="xl" color="gray.500">
            Where innovation meets velocity. Build, compete, and redefine the
            future of transportation.
          </Text>

          {/* CTA BUTTONS */}
          <Stack
            mt={6}
            direction={{ base: "column", sm: "row" }}
            spacing={6}
            align="center"
          >
            <NeonCTA
              label="REGISTER NOW"
              href="https://forms.gle/ENnNUHNLrJNDdLuB7"
            />
            <NeonCTA label="SUBMIT FORMS" href="/documents" showNew />
          </Stack>
        </Stack>

        {/* RIGHT */}
        <Flex
          flex={1}
          justify="center"
          align="center"
          position="relative"
          w="full"
        >
          <Blob
            w="150%"
            h="150%"
            position="absolute"
            top="-25%"
            left={0}
            zIndex={0}
            color={useColorModeValue("red.300", "red.400")}
          />

          <Box
            position="relative"
            height={{ base: "220px", md: "320px" }}
            rounded="2xl"
            boxShadow="2xl"
            width="full"
            overflow="hidden"
            zIndex={1}
          >
            <AspectRatio h="100%" w="100%" ratio={1}>
              <iframe
                title="GHC Introduction"
                src="https://www.youtube.com/embed/osvB0QDUzH0?autoplay=1&mute=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </AspectRatio>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

/* ================= BLOB ================= */
const Blob = (props: IconProps) => (
  <Icon
    width="100%"
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
