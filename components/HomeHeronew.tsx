'use client';

import { useRef } from 'react';

import VariableProximity from './VariableProximity';
import ShinyText from './ShinyText';
import RotatingText from '../components/RotatingText';
import TextType from './TextType';

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative min-h-[100svh] flex items-center bg-[#0b0f17] text-white overflow-hidden">

      {/* BACKGROUND GLOW LAYERS */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-600/20 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-indigo-500/20 rounded-full blur-[170px] animate-pulse" />
      
      {/* DARK GRADIENT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />

      {/* WATCH TRAILER */}
      <a
        href="https://www.youtube.com/watch?v=osvB0QDUzH0&t=1s"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed sm:absolute top-20 right-3 sm:right-6 z-30"
      >
        <button
          className="
            group relative flex items-center gap-2
            px-3 py-2 sm:px-5 sm:py-3
            rounded-full
            bg-white/10 backdrop-blur-xl
            border border-white/20
            text-xs sm:text-base font-medium
            shadow-[0_0_25px_rgba(180,120,255,0.5)]
            hover:shadow-[0_0_55px_rgba(180,120,255,0.9)]
            hover:scale-105
            transition-all duration-300
            overflow-hidden
          "
        >
          <span
            className="
              absolute inset-0 bg-gradient-to-r
              from-transparent via-purple-400/40 to-transparent
              translate-x-[-120%]
              group-hover:translate-x-[120%]
              transition-transform duration-700
            "
          />

          <span className="relative z-10">▶</span>
          <span className="relative z-10">Watch Highlights</span>
        </button>
      </a>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* HERO TITLE */}
          <div
            ref={containerRef}
            className="pt-24 sm:pt-28 md:pt-32 text-center"
          >
            <h1
              className="
                font-extrabold leading-[0.95]
                text-[clamp(2.3rem,6vw,6rem)]
                sm:text-[clamp(3rem,6vw,6.5rem)]
                max-w-6xl mx-auto
                drop-shadow-[0_8px_40px_rgba(0,0,0,0.9)]
                transition-transform duration-500
                hover:scale-[1.01]
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

          {/* GRID */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-6 text-center md:text-left">

              {/* TAGLINE */}
              <h2 className="relative font-bold text-base sm:text-lg lg:text-3xl drop-shadow-[0_0_30px_rgba(180,120,255,0.7)]">
                <span className="relative z-10">
                  It's an event, where innovation knows no bounds!
                </span>
              </h2>

              {/* ROTATING TEXT */}
              <div className="flex justify-center md:justify-start">
                <RotatingText
                  texts={[
                    'Be a Part of the Revolution.',
                    'Unleash Your Imagination.',
                    'Accelerate Breakthroughs.',
                  ]}
                  mainClassName="
                    inline-flex items-center
                    px-5 py-2.5
                    rounded-2xl
                    bg-white/12 backdrop-blur-xl
                    border border-white/25
                    text-sm sm:text-base lg:text-lg
                    shadow-[0_0_40px_rgba(0,0,0,1)]
                    whitespace-nowrap
                    hover:shadow-[0_0_70px_rgba(180,120,255,0.4)]
                    hover:scale-[1.02]
                    transition-all duration-300
                  "
                  staggerFrom="last"
                  initial={{ y: '120%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-120%', opacity: 0 }}
                  staggerDuration={0.035}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: 'spring', damping: 26, stiffness: 360 }}
                  rotationInterval={2600}
                  splitBy="words"
                />
              </div>

              {/* ✅ GALLERY BUTTON */}
              <div className="flex justify-center md:justify-start mt-4">
                <a href="/gallery/ghc-2026">
                  <button
                    className="
                      group relative
                      px-6 py-3
                      rounded-xl
                      bg-gradient-to-r from-purple-600 to-indigo-600
                      text-white font-semibold
                      shadow-[0_0_35px_rgba(120,80,255,0.6)]
                      hover:shadow-[0_0_70px_rgba(120,80,255,0.9)]
                      hover:scale-105
                      transition-all duration-300
                      overflow-hidden
                    "
                  >
                    <span
                      className="
                        absolute inset-0 bg-gradient-to-r
                        from-transparent via-white/30 to-transparent
                        translate-x-[-120%]
                        group-hover:translate-x-[120%]
                        transition-transform duration-700
                      "
                    />
                    <span className="relative z-10">
                      View GHC 2.0 Gallery
                    </span>
                  </button>
                </a>
              </div>

            </div>

            {/* RIGHT INFO CARD */}
            <div className="flex justify-center md:justify-end">

              <div
                className="
                  w-full max-w-sm
                  p-6 rounded-5xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  shadow-[0_0_40px_rgba(180,120,255,0.25)]
                  hover:shadow-[0_0_80px_rgba(180,120,255,0.55)]
                  hover:scale-[1.03]
                  transition-all duration-400
                  space-y-4
                "
              >

                {/* STATUS BADGE */}
                <div className="flex justify-center md:justify-start">
                  <span
                    className="
                      flex items-center gap-2
                      px-4 py-1.5
                      rounded-full
                      bg-purple-500/20
                      border border-purple-400/40
                      text-purple-300 font-semibold text-sm
                      shadow-[0_0_30px_rgba(180,120,255,0.5)]
                    "
                  >
                    GHC 3.0 Coming Soon
                  </span>
                </div>

                {/* EVENT DETAILS */}
                <div className="space-y-2 text-center md:text-left">

                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                    <TextType
                      text={['January 2027, 1st Week']}
                      typingSpeed={65}
                      pauseDuration={1200}
                      showCursor
                      cursorCharacter="_"
                    />
                  </h2>

                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                    <TextType
                      text={['IIT Madras, Chennai']}
                      typingSpeed={65}
                      pauseDuration={1200}
                      showCursor
                      cursorCharacter="_"
                    />
                  </h2>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
