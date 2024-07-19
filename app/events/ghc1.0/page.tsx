"use client";

import { Box, Text, useColorModeValue, Container } from "@chakra-ui/react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Hero from "../../../components/ghc1.0/Hero";
import { useEffect } from "react";
import Carousel from "@/components/Carousel";

const GHC1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxW="7xl" px={0}>
      <Navbar />
      <Hero />
      <Carousel />

      <Box
        bg={useColorModeValue("gray.100", "gray.800")}
        py={8}
        px={{ base: 4, md: 8 }}
      >
        <Text fontSize="2xl" fontWeight="bold" color="red.400" mb={4}>
          Day 0
        </Text>
        <Text fontSize="xl" mt={2}>
          Day 0 at the Parivahan Global Hyperloop Conference was all about
          innovation, prototypes, and progress! At the Discovery Campus of
          @reachiitm, we proudly presented our track-&-tube, now standing at
          over 200m, to delegates and future participants. The icing on the cake
          was a special statement of support by Naresh Sharma of
          @arcelormittalgroup, Vijay Pratap Singh, Sudeep Shrivastava, and
          Rajesh Kumar Jain. The day ended with a brilliant Pod-Run by
          @avishkarhyperloop showcasing the bright future of IITM in Hyperloop!
          The inventions and technologies were praised by all and made Day 0 a
          clear success! Prominent figures from Indian Railways and
          @railminindia attending the event include Mr. Amit Saraf, Mr. Prashant
          Mishra, Mr. Nirdesh Tyagi, and Mr. Venus Sehgal. Other delegates
          involve Mr. @marsgeuze, Chief Hyperloop Officer of @hardt.hyperloop;
          Mr. Osama Amin K, Senior Research Scientist at @cemsekaust; Mr.
          Gabriele Semino, Project Lead at @tumhyperloop; Dr. Harj Dhaliwal,
          Capital Programs Officer at @nevomo_tech; and Dr. Ravindra Kumar,
          Chief Scientist at @csircrri.
        </Text>
      </Box>

      <Box
        bg={useColorModeValue("gray.200", "gray.700")}
        py={8}
        px={{ base: 4, md: 8 }}
      >
        <Text fontSize="2xl" fontWeight="bold" color="blue.500" mb={4}>
          Day 1
        </Text>
        <Text fontSize="xl" mt={2}>
          Day 1 at the Parivahan Global Hyperloop Conference: The magna dies
          started off with an auspicious inauguration ceremony by the Director,
          Prof. V. Kamakoti, our faculty advisor, Prof. Satya Chakravarthy, and
          our guests of honor, Mr. Rajesh Kumar Jain and Mr. Vijay Pratap Singh
          of the Indian Railways. The conference started off by talks from the
          technical speakers - Dr. Denis Tudor, Dr. Gabriele Semino, Dr. Osama
          Amin, Dr. Ravindra Kumar, Mr. Mars Geuze, Dr. Wei Xu, and Mr. Harj
          Dhaliwal, each of them addressing the diverse aspects of Hyperloop and
          highlighting their contribution to the field! A stall visit by the
          delegates gave the qualifiers of the second round of “The Hyperloop
          Effect” a chance to interact with them and showcase their work.
        </Text>
      </Box>

      <Box
        bg={useColorModeValue("gray.300", "gray.600")}
        py={8}
        px={{ base: 4, md: 8 }}
      >
        <Text fontSize="2xl" fontWeight="bold" color="red.500" mb={4}>
          Day 2
        </Text>
        <Text fontSize="xl" mt={2}>
          Day 2 at the Parivahan Global Hyperloop Conference: The final day of
          the conference was dedicated to the Indian Hyperloop Sphere and its
          mammoth development over the years! It commenced with a panel
          discussion by Prof. Satyanarayan Chakravarthy and Mr. Pranit Mehta,
          eminent figures in the formation and establishment of the Hyperloop
          sphere of IIT Madras. The winners of The Hyperloop Effect, a case
          study competition held by the GHC - Force Hyperloop, The Wizzers,
          Arambh, SPD, and Levitators - were rewarded for their commendable
          efforts and dedication displayed as they ventured into the world of
          Hyperloop for the very first time! The end of the conference was
          marked by a closing ceremony that expressed gratitude to the
          delegates, attendees, and those who brought Parivahan from an idea to
          a reality!
        </Text>
      </Box>

      <Footer />
    </Container>
  );
};

export default GHC1;
