"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import HeroSection from "../components/HomeHero";
import Spons from "../components/spons";
import SupportersSection from "@/components/supporters";
import Footer from "../components/Footer";
import Business from "../components/Business";
import FAQ from "../components/FAQ";
import VideoLoader from "../components/VideoLoader";

/* ---------- Blur Section ---------- */
const BlurSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-10% 0px -10% 0px",
  });

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

/* ---------- Home ---------- */
const Home: React.FC = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;

    // Show loader only on first load or reload
    if (!nav || nav.type === "reload") {
      setShowLoader(true);
    }
  }, []);

  return (
    <>
      {/* SITE CONTENT (always rendered underneath) */}
      <Box maxWidth="full">
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

      {/* LOADER OVERLAY (fades during last 300ms of video) */}
      {showLoader && (
        <VideoLoader onFinish={() => setShowLoader(false)} />
      )}
    </>
  );
};

export default Home;
