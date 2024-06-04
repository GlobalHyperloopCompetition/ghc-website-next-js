"use client"

import { Container, Heading, Image, Stack } from "@chakra-ui/react";

const CreatedBy = () => {
  return (
    <Container id={"createdBy"} maxW={"7xl"} overflow={"hidden"} px={8} mb={10}>
      <Heading textAlign={"center"} fontSize={{ base: "3xl", md: "5xl" }}>
        Associated Teams
      </Heading>
      <Stack
        align={"center"}
        justifyContent={"space-evenly"}
        spacing={10}
        py={{ base: 12, md: 20 }}
        direction={{ base: "column", md: "row" }}
        wrap={"wrap"}
      >
        {[
          "/Avishkar-logo.png",
          "/inf-hyp-logo.png",
          "/team_vegapod_logo.png",
          "/nirmaanhyperloop_20210704_0.webp",
          "/loopmit-logo.jpeg",
        ].map((src) => (
          <>
            <Image src={src} height={100}></Image>
          </>
        ))}
      </Stack>
    </Container>
  );
};

export default CreatedBy;
