"use client";

import React, { useRef, useEffect, useState } from "react";

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Attempt playback once mounted across all screen sizes
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setVideoLoaded(true);
          })
          .catch(() => {
            // Autoplay was prevented (e.g. low power mode or data saver)
            // Keep background gradient fallback active
          });
      }
    }
  }, []);

  if (videoError) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onLoadedData={() => setVideoLoaded(true)}
      onCanPlay={() => setVideoLoaded(true)}
      onError={() => setVideoError(true)}
      className={`absolute inset-0 w-full h-full object-cover z-0 transform scale-105 transition-opacity duration-1000 ${
        videoLoaded ? "opacity-70" : "opacity-0"
      }`}
    >
      <source src="/hero_video.mp4" type="video/mp4" />
    </video>
  );
}
