"use client"

import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HomeHero";
import Footer from "../components/Footer";
import Business from "../components/Business";
import FAQ from "../components/FAQ";
import { Box, Text } from "@chakra-ui/react";
import useGetTeam from "../utils/useGetTeam";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
import SplitWithImage from "../components/SplitWithImage";

const Loading = () => {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();
  const [isLoading] = useGetTeam();

  const show = {
    opacity: 1,
    display: "block",
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  };

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isLoading ? show : hide}
      ref={ref}
      transition={{ ease: "easeOut", duration: 3 }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"all ease 12s"}
        height={"100vh"}
        width={"100vw"}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ ease: "easeIn" }}
        >
          <Text fontWeight={"extrabold"} fontSize={"6xl"}>
            GHC
          </Text>
        </motion.div>
      </Box>
    </motion.div>
  );
};

const Home: React.FC<any> = () => {
  const [isLoading] = useGetTeam();

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loading />
      ) : (
        <Box maxWidth={"full"}>
          <Navbar />
          <HeroSection />
          <Business />
          <SplitWithImage />
          <FAQ />
          <Footer />
        </Box>
      )}
    </AnimatePresence>
  );
};

export default Home;
