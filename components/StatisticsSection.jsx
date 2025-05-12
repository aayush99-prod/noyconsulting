'use client';
import React from "react";

export default function StatisticsSection() {
  return (
    <section className="w-full px-4 py-20 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#050c16] to-[#0a0f1a] -z-10" />
      
      {/* Glowing orbs for visual interest */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px] -z-10" />
      
      {/* Overlapping gradients for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0f1a] to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-5xl md:text-7xl font-extrabold text-left mb-14 bg-gradient-to-r from-[#7b2ff7] to-[#3b82f6] bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(59,130,246,0.18)] flex items-center gap-4">
          Our statistics
          <a
            href="mailto:aayushmaan.k.sharma@gmail.com?subject=Automation%20Inquiry"
            className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Us
          </a>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="rounded-xl bg-gradient-to-br from-[#181c2f]/80 to-[#181a2b]/80 backdrop-blur-md border border-[#1a2333] shadow-inner shadow-blue-900/10 p-8 flex flex-col justify-between min-h-[200px] animate-pulse-glow">
            <div className="text-lg md:text-xl font-bold text-white mb-4 text-left">Tasks automated</div>
            <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#cce6ff] to-[#66b3ff] bg-clip-text text-transparent text-left">15+</div>
          </div>
          {/* Card 2 */}
          <div className="rounded-xl bg-gradient-to-br from-[#181c2f]/80 to-[#181a2b]/80 backdrop-blur-md border border-[#1a2333] shadow-inner shadow-blue-900/10 p-8 flex flex-col justify-between min-h-[200px] animate-pulse-glow">
            <div className="text-lg md:text-xl font-bold text-white mb-4 text-left">Satisfied customers</div>
            <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#cce6ff] to-[#66b3ff] bg-clip-text text-transparent text-left">100%</div>
          </div>
          {/* Card 3 */}
          <div className="rounded-xl bg-gradient-to-br from-[#181c2f]/80 to-[#181a2b]/80 backdrop-blur-md border border-[#1a2333] shadow-inner shadow-blue-900/10 p-8 flex flex-col justify-between min-h-[200px] animate-pulse-glow">
            <div className="text-lg md:text-xl font-bold text-white mb-4 text-left">Hours saved per day</div>
            <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#cce6ff] to-[#66b3ff] bg-clip-text text-transparent text-left">2h</div>
          </div>
          {/* Card 4 */}
          <div className="rounded-xl bg-gradient-to-br from-[#181c2f]/80 to-[#181a2b]/80 backdrop-blur-md border border-[#1a2333] shadow-inner shadow-blue-900/10 p-8 flex flex-col justify-between min-h-[200px] animate-pulse-glow">
            <div className="text-lg md:text-xl font-bold text-white mb-4 text-left">Cost saved per month</div>
            <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#cce6ff] to-[#66b3ff] bg-clip-text text-transparent text-left">$2000</div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 48px 12px #60a5fa99, 0 0 32px 8px #a855f766; }
          50% { box-shadow: 0 0 64px 16px #60a5fa, 0 0 32px 8px #a855f7; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2.5s infinite;
        }
      `}</style>
    </section>
  );
} 