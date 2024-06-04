"use client"

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
  Box,
  AspectRatio,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
import Link from "next/link";

export default function Videos() {
  return (
    <Flex
      minH={"50vh"}
      align={"center"}
      marginBottom={"7%"}
      justify={"center"}
      flexDirection={"column"}
      //   bg={useColorModeValue('gray.50', 'gray.800')}
      maxW={"7xl"}
    >
      <Text fontWeight={600} fontSize={{ base: "3xl", md: "5xl" }} padding={5}>
        Lectures:
      </Text>
      <Container
        w={"full"}
        maxW={"7xl"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Accordion allowMultiple width="100%" maxW="5xl" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl">PROPULSION</Text>
              <Text
                display={{ base: "none", md: "block" }}
                fontSize="lg"
                opacity={0.7}
                ml={"auto"}
              >
                {" "}
                loopMIT (2 Feb)
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel
              pb={6}
              display={"flex"}
              flexDir={{ base: "column", md: "row" }}
            >
              <Text
                color="gray.500"
                w={"85%"}
                mr={8}
                mb={{ base: 8, md: 0 }}
                textAlign={"justify"}
              >
                The propulsion system is crucial for achieving the unprecedented
                speeds and efficiency associated with this cutting-edge
                transportation concept. loopMIT uses a meticulously engineered
                single-sided linear induction motor, which is the driving force
                behind propelling the pod through a partial vacuum tube at high
                speeds. The levitation department is responsible for maintaining
                the vehicle's elevation above the track via magnetic levitation
                to lift the pod and keep it suspended during travel.
                <br />
                <br />
                Visit loopMIT at:{" "}
                <Link href="https://www.loopmit.in/" target="_blank">
                  <Text color={"red.400"} _hover={{ textDecor: "underline" }}>
                    https://www.loopmit.in/
                  </Text>
                </Link>
              </Text>
              <Box
                position={"relative"}
                height={{ base: "260px", md: "300px" }}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <AspectRatio h={"100%"} w={"100%"} ratio={1}>
                  <iframe
                    title="Infrastructure"
                    src="https://www.youtube.com/embed/rp35Dgmx_EI?si=IBVeyaqb1KaM-FRl"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl" textAlign={"left"} pr={4}>
                {" "}
                MECHANICAL
              </Text>
              <Text
                display={{ base: "none", md: "block" }}
                fontSize="lg"
                opacity={0.7}
                ml={"auto"}
              >
                {" "}
                Vegapod Hyperloop (6 Feb)
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel
              pb={6}
              display={"flex"}
              flexDir={{ base: "column", md: "row" }}
            >
              <Text
                color="gray.500"
                w={"85%"}
                mr={8}
                mb={{ base: 8, md: 0 }}
                textAlign={"justify"}
              >
                Founded in 2018, Vegapod Hyperloop is a student-driven team from
                Dr. Vishwanath Karad MIT World Peace University, Pune,
                Maharashtra working on the scalability and development of
                Hyperloop technology. At the European Hyperloop Week 2023, the
                team secured a position amongst the world's top six teams,
                showcasing a fully operational Hyperloop prototype. They stood
                as the sole Asian representative to successfully pass the
                rigorous Testing and Safety Documentation (TSD) round. The
                mechanical subsystem is responsible for incorporating all the
                various technologies featured in the Hyperloop into a stable,
                safe and usable unit. Backed by Indian Institute of Technology
                Delhi and Indian Institute of Management Ahmedabad, the founders
                of Vegapod Hyperloop have gone on to co-found Quintrans
                Hyperloop- a Pune based start-up.
                <br />
                <br />
                Visit Vegapod Hyperloop at:{" "}
                <Link
                  href="https://www.linkedin.com/company/teamvegapodhyperloop/"
                  target="_blank"
                >
                  <Text color={"red.400"} _hover={{ textDecor: "underline" }}>
                    https://www.linkedin.com/company/teamvegapodhyperloop/
                  </Text>
                </Link>
              </Text>
              <Box
                position={"relative"}
                height={{ base: "260px", md: "300px" }}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <AspectRatio h={"100%"} w={"100%"} ratio={1}>
                  <iframe
                    title="Mechanical"
                    src="https://www.youtube.com/embed/nqHfmi1Js2Y?si=B-V5NH9d1Pqrvzux"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl" textAlign={"left"}>
                {" "}
                SENSE AND CONTROL
              </Text>
              <Text
                display={{ base: "none", md: "block" }}
                fontSize="lg"
                opacity={0.7}
                ml={"auto"}
              >
                {" "}
                Nirmaan Hyperloop (8 Feb)
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel
              pb={6}
              display={"flex"}
              flexDir={{ base: "column", md: "row" }}
            >
              <Text
                color="gray.500"
                w={"85%"}
                mr={8}
                mb={{ base: 8, md: 0 }}
                textAlign={"justify"}
              >
                Founded in 2019, Nirmaan Hyperloop is a committed student
                organisation at Thakur College of Engineering and Technology,
                Mumbai, Maharashtra of aspiring engineers, researchers to assist
                high-pace transportation: Hyperloop. The Team includes numerous
                domain names like Software, Electronics, Manufacturing,
                Aerodynamics, Brakes, Propulsion, etc. Since the pod in a
                Hyperloop is in vacuum, getting access to the various
                information about the systems when in motion or static is very
                difficult. The software system is crucial for safety,
                workability and research for the Hyperloop. Nirmaan Hyperloop
                has achieved low-latency and high-bandwidth inter-process
                Communication and has a specialised In-House Graphical
                User-Interface (GUI).
                <br />
                <br />
                Visit Nirmaan Hyperloop at:{" "}
                <Link href="https://www.nirmaanhyperloop.com/" target="_blank">
                  <Text color={"red.400"} _hover={{ textDecor: "underline" }}>
                    https://www.nirmaanhyperloop.com/
                  </Text>
                </Link>
              </Text>
              <Box
                position={"relative"}
                height={{ base: "260px", md: "300px" }}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <AspectRatio h={"100%"} w={"100%"} ratio={1}>
                  <iframe
                    title="Mechanical"
                    src="https://www.youtube.com/embed/u6_Gc-h4KNA?si=Trb0Z6xQqvauF8si"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl"> POWER SYSTEM</Text>
              <Text
                display={{ base: "none", md: "block" }}
                fontSize="lg"
                opacity={0.7}
                ml={"auto"}
              >
                {" "}
                Infinity Hyperloop (10 Feb)
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel
              pb={6}
              display={"flex"}
              flexDir={{ base: "column", md: "row" }}
            >
              <Text
                color="gray.500"
                w={"85%"}
                mr={8}
                mb={{ base: 8, md: 0 }}
                textAlign={"justify"}
              >
                Founded in 2019, Infinity Hyperloop is a team of 25+ zealous
                undergraduate engineers from several disciplines of IIT Delhi
                working together to promote interdisciplinary exchanges of
                knowledge and ideas and bring forth the fifth mode of
                transportation. As part of their mission, they intend to develop
                an autonomous scalable pod and develop new technologies to
                facilitate the commercialization of the Hyperloop system. The
                Power or Electrical System in Hyperloop controls the amount of
                electric current, voltage and energy supplied to the pod and
                track system. It typically uses a complex system of
                electromagnetic sensors and coils to ensure the safety, speed
                and reliability of the pod.
                <br />
                <br />
                Visit Infinity Hyperloop at:{" "}
                <Link
                  href="https://infinityhyperloop.iitd.ac.in/"
                  target="_blank"
                >
                  <Text color={"red.400"} _hover={{ textDecor: "underline" }}>
                    https://infinityhyperloop.iitd.ac.in/
                  </Text>
                </Link>
              </Text>
              <Box
                position={"relative"}
                height={{ base: "260px", md: "300px" }}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <AspectRatio h={"100%"} w={"100%"} ratio={1}>
                  <iframe
                    title="Power System"
                    src="https://www.youtube.com/embed/pBm973y42hA?si=cNx1EqcEICKLKAYs"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl"> INFRASTRUCTURE</Text>
              <Text
                display={{ base: "none", md: "block" }}
                fontSize="lg"
                opacity={0.7}
                ml={"auto"}
              >
                {" "}
                Avishkar Hyperloop (12 Feb)
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel
              pb={6}
              display={"flex"}
              flexDir={{ base: "column", md: "row" }}
            >
              <Text
                color="gray.500"
                w={"85%"}
                mr={8}
                mb={{ base: 8, md: 0 }}
                textAlign={"justify"}
              >
                Founded in 2017, Avishkar Hyperloop is a student-run team based
                out of Indian Institute of Technology Madras, backed by the
                Indian Railways. Driven by the goal to make Hyperloop an
                economically viable and sustainable mode of transport, the team
                shot to global prominence when it finished at the top 3 teams at
                European Hyperloop Week 2023. As of 2024, Avishkar Hyperloop
                already has several patents to its. Infrastructure i.e.
                track-&-tube is responsible for the bulk of the cost in a
                Hyperloop. A safe vacuum environment is to be maintained inside
                the tube while the pod levitates either above or below the track
                inside it. While most Hyperloop teams across the world use steel
                tubes whose thickness range from 16-18 mm, Avishkar Hyperloop
                has managed to develop a stable and safe vaccum tube of 6 mm
                thickness. Avishkar Hyperloop's designs are being used to create
                Asia's first student-made vacuum compatible Hyperloop
                track-&-tube at Thayyur (near Chennai).
                <br />
                <br />
                Visit Avishkar Hyperloop at:{" "}
                <Link href="https://avishkarhyperloop.com/" target="_blank">
                  <Text color={"red.400"} _hover={{ textDecor: "underline" }}>
                    https://avishkarhyperloop.com/
                  </Text>
                </Link>
              </Text>
              <Box
                position={"relative"}
                height={{ base: "260px", md: "300px" }}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <AspectRatio h={"100%"} w={"100%"} ratio={1}>
                  <iframe
                    title="Power System"
                    src="https://www.youtube.com/embed/_AH3gN7E69I?si=cnMP4tAMo5-Zu6Tk"
                    allowFullScreen
                  />
                </AspectRatio>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}
