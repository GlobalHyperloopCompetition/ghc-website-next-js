'use client';

import { useRef } from 'react';

import VariableProximity from './VariableProximity';
import ShinyText from './ShinyText';
import RotatingText from '../components/RotatingText';
import TextType from './TextType';
import Countdown from '../components/Countdown';

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0b0f17] text-white overflow-hidden">

      {/* BACKDROP */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />

      {/* WATCH TRAILER */}
      <a
        href="https://www.youtube.com/watch?v=osvB0QDUzH0&t=1s"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20"
      >
        <button
          className="
            group
            relative
            flex items-center gap-2
            px-3 py-2 sm:px-5 sm:py-3
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            text-xs sm:text-base
            font-medium
            text-white
            shadow-[0_0_25px_rgba(180,120,255,0.5)]
            hover:shadow-[0_0_45px_rgba(180,120,255,0.9)]
            transition-all duration-300
            overflow-hidden
          "
        >

          <span
            className="
              absolute inset-0
              bg-gradient-to-r
              from-transparent
              via-purple-400/40
              to-transparent
              translate-x-[-120%]
              group-hover:translate-x-[120%]
              transition-transform duration-700
            "
          />

          <span className="relative z-10 text-sm sm:text-lg">▶</span>
          <span className="relative z-10">Watch Trailer</span>

        </button>
      </a>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* HERO TITLE */}
          <div
            ref={containerRef}
            className="pt-10 sm:pt-14 md:pt-20 text-center"
          >
            <h1
              className="
                font-extrabold
                leading-tight
                text-[10.5vw]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-[7.5rem]
                max-w-6xl
                mx-auto
                drop-shadow-[0_8px_40px_rgba(0,0,0,0.9)]
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
          <div className="mt-6 sm:mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-12 lg:gap-20 items-center">

            {/* LEFT */}
            <div className="flex flex-col gap-4 sm:gap-7 text-center md:text-left">

              {/* PURPLE SHINY TAGLINE */}
              <h2
                className="
                  relative
                  font-bold
                  text-base sm:text-lg lg:text-3xl
                  text-white
                  drop-shadow-[0_0_25px_rgba(180,120,255,0.7)]
                "
              >
                <span className="relative z-10">
                  It's an event, where innovation knows no bounds!
                </span>

                <span
                  className="
                    absolute inset-0
                    z-20
                    pointer-events-none
                    mix-blend-screen
                    opacity-80
                  "
                >
                  <ShinyText
                    text="It's an event, where innovation knows no bounds!"
                    speed={2}
                    color="#ffffff"
                    shineColor="#b37cff"
                    spread={200}
                  />
                </span>
              </h2>

              {/* ROTATING GLASS */}
              <div className="flex justify-center md:justify-start">
                <RotatingText
                  texts={[
                    'Unleash Your Creativity',
                    'Accelerate Breakthroughs',
                    'Be a Part of the Revolution',
                  ]}
                  mainClassName="
                    inline-flex
                    items-center
                    px-5 sm:px-6
                    py-2.5 sm:py-3
                    rounded-2xl
                    bg-white/12
                    backdrop-blur-xl
                    border border-white/25
                    text-white
                    text-sm sm:text-base lg:text-lg
                    shadow-[0_0_40px_rgba(0,0,0,1)]
                    whitespace-nowrap
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

            </div>

            {/* RIGHT GLASS CARD */}
            <div className="flex justify-center md:justify-end">

              <div
                className="
                  w-full max-w-sm
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/20
                  rounded-3xl
                  p-5 sm:p-7 lg:p-9
                  shadow-[0_0_60px_rgba(0,0,0,1)]
                "
              >
                <div className="flex flex-col gap-5">

                  {/* COUNTDOWN WITH SIDE PADDING */}
                  <div className="px-2 sm:px-0">
                    <Countdown targetDate="2026-01-22T00:00:00" />
                  </div>

                  <div className="space-y-2 text-center md:text-left">

                    <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                      <TextType 
                        text={['Jan 22–25, 2026']}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor
                        cursorCharacter="_"
                      />
                    </h2>

                    <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                      <TextType 
                        text={['IIT Madras, Chennai']}
                        typingSpeed={75}
                        pauseDuration={1500}
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
      </div>

    </section>
  );
}
