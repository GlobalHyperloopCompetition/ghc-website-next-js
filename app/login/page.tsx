"use client";
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
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SimpleCard() {
  const mutation = useMutation(login);
  const navigate = useRouter();
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      setError("Failed to sign in with Oauth provider Google");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={3} px={6}>
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
              } else {
                setError(response.message);
              }
            }}
          >
            {({ isSubmitting, handleChange, values }) => (
              <Form>
                <Stack spacing={4}>
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button
                      fontFamily={"heading"}
                      w={"full"}
                      bgGradient="linear(to-r, red.400, cyan.400)"
                      color={"white"}
                      _hover={{
                        bgGradient: "linear(to-r, red.400,cyan.500)",
                        boxShadow: "xl",
                      }}
                      onClick={handleGoogleLogin}
                      isLoading={isLoading}
                    >
                      <Image
                        src="data:image/webp;base64,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"
                        alt=""
                        width="30"
                        height={"30"}
                        style={{ marginRight: "10px" }}
                      />
                      Sign in with Google
                    </Button>
                  </motion.div>

                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      focusBorderColor="red.400"
                      type="email"
                      onChange={handleChange}
                      value={values.email}
                      isDisabled
                    />
                  </FormControl>
                  {/* <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      focusBorderColor="red.400"
                      type="password"
                      onChange={handleChange}
                      value={values.password}
                      isDisabled
                    />
                  </FormControl> */}
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox defaultChecked={true} colorScheme="red">
                        Remember me
                      </Checkbox>
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
                      isDisabled
                    >
                      {/* Sign in */}
                      Coming soon!
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
