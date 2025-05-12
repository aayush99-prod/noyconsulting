'use client';
import React from "react";

export default function RobotBoat({ className = "", style = {} }) {
  return (
    <div
      className={`absolute z-20 w-[80px] md:w-[110px] animate-[float_4s_ease-in-out_infinite] ${className}`}
      style={{ pointerEvents: 'none', ...style }}
    >
      <svg
        viewBox="0 0 110 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Boat */}
        <ellipse cx="55" cy="80" rx="38" ry="10" fill="#222" opacity="0.7" />
        <rect x="25" y="65" width="60" height="18" rx="9" fill="#444" stroke="#222" strokeWidth="2" />
        <path d="M25 74 Q55 90 85 74" stroke="#333" strokeWidth="3" fill="none" />
        {/* Robot body */}
        <rect x="45" y="40" width="20" height="22" rx="8" fill="#e5e7eb" stroke="#8D00C4" strokeWidth="2" />
        {/* Robot head */}
        <rect x="40" y="22" width="30" height="22" rx="10" fill="#f3f4f6" stroke="#8D00C4" strokeWidth="2" />
        {/* Face screen */}
        <rect x="48" y="30" width="14" height="8" rx="4" fill="#111827" />
        {/* Eyes */}
        <circle cx="53" cy="34" r="1.5" fill="#60a5fa" />
        <circle cx="57" cy="34" r="1.5" fill="#a78bfa" />
        {/* Antenna */}
        <rect x="54" y="15" width="2" height="10" rx="1" fill="#8D00C4" />
        <circle cx="55" cy="14" r="2" fill="#00F0FF" />
        {/* Arm (waving) */}
        <rect x="68" y="45" width="12" height="3" rx="1.5" fill="#e5e7eb" stroke="#8D00C4" strokeWidth="1" transform="rotate(20 68 45)" />
        {/* Oar */}
        <rect x="20" y="70" width="30" height="3" rx="1.5" fill="#a78bfa" stroke="#8D00C4" strokeWidth="1" transform="rotate(-15 20 70)" />
        <ellipse cx="18" cy="71.5" rx="4" ry="2" fill="#00F0FF" />
      </svg>
    </div>
  );
}

// Add this to your global CSS if not present:
// @keyframes float { 0%{transform:translateY(0);} 50%{transform:translateY(-8px);} 100%{transform:translateY(0);} } 