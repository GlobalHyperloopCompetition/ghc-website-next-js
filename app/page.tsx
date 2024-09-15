"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/Newsletter"
import Subscribe from "../components/Subscribe";
import HeroSection from "../components/HomeHero";
import Footer from "../components/Footer";
import Business from "../components/Business";
import FAQ from "../components/FAQ";
<<<<<<< HEAD
import { Box, Text } from "@chakra-ui/react";
import useGetTeam from "../utils/useGetTeam";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
import SplitWithImage from "../components/SplitWithImage";
=======
import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { exportDataToExcel } from "@/firebase/FirestoreToExcel";
import NewsLetter from "@/components/Newsletter";
>>>>>>> abfe966dd51860e879a7e3dd62bb24f670c9b191

const Home: React.FC<any> = () => {
  return (
    <AnimatePresence mode="wait">
      <Box maxWidth={"full"}>
        <Navbar />
        <HeroSection />
        <Business />
        {/* <SplitWithImage /> */}
       
        <Subscribe />
        <FAQ />
        <Footer />
      </Box>
    </AnimatePresence>
  );
};

export default Home;
