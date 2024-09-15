"use client"
import {
    Box,
    Heading,
    Text,
    Stack,
    Container,
    Image,
  } from "@chakra-ui/react";
  import { useColorModeValue } from "@chakra-ui/react";
  import Navbar from "../../../components/Navbar";
  import Footer from "../../../components/Footer";
  // import BasicStatistics from "../../components/Stats";
  import OurTeam from "../../../components/OurTeam";
  import TeamHero from "../../../components/TeamHero";
  import Advisors from "../../../components/Advisors";
  
  // interface Props {
  //   children: React.ReactNode;
  // }
  
  // const Testimonial = (props: Props) => {
  //   const { children } = props;
  
  //   return <Box>{children}</Box>;
  // };
  
  // const TestimonialContent = (props: Props) => {
  //   const { children } = props;
  
  //   return (
  //     <Stack
  //       bg={useColorModeValue("white", "gray.900")}
  //       boxShadow={"lg"}
  //       p={8}
  //       rounded={"xl"}
  //       align={"center"}
  //       pos={"relative"}
  //       _after={{
  //         content: `""`,
  //         w: 0,
  //         h: 0,
  //         borderLeft: "solid transparent",
  //         borderLeftWidth: 16,
  //         borderRight: "solid transparent",
  //         borderRightWidth: 16,
  //         borderTop: "solid",
  //         borderTopWidth: 16,
  //         borderTopColor: useColorModeValue("white", "gray.900"),
  //         pos: "absolute",
  //         bottom: "-16px",
  //         left: "50%",
  //         transform: "translateX(-50%)",
  //       }}
  //     >
  //       {children}
  //     </Stack>
  //   );
  // };
  
  // const TestimonialHeading = (props: Props) => {
  //   const { children } = props;
  
  //   return (
  //     <Heading as={"h3"} fontSize={"xl"}>
  //       {children}
  //     </Heading>
  //   );
  // };
  
  // const TestimonialText = (props: Props) => {
  //   const { children } = props;
  
  //   return (
  //     <Text
  //       textAlign={"center"}
  //       color={useColorModeValue("gray.600", "gray.400")}
  //       fontSize={"sm"}
  //     >
  //       {children}
  //     </Text>
  //   );
  // };
  
  // const TestimonialAvatar = ({
  //   src,
  //   name,
  //   title,
  // }: {
  //   src: string;
  //   name: string;
  //   title: string;
  // }) => {
  //   return (
  //     <Flex align={"center"} mt={8} direction={"column"}>
  //       <Avatar src={src} mb={2} />
  //       <Stack spacing={-1} align={"center"}>
  //         <Text fontWeight={600}>{name}</Text>
  //         <Text fontSize={"sm"} color={"red.400"}>
  //           {title}
  //         </Text>
  //       </Stack>
  //     </Flex>
  //   );
  // };
  
  export default function Team() {
    return (
      <Box maxWidth={"full"} bg={useColorModeValue("white", "gray.800")}>
        <Navbar />
  
        <TeamHero />
        {/* 
              <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                  <Stack spacing={0} align={'center'}>
                      <Heading>Our Team Heads Speak</Heading>
                      <Text>We have been working with teams around the world</Text>
                  </Stack>
                  <Stack
                      direction={{ base: 'column', md: 'row' }}
                      spacing={{ base: 10, md: 4, lg: 10 }}>
                      <Testimonial>
                          <TestimonialContent>
                              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                              <TestimonialText>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                  imperdiet nibh lectus feugiat nunc sem.
                              </TestimonialText>
                          </TestimonialContent>
                          <TestimonialAvatar
                              src={
                                  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                              }
                              name={'Jane Cooper'}
                              title={'CEO at ABC Corporation'}
                          />
                      </Testimonial>
                      <Testimonial>
                          <TestimonialContent>
                              <TestimonialHeading>Intuitive Design</TestimonialHeading>
                              <TestimonialText>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                  imperdiet nibh lectus feugiat nunc sem.
                              </TestimonialText>
                          </TestimonialContent>
                          <TestimonialAvatar
                              src={
                                  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                              }
                              name={'Jane Cooper'}
                              title={'CEO at ABC Corporation'}
                          />
                      </Testimonial>
                      <Testimonial>
                          <TestimonialContent>
                              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                              <TestimonialText>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                  imperdiet nibh lectus feugiat nunc sem.
                              </TestimonialText>
                          </TestimonialContent>
                          <TestimonialAvatar
                              src={
                                  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                              }
                              name={'Jane Cooper'}
                              title={'CEO at ABC Corporation'}
                          />
                      </Testimonial>
                      <Testimonial>
                          <TestimonialContent>
                              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                              <TestimonialText>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                  imperdiet nibh lectus feugiat nunc sem.
                              </TestimonialText>
                          </TestimonialContent>
                          <TestimonialAvatar
                              src={
                                  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                              }
                              name={'Jane Cooper'}
                              title={'CEO at ABC Corporation'}
                          />
                      </Testimonial>
                  </Stack>
                   <BasicStatistics /> 
              </Container> */}
  
        <Advisors />
  
        {/* <Stack
          mx={{ xl: "auto" }}
          direction={{ base: "column-reverse", md: "row" }}
          maxW="5xl"
          py={10}
          my={20}
          align={"center"}
          id={"heads"}
        >
          <Stack
            spacing={2}
            as={Container}
            maxW={"2xl"}
            textAlign={"center"}
            py={4}
            mb={10}
          >
            <Heading fontSize={{ base: "2xl", sm: "5xl" }} fontWeight={"bold"}>
              Arpit Garg
            </Heading>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={{ base: "sm", sm: "lg" }}
            >
              GHC Head
            </Text>
            <Text
              color={useColorModeValue("gray.600", "gray.200")}
              fontSize={{ base: "sm", sm: "lg" }}
            >
              Email: ghc@smail.iitm.ac.in
            </Text>
            <Text
              color={useColorModeValue("gray.600", "gray.200")}
              fontSize={{ base: "sm", sm: "lg" }}
            >
              Phone: +91-8437655909
            </Text>
          </Stack>
          <Image
            src={"/arpit.jpg"}
            borderRadius={"10px"}
            h={300}
            w={300}
            alt={"/arpit.jpg"}
          />
        </Stack> */}
  
        <OurTeam />
        <Box width={"full"}>
          <Footer />
        </Box>
      </Box>
    );
  }
  