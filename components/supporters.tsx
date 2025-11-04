"use client";
import Image from "next/image";
import React from "react";

const supporterLogos = [
  "/Supporter_logos/Supporter_logo_1.png",
  "/Supporter_logos/Supporter_logo_2.png",
  "/Supporter_logos/Supporter_logo_3.png",
  "/Supporter_logos/Supporter_logo_4.webp",
  "/Supporter_logos/Supporter_logo_5.png",
  "/Supporter_logos/Supporter_logo_6.avif",
  "/Supporter_logos/Supporter_logo_7.png",
  "/Supporter_logos/Supporter_logo_8.webp",
  "/Supporter_logos/Supporter_logo_9.png",
  "/Supporter_logos/Supporter_logo_10.png",
];

export default function SupportersSection() {
  return (
    <section className="w-full py-20 bg-[#111827] flex flex-col items-center text-white">
      {/* Title */}
      <h2 className="text-5xl font-bold mb-16 text-center">
        Our Supporters
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-12 gap-y-12 w-full max-w-7xl px-8">
        {supporterLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center"
          >
            {/* White Circle Behind Logo */}
            <div className="bg-white rounded-full border border-gray-300 flex justify-center items-center w-40 h-40 shadow-md hover:shadow-xl transition-all duration-300">
              <Image
                src={logo}
                alt={`Supporter logo ${idx + 1}`}
                width={120}
                height={80}
                className="object-contain w-28 h-20 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
