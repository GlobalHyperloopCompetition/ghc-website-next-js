"use client"

import {
  Text,
  Image,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { TfiNewWindow } from "react-icons/tfi";
import Link from "next/link";

const SplitWithImage: React.FC<any> = () => {
  return (
    <Container maxW={"7xl"} py={16}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
        <VStack spacing={6}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/conf.jpg"}
            objectFit={"cover"}
          />
          <Heading>The Conference</Heading>
          <Text color={"gray.500"} fontSize={"lg"} textAlign={"justify"}>
            The Global Hyperloop Conference was a precursor to the magnanimous
            Global Hyperloop Competition 2025 where the judges, participants,
            sponsors and orgasnisers found a platform to interact with each
            other and the world whilst unveiling the series of events entailed
            in the Global Hyperloop Competition.
          </Text>
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
            <Link href={"/events/ghc1.0"}>
              <Button rightIcon={<TfiNewWindow />}>Learn More</Button>
            </Link>
          </motion.div>
        </VStack>
        <VStack spacing={6}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/comp.jpg"}
            objectFit={"cover"}
          />
          <Heading>The Competition</Heading>

          <Text color={"gray.500"} fontSize={"lg"} textAlign={"justify"}>
            {/* A melange of science, technology and innovation, the Global Hyperloop Competition brings to India the preliminary stage of the profound idea of the fifth mode of transport - the Hyperloop. */}
            The Global Hyperloop Competition provides a stage for teams, in
            India and abroad, to showcase their innovation and research in the
            extensive field of hyperloop thereby propagating the concept
            globally. Conducted by the Indian Institute of Technology, Madras,
            GHC envisions fostering a spirit of transformation and transition
            among the young minds of the world!
          </Text>
          <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
            <Link href={"/events/ghc1.0"}>
              <Button rightIcon={<TfiNewWindow />}>Learn More</Button>
            </Link>
          </motion.div>
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default SplitWithImage;
