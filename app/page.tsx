"use client";

import React from "react";
import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import HomeHero from "../components/HomeHeronew";
import Spons from "../components/spons";
import SupportersSection from "@/components/supporters";
import Footer from "../components/Footer";
import Business from "../components/Business";
import FAQ from "../components/FAQ";

const Home: React.FC = () => {
  return (
    <Box w="100%" overflowX="hidden">

      <Navbar />

      {/* HERO GOES UNDER NAVBAR */}
      <HomeHero />

      <Spons />

      <SupportersSection />

      <Business />

      <Subscribe />

      <FAQ />

      <Footer />

    </Box>
  );
};

export default Home;
