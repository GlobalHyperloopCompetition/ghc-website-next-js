// import { StarIcon } from '@chakra-ui/icons'
"use client"

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
// import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
// import { ReactElement } from 'react'
// import { BiMoney } from 'react-icons/bi'
// import { FaBusinessTime, FaMapMarkedAlt, FaMoneyBill } from 'react-icons/fa'

// interface FeatureProps {
//   text: string
//   iconBg: string
//   icon?: ReactElement
// }

// const Feature = ({ text, icon, iconBg }: FeatureProps) => {
//   return (
//     <Stack direction={'row'} align={'center'}>
//       <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{text}</Text>
//     </Stack>
//   )
// }

export default function SplitWithImage() {
  return (
    <Container maxW={"7xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Vision
          </Text>
          <Heading>What is Global Hyperloop Competition ?</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            The Global Hyperloop Competition 2025, hosted by the Indian Institute of
            Technology, Madras, introduces the Hyperloop to India, providing a
            global platform for innovative teams. It aims to showcase and
            propagate hyperloop concepts worldwide, fostering a transformative
            spirit among young minds in the field of transportation.
          </Text>
          <Text color={"gray.500"} fontSize={"lg"}>
            With a 400m tube on the edge we have a vision to conduct a global
            competition to foster innovation, collaboration, and technological
            advancement on a worldwide scale.{" "}
          </Text>
          {/* <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={FaBusinessTime} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business Planning'}
            />
            <Feature
              icon={<Icon as={FaMoneyBill} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature
              icon={<Icon as={FaMapMarkedAlt} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            />
          </Stack> */}
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/ghcomp.jpg"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}