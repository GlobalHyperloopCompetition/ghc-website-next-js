'use client';

import { useRef } from 'react';
import VariableProximity from './VariableProximity';

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative min-h-screen bg-[#0b0f17] text-white flex items-center">
      
      {/* OUTER PADDING (MOBILE SAFE) */}
      <div className="w-full px-4 sm:px-6">
        
        {/* CENTERED CONTAINER */}
        <div className="mx-auto max-w-7xl">
          
          {/* ================= HERO CONTENT ================= */}
          <div
            ref={containerRef}
            className="overflow-hidden text-center"
          >
            <h1
              className="
                font-extrabold
                leading-[0.95]
                text-[9vw]
                sm:text-6xl
                md:text-7xl
                lg:text-6xl
                whitespace-normal
                sm:whitespace-nowrap
              "
            >
              <VariableProximity
                label="Global Hyperloop Competition"
                className="variable-proximity-demo"
                fromFontVariationSettings="'wght' 400, 'opsz' 12"
                toFontVariationSettings="'wght' 1000, 'opsz' 48"
                containerRef={containerRef}
                radius={140}
                falloff="linear"
              />
            </h1>
          </div>

        </div>
      </div>
    </section>
  );
}
