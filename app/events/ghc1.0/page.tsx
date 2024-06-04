"use client"
import {
    Box,
    Text,
    useColorModeValue,
    Container,
  } from "@chakra-ui/react";
  import Navbar from "../../../components/Navbar";
  import Footer from "../../../components/Footer";
  import Hero from "../../../components/ghc1.0/Hero";
  import TimeLine from "../../../components/TimeLine";
  import { useEffect } from "react";
  
  const GHC1 = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <Container maxW={"7xl"} px={0}>
        <Navbar />
        <Hero />
        <Box
          py={{ base: 4, md: 20, xl: 30 }}
          px={{ base: 6, md: 8 }}
          color={useColorModeValue("gray.800", "gray.400")}
          maxW={"7xl"}
        >
          <Text fontSize={"xl"}>
            At GHC, we aspire to cultivate a vision wherein remote cities are
            seamlessly connected, providing the world with transportation that is
            both efficient and sustainable, characterized by high-speed
            connectivity while significantly reducing the negative impact on the
            environment. We are driven to provide an opportunity where like-minded
            individuals get to exchange their ideas, initiate collaborations and
            guide the teams who aspire to lead the future with their experience.
          </Text>
          <Text fontSize={"xl"} mt={4}>
            With a 400m tube on the edge we have a vision to conduct a global
            competition to foster innovation, collaboration, and technological
            advancement on a worldwide scale. The conference will be the first
            stepping stone to it.
            <br />
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.500, purple.300)"
              bgClip="text"
              fontSize={"2xl"}
              fontWeight={"bold"}
            >
              Stay tuned for more updates!
            </Text>
          </Text>
        </Box>
  
        <TimeLine />
  
        <Box width={"full"}>
          <Footer />
        </Box>
      </Container>
    );
  };
  
  export default GHC1;
  