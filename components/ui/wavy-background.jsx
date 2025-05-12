'use client';
import React, { useRef, useEffect, useState } from "react";
import RobotBoat from "./RobotBoat";

export function WavyBackground({ children, className = "" }) {
  const svgRef = useRef();
  const pathRefs = [useRef(), useRef()];
  const [boatPos, setBoatPos] = useState({ left: 0.5, bottom: 300 }); // left as 0-1
  const boatXRef = useRef(0.5); // normalized 0-1
  const boatYRef = useRef(300);

  useEffect(() => {
    let frame;
    const animate = (time = 0) => {
      // Animate two waves with different phase/speed
      const waveDefs = [
        { ref: pathRefs[0], color: '#8D00C4', baseY: 300, amp: 40, freq: 1.2, speed: 1 },
        { ref: pathRefs[1], color: '#00F0FF', baseY: 470, amp: 30, freq: 1.5, speed: 1.3 },
      ];
      // Animate boatX smoothly left-right
      const boatX = 0.5 + Math.sin(time / 2500) * 0.35; // normalized 0-1
      boatXRef.current = boatX;
      waveDefs.forEach((wave, i) => {
        const points = [];
        for (let x = 0; x <= 1440; x += 2) { // finer step for smoothness
          const t = time / (2000 * wave.speed) + i * 2;
          const y = wave.baseY + Math.sin((x / 300) * wave.freq + t) * wave.amp;
          points.push([x, y]);
        }
        let d = `M0,600 L`;
        d += points.map(([x, y]) => `${x},${y}`).join(" ");
        d += ` L1440,600 Z`;
        if (wave.ref.current) wave.ref.current.setAttribute("d", d);
        // For the boat, use the crest of the first wave at boatX
        if (i === 0) {
          const px = boatX * 1440;
          // Find the two closest points
          let idx = points.findIndex(([x]) => x >= px);
          if (idx === -1) idx = points.length - 1;
          const [x1, y1] = points[Math.max(0, idx - 1)];
          const [x2, y2] = points[idx];
          // Linear interpolation for smooth y
          const t = x2 === x1 ? 0 : (px - x1) / (x2 - x1);
          const y = y1 + (y2 - y1) * t;
          // Smoothly interpolate boat position
          boatYRef.current = boatYRef.current + (y - boatYRef.current) * 0.2;
          setBoatPos({
            left: boatX,
            bottom: 600 - boatYRef.current + 160 // much higher up on the screen
          });
        }
      });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [pathRefs]);

  return (
    <div className={`relative w-full min-h-[600px] overflow-hidden flex flex-col items-center justify-center ${className}`}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full -z-10"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRefs[0]}
          d=""
          fill="#8D00C4"
          fillOpacity="0.5"
        />
        <path
          ref={pathRefs[1]}
          d=""
          fill="#00F0FF"
          fillOpacity="0.4"
        />
      </svg>
      <RobotBoat style={{ left: `${boatPos.left * 100}%`, bottom: boatPos.bottom, position: 'absolute', transform: 'translateX(-50%)' }} />
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
} 