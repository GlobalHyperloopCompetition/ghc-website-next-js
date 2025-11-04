"use client";
import {
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Card: React.FC<any> = ({ adv }: any) => {
  const { imgUrl, name, link } = adv;
  return (
    <Stack
      spacing={3}
      direction={"column"}
      width={"300px"}
      justify={"center"}
      align={"center"}
      textAlign={"center"}
    >
      <Image
        src={imgUrl}
        borderRadius={"full"}
        h={220}
        w={220}
        alt={name}
        objectFit="cover"
      />
      <Text fontSize={"lg"} fontWeight={"bold"}>
        {name}
      </Text>
      <SocialButton label={"External Link"} href={link}>
        <FaExternalLinkAlt />
      </SocialButton>
    </Stack>
  );
};

const Spons = () => {
  return (
    <Container maxW="6xl" id="sponsors" py={10}>
      <Stack spacing={4} textAlign="center" mb={10}>
        <Heading fontSize={{ base: "3xl", sm: "5xl" }} fontWeight="bold">
          Organisors
        </Heading>
      </Stack>

      <Flex
        wrap="wrap"
        gap={10}
        align="center"
        justify="center"
        flexDirection="row"
      >
        {Organisors.map((organisor) => (
          <Card key={organisor.name} adv={organisor} />
        ))}
      </Flex>
    </Container>
  );
};

export default Spons;

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      target="_blank"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

// ✅ Only IITM and Indian Railways remain
const Organisors = [
  {
    imgUrl: "/iitm.png",
    name: "Indian Institute of Technology, Madras",
    link: "https://www.iitm.ac.in",
  },
  {
    imgUrl: "/indianrailways.png",
    name: "Indian Railway",
    link: "https://www.indianrail.gov.in",
  },
];
