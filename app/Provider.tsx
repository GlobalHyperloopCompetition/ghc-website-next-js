// app/Provider.tsx
"use client";

import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/utils/queryClient";
import customTheme from "@/utils/theme"; // Ensure this path is correct

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        {children}
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default Providers;
