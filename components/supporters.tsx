"use client";

import React from "react";
import Image from "next/image";
import LogoLoop from "./LogoLoop";

const logos = [
  { src: "/Supporter_Logo_1.png", alt: "Supporter 1" },
  { src: "/Supporter_Logo_2.png", alt: "Supporter 2" },
  { src: "/Supporter_Logo_3.png", alt: "Supporter 3" },
  { src: "/Supporter_Logo_4.webp", alt: "Supporter 4" },
  { src: "/Supporter_Logo_5.png", alt: "Supporter 5" },
  { src: "/Supporter_Logo_6.avif", alt: "Supporter 6" },
  { src: "/Supporter_Logo_7.png", alt: "Supporter 7" },
  { src: "/Supporter_Logo_8.webp", alt: "Supporter 8" },
  { src: "/Supporter_Logo_9.png", alt: "Supporter 9" },
  { src: "/Supporter_Logo_10.png", alt: "Supporter 10" },
];

const mid = Math.ceil(logos.length / 2);
const row1 = logos.slice(0, mid);
const row2 = logos.slice(mid);

function LogoNode({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="
        flex items-center justify-center
        w-36 h-36
        sm:w-44 sm:h-44
        md:w-48 md:h-48
        rounded-full
        bg-white
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      "
    >
      <Image
        src={src}
        alt={alt}
        width={160}
        height={100}
        className="object-contain w-24 sm:w-28 md:w-32"
      />
    </div>
  );
}

export default function SupportersSection() {
  return (
    <section className="relative w-full py-20 bg-[#0b0f17] overflow-hidden">

      <h2 className="text-center text-4xl sm:text-5xl font-bold mb-16 text-white">
        Our Supporters
      </h2>

      {/* ROW 1 */}
      <div className="relative w-full h-[200px] sm:h-[220px] mb-10">
        <LogoLoop
          logos={row1.map((logo) => ({
            node: <LogoNode {...logo} />,
            title: logo.alt,
          }))}
          speed={90}
          direction="left"
          logoHeight={180}
          gap={55}
          fadeOut
          fadeOutColor="#0b0f17"
        />
      </div>

      {/* ROW 2 */}
      <div className="relative w-full h-[200px] sm:h-[220px]">
        <LogoLoop
          logos={row2.map((logo) => ({
            node: <LogoNode {...logo} />,
            title: logo.alt,
          }))}
          speed={90}
          direction="right"
          logoHeight={180}
          gap={55}
          fadeOut
          fadeOutColor="#0b0f17"
        />
      </div>

    </section>
  );
}
