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

/* ================= SOCIAL BUTTON ================= */

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
    <chakra.a
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      href={href}
      target="_blank"
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
    </chakra.a>
  );
};

/* ================= CARD ================= */

const Card = ({ adv }: { adv: any }) => {
  const { imgUrl, name, link } = adv;

  return (
    <Stack
      spacing={3}
      width="300px"
      align="center"
      textAlign="center"
    >
      <Image
        src={imgUrl}
        borderRadius="full"
        h={220}
        w={220}
        alt={name}
        objectFit="cover"
      />
      <Text fontSize="lg" fontWeight="bold">
        {name}
      </Text>
      <SocialButton label="External Link" href={link}>
        <FaExternalLinkAlt />
      </SocialButton>
    </Stack>
  );
};

/* ================= DATA ================= */

const Organisors = [
  {
    imgUrl: "/iitm.png",
    name: "Indian Institute of Technology, Madras",
    link: "https://www.iitm.ac.in",
  },
  {
    imgUrl: "iitmaa_logo.png",
    name: "IIT Madras Alumni Association",
    link: "https://iitmaa.org/",
  },
];

/* ================= MAIN COMPONENT ================= */

const Spons = () => {
  return (
    <section className="bg-[#0b0f17]">
      <Container maxW="6xl" id="sponsors" py={16}>
        <Stack spacing={6} textAlign="center" mb={12}>
          <Heading fontSize={{ base: "3xl", sm: "5xl" }} fontWeight="bold" color="white">
            Organisers
          </Heading>
        </Stack>

        <Flex
          wrap="wrap"
          gap={10}
          align="center"
          justify="center"
        >
          {Organisors.map((organisor) => (
            <Card key={organisor.name} adv={organisor} />
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Spons;
