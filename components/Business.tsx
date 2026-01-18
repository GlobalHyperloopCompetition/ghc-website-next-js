"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Icon,
  Flex,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcElectronics,
  FcCollaboration,
  FcWorkflow,
} from "react-icons/fc";

import ElectricBorder from "../components/ElectricBorder";

/* ================= CARD ================= */

interface CardProps {
  heading: string;
  description?: string;
  icon?: ReactElement;
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      bg="rgba(255,255,255,0.03)"
      borderRadius="16px"
      p={8}
      backdropFilter="blur(14px)"
    >
      <Stack spacing={4} align="flex-start">
        {icon && (
          <Flex
            w={14}
            h={14}
            align="center"
            justify="center"
            rounded="full"
          >
            {icon}
          </Flex>
        )}

        <Heading size="md" color="white">
          {heading}
        </Heading>

        {description && (
          <Text fontSize="sm" color="gray.300">
            {description}
          </Text>
        )}
      </Stack>
    </Box>
  );
};

/* ================= MAIN SECTION ================= */

export default function SplitWithImage() {
  return (
    <Box bg="#0b0f17" py={{ base: 20, md: 28 }}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16}>

          {/* ================= LEFT (STICKY) ================= */}
          <Stack
            spacing={6}
            position={{ base: "static", lg: "sticky" }}
            top="120px"
            alignSelf="flex-start"
          >
            <Text
              textTransform="uppercase"
              color="#7df9ff"
              fontWeight={600}
              fontSize="sm"
              bg="rgba(125,249,255,0.12)"
              px={3}
              py={1}
              rounded="md"
              w="fit-content"
            >
              Our Vision
            </Text>

            <Heading
              color="white"
              fontSize={{ base: "3xl", md: "4xl" }}
              lineHeight="1.2"
            >
              What is Global Hyperloop Competition?
            </Heading>

            <Text color="gray.400" fontSize="lg">
              The Global Hyperloop Competition 2.0, hosted by the Indian Institute of Technology Madras, marks the next leap in bringing the Hyperloop revolution to India. Building on the success of our 2025 edition, GHC 2.0 returns this January 2026 with a renewed vision — to push boundaries of innovation, collaboration, and technology on a truly global scale
            </Text>

            <Text color="gray.400" fontSize="lg">
              With an upgraded 422m test track and exciting new challenges, this edition promises an even more engaging, competitive, and fun experience for teams worldwide. Our mission is to inspire the next generation of innovators, engineers, and dreamers to accelerate the future of transportation and redefine what’s possible.
            </Text>
          </Stack>

          {/* ================= RIGHT (ELECTRIC CARDS) ================= */}
          <Stack spacing={10}>

            <ElectricBorder
              color="#7df9ff"
              speed={0.8}
              chaos={0.1}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <Card
                heading="Innovation"
                icon={<Icon as={FcElectronics} w={10} h={10} />}
                description="Foster a culture of creativity and innovation in Hyperloop research and development. Encourage experimentation and prototyping of new ideas and technologies. Develop innovative solutions to real-world problems"
              />
            </ElectricBorder>

            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.1}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <Card
                heading="Inclusion"
                icon={<Icon as={FcCollaboration} w={10} h={10} />}
                description="Provide a platform for diverse stakeholders to share knowledge, resources, and expertise. Foster a community of students, professionals, and industries working together to advance Hyperloop technology."
              />
            </ElectricBorder>

            <ElectricBorder
              color="#7df9ff"
              speed={1.2}
              chaos={0.1}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <Card
                heading="Implementation"
                icon={<Icon as={FcWorkflow} w={10} h={10} />}
                description="Design, build, and test scalable and sustainable Hyperloop systems. Collaborate with industries, governments, and academia to accelerate adoption. Develop standards and regulations for safe and efficient Hyperloop operations"
              />
            </ElectricBorder>

          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
