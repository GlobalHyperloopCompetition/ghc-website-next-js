"use client";

import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import HeroSection from "../components/HomeHero";
import Spons from "../components/spons";
import SupportersSection from "@/components/supporters";
import Footer from "../components/Footer";
import Business from "../components/Business";
import FAQ from "../components/FAQ";

const BlurSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(10px)", opacity: 0.5 }}
      animate={{
        filter: isInView ? "blur(0px)" : "blur(10px)",
        opacity: isInView ? 1 : 0.5,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Home: React.FC<any> = () => {
  return (
    <AnimatePresence mode="wait">
      <Box maxWidth={"full"}>
        <Navbar />

        <BlurSection>
          <HeroSection />
        </BlurSection>

        <BlurSection>
          <Spons />
        </BlurSection>

        <BlurSection>
          <SupportersSection />
        </BlurSection>

        <BlurSection>
          <Business />
        </BlurSection>

        <BlurSection>
          <Subscribe />
        </BlurSection>

        <BlurSection>
          <FAQ />
        </BlurSection>

        <Footer />
      </Box>
    </AnimatePresence>
  );
};

export default Home;
