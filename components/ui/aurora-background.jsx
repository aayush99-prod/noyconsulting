'use client';
import React, { useEffect, useRef } from "react";

export function AuroraBackground({ children }) {
  // We'll animate the SVG paths using JS for more control
  const pathRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
    let frame;
    const animate = (time = 0) => {
      // Animate 3 ribbons with different phase/speed
      pathRefs.forEach((ref, i) => {
        const t = time / (4000 + i * 1200);
        // Create a wavy path using sine/cosine for control points
        const amplitude = 80 + i * 30;
        const freq = 1.2 + i * 0.2;
        const phase = i * Math.PI / 2;
        const y1 = 700 + Math.sin(t * freq + phase) * amplitude;
        const y2 = 800 + Math.cos(t * freq + phase) * amplitude * 0.7;
        const y3 = 900 + Math.sin(t * freq + phase + 1) * amplitude * 0.5;
        const d = `M0,${y1} Q640,${y2} 1280,${y3} T1920,${y2} V1080 H0 Z`;
        if (ref.current) ref.current.setAttribute("d", d);
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [pathRefs]);

  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* SVG Aurora Borealis Ribbons */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 w-full h-full"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="aurora1" x1="0" y1="700" x2="1920" y2="1080" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8D00C4" stopOpacity="0.7" />
            <stop offset="0.5" stopColor="#c084fc" stopOpacity="0.5" />
            <stop offset="1" stopColor="#8D00C4" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="aurora2" x1="0" y1="800" x2="1920" y2="1080" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a259f7" stopOpacity="0.6" />
            <stop offset="0.5" stopColor="#f0abfc" stopOpacity="0.4" />
            <stop offset="1" stopColor="#8D00C4" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="aurora3" x1="0" y1="900" x2="1920" y2="1080" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c084fc" stopOpacity="0.5" />
            <stop offset="0.5" stopColor="#8D00C4" stopOpacity="0.3" />
            <stop offset="1" stopColor="#a259f7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          ref={pathRefs[0]}
          d="M0,700 Q640,800 1280,900 T1920,800 V1080 H0 Z"
          fill="url(#aurora1)"
          style={{ filter: "blur(32px)" }}
        />
        <path
          ref={pathRefs[1]}
          d="M0,800 Q640,900 1280,1000 T1920,900 V1080 H0 Z"
          fill="url(#aurora2)"
          style={{ filter: "blur(40px)" }}
        />
        <path
          ref={pathRefs[2]}
          d="M0,900 Q640,1000 1280,1100 T1920,1000 V1080 H0 Z"
          fill="url(#aurora3)"
          style={{ filter: "blur(36px)" }}
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full min-h-screen">
        {children}
      </div>
    </div>
  );
} 