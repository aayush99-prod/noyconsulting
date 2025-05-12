import React from "react";

const logos = [
  "LOGO1", "LOGO2", "LOGO3", "LOGO4", "LOGO5", "LOGO6"
];

export default function LogoStrip() {
  return (
    <div className="w-full flex justify-center items-center gap-8 py-6">
      {logos.map((logo, idx) => (
        <div
          key={logo}
          className="transition-transform duration-200 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.7)] cursor-pointer text-2xl font-bold text-gray-300"
        >
          {/* Replace with SVG or image if available */}
          {logo}
        </div>
      ))}
    </div>
  );
} 