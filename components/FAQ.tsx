"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Flex,
  Text,
  Container,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function FAQSection() {
  return (
    <Box bg="#0b0f17" py={{ base: 20, md: 28 }}>
      <Container maxW="5xl">
        <Flex
          direction="column"
          align="center"
          textAlign="center"
          mb={12}
        >
          <Text
            textTransform="uppercase"
            color="#7df9ff"
            fontWeight={600}
            fontSize="sm"
            mb={3}
            letterSpacing="wider"
          >
            Support
          </Text>

          <Text
            fontWeight={700}
            fontSize={{ base: "3xl", md: "4xl" }}
            color="white"
          >
            Frequently Asked Questions
          </Text>

          <Text
            color="gray.400"
            fontSize="lg"
            maxW="600px"
            mt={4}
          >
            Everything you need to know about GHC, its events, and how to get
            involved.
          </Text>
        </Flex>

        <Accordion allowMultiple>
          {[
            {
              q: "What is GHC?",
              a: "GHC is a student-run organisation that conducts the Global Hyperloop Competition and builds an international collaborative Hyperloop community.",
            },
            {
              q: "What was the Global Hyperloop Conference?",
              a: "Parivahan Global Hyperloop Conference was an international scientific conference held in April 2024, attended by researchers, startup founders, delegates, and students from across the world.",
            },
            {
              q: "What other events will GHC conduct in the future?",
              a: "GHC is set to inaugurate its 422m test track and tube and conduct future editions of the Global Hyperloop Competition. Further details will be released in due time.",
            },
            {
              q: "How can I take part in GHC events?",
              a: "We’ll be releasing a newsletter soon. For now, stay connected through our official social media channels for updates.",
            },
          ].map((item, idx) => (
            <AccordionItem
              key={idx}
              border="none"
              mb={6}
              bg="rgba(255,255,255,0.04)"
              borderRadius="16px"
              backdropFilter="blur(12px)"
            >
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    px={6}
                    py={5}
                    _hover={{ bg: "rgba(255,255,255,0.06)" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text
                        fontSize="lg"
                        fontWeight={600}
                        color="white"
                      >
                        {item.q}
                      </Text>
                    </Box>

                    <Icon
                      as={ChevronDownIcon}
                      fontSize="22px"
                      color="#7df9ff"
                      transform={isExpanded ? "rotate(180deg)" : "rotate(0deg)"}
                      transition="transform 0.25s ease"
                    />
                  </AccordionButton>

                  <AccordionPanel
                    px={6}
                    pb={6}
                    color="gray.300"
                    lineHeight="1.7"
                  >
                    {item.a}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
}
