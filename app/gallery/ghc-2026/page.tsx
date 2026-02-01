"use client";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer"
import { ParallaxScroll } from "../../../components/ui/parallax-scroll";
import {motion} from 'framer-motion'

export default function ParallaxScrollDemo() {
  return (
    <>
      <Navbar />
      <Box
        px={{ base: 6, md: 12 }}
        pt={{ base: 24, md: 28 }}   // Navbar spacing
        pb={10}
        textAlign="center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <VStack spacing={4}>
            <Heading as="h1" size="2xl" color="gray.100">
              GHC 2026 Gallery
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="3xl">
              Take a look at some of the highlights from the event!
            </Text>
          </VStack>
        </motion.div>
      </Box>

      <ParallaxScroll images={images} />
      <Footer />
    </>
  );
}

const images = [
  "/ghc2/ghc2.0%20(1).jpeg",
  "/ghc2/ghc2.0%20(1).JPG",

  "/ghc2/ghc2.0%20(2).jpeg",
  "/ghc2/ghc2.0%20(2).JPG",

  "/ghc2/ghc2.0%20(3).jpeg",
  "/ghc2/ghc2.0%20(3).JPG",

  "/ghc2/ghc2.0%20(4).JPG",
  "/ghc2/ghc2.0%20(5).JPG",
  "/ghc2/ghc2.0%20(6).jpg",
  "/ghc2/ghc2.0%20(7).jpg",

  "/ghc2/ghc2.0%20(8).jpg",
  "/ghc2/ghc2.0%20(9).jpg",
  "/ghc2/ghc2.0%20(10).jpg",
];
