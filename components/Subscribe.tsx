"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { IoAnalyticsSharp, IoSearchSharp } from "react-icons/io5";
import { RiFlashlightLine } from "react-icons/ri";
import CardWithIllustration from "./CardWithIllustrations";

/* ================= FEATURE ROW ================= */

interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Flex
      align="center"
      gap={4}
      px={5}
      py={3}
      borderRadius="14px"
      bg="rgba(255,255,255,0.04)"
      backdropFilter="blur(10px)"
    >
      <Flex
        w={10}
        h={10}
        align="center"
        justify="center"
        rounded="full"
        bg="rgba(125,249,255,0.15)"
      >
        {icon}
      </Flex>
      <Text color="white" fontWeight={600}>
        {text}
      </Text>
    </Flex>
  );
};

/* ================= MAIN SECTION ================= */

export default function FollowWAChannel() {
  return (
    <Box bg="#0b0f17" py={{ base: 20, md: 28 }}>
      <Container maxW="7xl">
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 12, lg: 20 }}
          alignItems="center"
        >

          {/* ================= LEFT ================= */}
          <Stack spacing={6}>
            <Text
              color="#7df9ff"
              fontWeight={600}
              fontSize="sm"
              bg="rgba(125,249,255,0.12)"
              px={3}
              py={1}
              rounded="md"
              w="fit-content"
              letterSpacing="wide"
            >
              REGULAR UPDATES
            </Text>

            <Heading
              color="white"
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight="1.2"
            >
              Join the Club
            </Heading>

            <Text color="gray.400" fontSize="lg" maxW="520px">
              We’re building a collaborative community around every aspect of
              Hyperloop technology. Learn, explore, and grow with us as we work
              towards making the Global Hyperloop Competition a reality.
            </Text>

            <Stack spacing={4} pt={2}>
              <Feature
                icon={<Icon as={IoAnalyticsSharp} color="#7df9ff" w={5} h={5} />}
                text="Learn from experts and peers"
              />

              <Feature
                icon={<Icon as={RiFlashlightLine} color="#7df9ff" w={5} h={5} />}
                text="Explore Hyperloop technology"
              />

              <Feature
                icon={<Icon as={IoSearchSharp} color="#7df9ff" w={5} h={5} />}
                text="Discover opportunities & updates"
              />
            </Stack>
          </Stack>

          {/* ================= RIGHT ================= */}
          <Flex justify="center">
            <CardWithIllustration />
          </Flex>

        </SimpleGrid>
      </Container>
    </Box>
  );
}
