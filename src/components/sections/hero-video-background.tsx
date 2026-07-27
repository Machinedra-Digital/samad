"use client";

import React, { useRef, useEffect, useState } from "react";

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Only load video on desktop viewports after initial page load to maximize mobile FCP & LCP
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const loadVideo = () => {
        setShouldLoadVideo(true);
      };
      if ("requestIdleCallback" in window) {
        (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(loadVideo);
      } else {
        setTimeout(loadVideo, 1500);
      }
    }
  }, []);

  useEffect(() => {
    if (shouldLoadVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, [shouldLoadVideo]);

  if (!shouldLoadVideo || videoError) {
    return null;
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      onError={() => setVideoError(true)}
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-70 transform scale-105 transition-opacity duration-1000"
    >
      <source src="/hero_video.mp4" type="video/mp4" />
    </video>
  );
}
