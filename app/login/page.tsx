"use client"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { Link as ChakraLink } from "@chakra-ui/react";
  import { Form, Formik } from "formik";
  import { useMutation } from "react-query";
  import login from "../../utils/mutations/login";
  import { useState } from "react";
//   import { useNavigate, Link as ReactLink } from "react-router-dom";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
  export default function SimpleCard() {
    const mutation = useMutation(login);
    const navigate = useRouter();
    const [error, setError] = useState<string | undefined>();
  
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={5} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Text color={"red.400"}>features</Text> ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values) => {
                const response = await mutation.mutateAsync(values);
                console.log(response);
  
                if (response.message === "Login success!") {
                  const token = response.token;
                  localStorage.setItem("qid", token);
                //   navigate("/dashboard");  
                } else {
                  setError(response.message);
                }
              }}
            >
              {({ isSubmitting, handleChange, values }) => (
                <Form>
                  <Stack spacing={4}>
                    <FormControl id="email">
                      <FormLabel>Email address</FormLabel>
                      <Input
                        focusBorderColor="red.400"
                        type="email"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <Input
                        focusBorderColor="red.400"
                        type="password"
                        onChange={handleChange}
                        value={values.password}
                      />
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Checkbox defaultChecked={true} colorScheme="red">
                          Remember me
                        </Checkbox>
                        {/* <Text color={'red.400'}>Terms & Condn </Text> */}
                      </Stack>
                      <Button
                        type="submit"
                        fontFamily={"heading"}
                        w={"full"}
                        bgGradient="linear(to-r, red.400, purple.400)"
                        color={"white"}
                        _hover={{
                          bgGradient: "linear(to-r, red.400,purple.500)",
                          boxShadow: "xl",
                        }}
                        isLoading={isSubmitting}
                      >
                        Sign in
                      </Button>
                    </Stack>
                  </Stack>
                  <Text align={"center"} color={"red.600"} pt={2}>
                    {error}
                  </Text>
                  <Text pt={2} align={"center"}>
                    Don't have an account yet?{" "}
                    <ChakraLink as={NextLink} color={"red.400"} href="/signup">
                      Register Now!
                    </ChakraLink>
                  </Text>
                </Form>
              )}
            </Formik>
          </Box>
        </Stack>
      </Flex>
    );
  }
  