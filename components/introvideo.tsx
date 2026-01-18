'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

type IntroVideoProps = {
  onFinish: () => void;
};

export default function IntroVideo({ onFinish }: IntroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Disable scrolling while intro plays
    document.body.style.overflow = 'hidden';
    videoRef.current?.play();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={9999}
      bg="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <video
        ref={videoRef}
        src="/intro.mp4"     // 🔥 place video in /public/intro.mp4
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        playsInline
        autoPlay
        muted
        onEnded={onFinish}
      />
    </Box>
  );
}
