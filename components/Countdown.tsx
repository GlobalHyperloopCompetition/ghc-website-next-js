'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const diff = +target - +new Date();

  return {
    days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
    hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
    minutes: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
    seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
  };
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [time, setTime] = useState<TimeLeft>(
    getTimeLeft(new Date(targetDate))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft(new Date(targetDate)));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center">
      <div
        className="
          backdrop-blur-xl
          bg-white/5
          border border-white/15
          rounded-2xl
          px-6 py-5
          shadow-[0_0_40px_rgba(255,255,255,0.12)]
        "
      >
        <div className="flex items-center gap-4 sm:gap-6">
          <TimeBlock label="Days" value={time.days} />
          <Separator />
          <TimeBlock label="Hours" value={time.hours} />
          <Separator />
          <TimeBlock label="Minutes" value={time.minutes} />
          <Separator />
          <TimeBlock label="Seconds" value={time.seconds} />
        </div>
      </div>
    </div>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[64px]">
      
      {/* NUMBER */}
      <div className="h-[42px] flex items-center justify-center">
        <motion.span
          key={value}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="
            text-3xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>

      {/* LABEL */}
      <span
        className="
          mt-1
          text-[11px]
          uppercase
          tracking-widest
          text-white/60
        "
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex flex-col justify-center h-[42px]">
      <span className="text-white/40 text-xl leading-none">:</span>
    </div>
  );
}
