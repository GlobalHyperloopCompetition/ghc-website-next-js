"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import HeroSection from "../components/HomeHero";
import Footer from "../components/Footer";
import Business from "../components/Business";
import FAQ from "../components/FAQ";
import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { exportDataToExcel } from "@/firebase/FirestoreToExcel";
import NewsLetter from "@/components/Newsletter";

const Home: React.FC<any> = () => {
  return (
    <AnimatePresence mode="wait">
      <Box maxWidth={"full"}>
        <Navbar />
        <HeroSection />
        <Business />
        <Subscribe />
        <FAQ />
        <Footer />
      </Box>
    </AnimatePresence>
  );
};

export default Home;
