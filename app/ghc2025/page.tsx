// "use client";
// import {
//   Box,
//   Container,
//   Text,
//   Flex,
//   VStack,
//   HStack,
//   Badge,
//   Divider,
//   SimpleGrid,
//   useColorModeValue,
//   Heading,
//   Image,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import Navbar from "../../components/Navbar";

// // Types
// interface ScheduleItem {
//   day: string;
//   date: string;
// }

// interface Sponsor {
//   name: string;
//   logo: string;
// }

// // Framer Motion-typed components
// const MotionBox = motion(Box);
// const MotionText = motion(Text);

// const GHC2025 = () => {
//   // Animation Variants
//   const sectionAnimation = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const cardHoverEffect = {
//     whileHover: {
//       scale: 1.05,
//       boxShadow: "0 8px 24px rgba(0, 255, 255, 0.2)",
//       transition: { duration: 0.2 },
//     },
//   };

//   // Sample Data
//   const scheduleData: ScheduleItem[] = [
//     { day: "DAY 01", date: "21 February 2025" },
//     { day: "DAY 02", date: "22 February 2025" },
//     { day: "DAY 03", date: "23 February 2025" },
//     { day: "DAY 04", date: "24 February 2025" },
//     { day: "DAY 05", date: "25 February 2025" },
//   ];

//   const sponsors: Sponsor[] = [
//     { name: "Ansys", logo: "/path/to/ansys-logo.png" },
//     { name: "IR", logo: "/path/to/ir-logo.png" },
//     { name: "Ansys", logo: "/path/to/ansys-logo.png" },
//     { name: "IR", logo: "/path/to/ir-logo.png" },
//     { name: "Ansys", logo: "/path/to/ansys-logo.png" },
//     { name: "IR", logo: "/path/to/ir-logo.png" },
//   ];

//   return (
//     <Box bg={useColorModeValue("gray.50", "gray.800")} minH="100vh">
//       <Navbar />

//       <Container maxW="6xl" py={10}>
//         {/* Header Section */}
//         <VStack
//           spacing={10}
//           align="start"
//           mb={10}
//           as={motion.div}
//           initial="hidden"
//           animate="visible"
//           variants={sectionAnimation}
//         >
//           <Heading size="lg" color={useColorModeValue("teal.600", "teal.300")}>
//             GHC 2025
//           </Heading>
//           <Flex
//             w="full"
//             justify="space-between"
//             flexDir={["column", "row", "row"]}
//             gap={8}
//           >
//             {/* Dates */}
//             <VStack align="start">
//               <Text fontSize="md" color="gray.400">
//                 Dates
//               </Text>
//               <Text
//                 fontSize="2xl"
//                 fontWeight="bold"
//                 color={useColorModeValue("teal.600", "teal.300")}
//               >
//                 21st - 25th February 2025
//               </Text>
//             </VStack>

//             {/* Venue */}
//             <VStack align="start">
//               <Text fontSize="md" color="gray.400">
//                 Venue
//               </Text>
//               <Text
//                 fontSize="2xl"
//                 fontWeight="bold"
//                 color={useColorModeValue("teal.600", "teal.300")}
//               >
//                 IIT Madras, Chennai
//               </Text>
//             </VStack>

//             {/* Participating Teams */}
//             <VStack align="start">
//               <Text fontSize="md" color="gray.400">
//                 Participating Teams
//               </Text>
//               <Text
//                 fontSize="2xl"
//                 fontWeight="bold"
//                 color={useColorModeValue("teal.600", "teal.300")}
//               >
//                 50+ Teams
//               </Text>
//             </VStack>
//             {/* Participating Countries */}
//             <VStack align="start">
//               <Text fontSize="md" color="gray.400">
//                 Participating Countries
//               </Text>
//               <Text
//                 fontSize="2xl"
//                 fontWeight="bold"
//                 color={useColorModeValue("teal.600", "teal.300")}
//               >
//                 10+
//               </Text>
//             </VStack>
//           </Flex>
//         </VStack>

//         <Divider
//           my={10}
//           borderColor={useColorModeValue("teal.300", "teal.500")}
//         />

//         {/* Itinerary Section */}
//         <VStack
//           align="start"
//           spacing={8}
//           mb={10}
//           as={motion.div}
//           initial="hidden"
//           animate="visible"
//           variants={sectionAnimation}
//         >
//           <Heading size="md">Itinerary</Heading>
//           <SimpleGrid columns={[1, 2, 3]} spacing={6} w="full">
//             {scheduleData.map((item, index) => (
//               <MotionBox
//                 key={index}
//                 p={6}
//                 bg={useColorModeValue("white", "gray.700")}
//                 border="1px solid"
//                 borderColor={useColorModeValue("teal.200", "teal.400")}
//                 borderRadius="md"
//                 {...cardHoverEffect}
//               >
//                 <Badge
//                   colorScheme="teal"
//                   fontSize="lg"
//                   mb={2}
//                   variant="solid"
//                   rounded="full"
//                   px={3}
//                   py={1}
//                 >
//                   {item.day}
//                 </Badge>
//                 <Text fontSize="sm" color="gray.400">
//                   {item.date}
//                 </Text>
//                 <Text mt={4}>8:00 AM - Description Lorem Ipsum</Text>
//                 <Text>1:00 PM - Description Lorem Ipsum</Text>
//               </MotionBox>
//             ))}
//           </SimpleGrid>
//         </VStack>

//         <Divider
//           my={10}
//           borderColor={useColorModeValue("teal.300", "teal.500")}
//         />

//         {/* Day-Wise Schedule */}
//         <VStack
//           spacing={6}
//           mb={10}
//           as={motion.div}
//           initial="hidden"
//           animate="visible"
//           variants={sectionAnimation}
//         >
//           <Heading size="md">Day-Wise Schedule</Heading>
//           <Text fontSize="lg" color="gray.400" fontStyle="italic">
//             Coming Soon
//           </Text>
//         </VStack>

//         <Divider
//           my={10}
//           borderColor={useColorModeValue("teal.300", "teal.500")}
//         />

//         {/* Judges Section */}
//         <VStack
//           spacing={4}
//           mb={10}
//           as={motion.div}
//           initial="hidden"
//           animate="visible"
//           variants={sectionAnimation}
//         >
//           <Heading size="md">Judges and Jury Speakers</Heading>
//           <Text fontSize="lg" color="gray.400">
//             TO BE ANNOUNCED
//           </Text>
//         </VStack>

//         <Divider
//           my={10}
//           borderColor={useColorModeValue("teal.300", "teal.500")}
//         />

//         {/* Sponsors Section */}
//         <VStack
//           spacing={6}
//           as={motion.div}
//           initial="hidden"
//           animate="visible"
//           variants={sectionAnimation}
//         >
//           <Heading size="md">Sponsors of GHC 2025</Heading>
//           <SimpleGrid columns={[2, 3, 6]} spacing={8} w="full">
//             {sponsors.map((sponsor, index) => (
//               <MotionBox
//                 key={index}
//                 p={4}
//                 bg={useColorModeValue("white", "gray.700")}
//                 borderRadius="lg"
//                 shadow="md"
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 whileHover={{ scale: 1.05 }}
//                 cursor="pointer"
//                 transition="all 0.2s"
//               >
//                 {/* {sponsor.logo ? (
//                   <Image src  />
//                 ) : (
//                   <Text fontWeight="bold">{sponsor.name}</Text>
//                 )} */}
//               </MotionBox>
//             ))}
//           </SimpleGrid>
//         </VStack>
//       </Container>
//     </Box>
//   );
// };

// export default GHC2025;