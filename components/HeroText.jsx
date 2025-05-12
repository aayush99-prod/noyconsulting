import React from "react";

export default function HeroText() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-10 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-[0_0_12px_rgba(168,85,247,0.3)] font-sans">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
          Faster. Smarter. Start in seconds.
        </span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl text-gray-300 font-medium">
        Experience lightning-fast setup with intelligent features designed to optimize your workflow instantly.
      </p>
    </section>
  );
} 