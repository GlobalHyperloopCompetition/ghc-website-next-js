"use client";

import { useEffect, useRef, useState } from "react";

const FADE_DURATION = 0.3; // seconds

const VideoLoader = ({ onFinish }: { onFinish: () => void }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (!video.duration) return;

      const remaining = video.duration - video.currentTime;

      // Start fading in last 300ms
      if (remaining <= FADE_DURATION) {
        const progress = remaining / FADE_DURATION; // 1 → 0
        setOpacity(Math.max(progress, 0));
      }
    };

    const onEnded = () => {
      onFinish();
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "black",
        opacity,
        pointerEvents: "none",
        transition: "opacity 0.05s linear", // smooth stepping
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/Site_Loader.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoLoader;
