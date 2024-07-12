import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/utils/queryClient";
import Providers from "./Provider";
import SessionWraper from "@/Components/SessionWraper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Hyperloop Competition",
  description:
    "Welcome to the Global Hyperloop Competition - a cutting-edge challenge that brings together innovators, engineers, and visionaries from around the world to revolutionize transportation. Join us in pushing the boundaries of high-speed, sustainable travel. #HyperloopInnovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" />
      </head>
      <body className={inter.className}>
        <SessionWraper>
          <Providers>{children}</Providers>
        </SessionWraper>
      </body>
    </html>
  );
}
