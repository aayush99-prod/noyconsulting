"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import PerformanceStatsCard from "./PerformanceStatsCard";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const logos = [
  { src: "/clients/gmail.svg", alt: "Gmail" },
  { src: "/clients/outlook.svg", alt: "Outlook" },
  { src: "/clients/slack.svg", alt: "Slack" },
  { src: "/clients/openai.svg", alt: "OpenAI" },
  { src: "/clients/instagram.svg", alt: "Instagram" },
  { src: "/clients/discord.svg", alt: "Discord" },
];

export default function TheProcess() {
  // Fade-in animation on scroll
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.classList.add("opacity-0");
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add("animate-fadein");
        section.classList.remove("opacity-0");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="the-process" ref={sectionRef} className="w-full py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-left font-extrabold mb-10 bg-gradient-to-r from-[#BC13FE] via-[#1F51FF] to-white bg-clip-text text-transparent drop-shadow-[0_2px_32px_rgba(188,19,254,0.25)] flex items-center gap-4" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
          The process
          <a
            href="mailto:aayushmaan.k.sharma@gmail.com?subject=Automation%20Inquiry"
            className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inquire Now
          </a>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 items-stretch justify-center">
          {/* Card 1 */}
          <div className="flex-1 bg-gradient-to-br from-[#181c2f] to-[#181a2b] rounded-3xl p-8 shadow-xl backdrop-blur-md border border-[#BC13FE]/40 relative flex flex-col items-center group transition-all duration-300 hover:shadow-[0_0_32px_8px_rgba(188,19,254,0.25)]">
            <div className="text-xs uppercase tracking-widest text-[#BC13FE] font-semibold mb-2">01 Discover & Assess</div>
            <div className="text-xl font-semibold text-white mb-4 text-center">We begin by examining your existing systems and workflows to uncover areas where AI can streamline operations and boost performance.</div>
            {/* Data logos flowing into robot */}
            <div className="relative flex flex-col items-center justify-center w-full mt-4 mb-2" style={{ minHeight: 180 }}>
              <div className="flex gap-2 mb-2 animate-float-logos">
                {logos.map((logo, i) => (
                  <div key={logo.alt} className="w-8 h-8 flex items-center justify-center bg-[#181a2b] rounded-full border border-[#BC13FE]/30 shadow-md">
                    <Image src={logo.src} alt={logo.alt} width={24} height={24} />
                  </div>
                ))}
              </div>
              {/* Animated lines to robot */}
              <svg width="120" height="40" className="absolute left-1/2 -translate-x-1/2 top-10 z-0 pointer-events-none">
                <polyline points="10,0 60,30 110,0" fill="none" stroke="#BC13FE" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
              </svg>
              {/* Robot SVG with neon outline */}
              <div className="mt-8">
                <svg width="90" height="160" viewBox="0 0 90 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_16px_#BC13FE]">
                  <rect x="20" y="20" width="50" height="50" rx="8" stroke="#BC13FE" strokeWidth="3" fill="#0a0a0a" />
                  <rect x="10" y="70" width="70" height="50" rx="8" stroke="#BC13FE" strokeWidth="3" fill="#0a0a0a" />
                  <rect x="30" y="130" width="10" height="20" rx="3" stroke="#BC13FE" strokeWidth="3" fill="#0a0a0a" />
                  <rect x="50" y="130" width="10" height="20" rx="3" stroke="#BC13FE" strokeWidth="3" fill="#0a0a0a" />
                  <rect x="35" y="35" width="8" height="8" fill="#BC13FE" />
                  <rect x="47" y="35" width="8" height="8" fill="#BC13FE" />
                  <rect x="40" y="50" width="10" height="5" fill="#BC13FE" />
                  <rect x="35" y="85" width="20" height="20" fill="#BC13FE" rx="4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-gradient-to-br from-[#181c2f] to-[#181a2b] rounded-3xl p-8 shadow-xl backdrop-blur-md border border-[#1F51FF]/40 flex flex-col group transition-all duration-300 hover:shadow-[0_0_32px_8px_rgba(31,81,255,0.25)]">
            <div className="w-full flex justify-center">
              <div className="text-xs uppercase tracking-widest text-[#1F51FF] font-semibold mb-2 text-center">02 Design & Deploy</div>
            </div>
            <div className="flex flex-col items-center justify-center h-full w-full text-center p-2 animate-fadein">
              <div className="text-lg font-bold text-blue-100 mb-6 max-w-xl leading-snug drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                Next, our engineering team develops tailored AI solutions, focusing on seamless integration, high standards, and dependable results.
              </div>
              <div className="flex items-center justify-center w-full mb-4">
                <span className="text-7xl drop-shadow-[0_0_32px_#60a5fa] animate-bounce-slow" style={{ filter: 'drop-shadow(0 0 32px #a855f7) drop-shadow(0 0 48px #1F51FF)' }}>🍽️</span>
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
                Restaurant Automation
              </div>
              <div className="flex items-center justify-center gap-4 mb-6 w-full">
                <div className="flex flex-col items-center w-1/3">
                  <div className="px-4 py-2 rounded-xl font-bold text-white text-base border-2 border-blue-400 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-800 shadow-lg transition-all duration-300 hover:scale-105 animate-glow-border">Input</div>
                  <div className="mt-3 text-xs text-blue-100 text-center w-full">Customer orders & reviews</div>
                </div>
                <span className="text-blue-400 text-2xl font-bold animate-pulse">→</span>
                <div className="flex flex-col items-center w-1/3">
                  <div className="px-4 py-2 rounded-xl font-bold text-white text-base border-2 border-blue-400 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-800 shadow-lg transition-all duration-300 hover:scale-105 animate-glow-border">Model</div>
                  <div className="mt-3 text-xs text-blue-100 text-center w-full">Detects popular dishes & sentiments</div>
                </div>
                <span className="text-blue-400 text-2xl font-bold animate-pulse">→</span>
                <div className="flex flex-col items-center w-1/3">
                  <div className="px-4 py-2 rounded-xl font-bold text-white text-base border-2 border-blue-400 bg-gradient-to-r from-blue-900 via-blue-700 to-purple-800 shadow-lg transition-all duration-300 hover:scale-105 animate-glow-border">Logic</div>
                  <div className="mt-3 text-xs text-blue-100 text-center w-full">Recommends menu tweaks or offers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-gradient-to-br from-[#181c2f] to-[#181a2b] rounded-3xl p-8 shadow-xl backdrop-blur-md border border-[#BC13FE]/40 relative flex flex-col items-center group transition-all duration-300 hover:shadow-[0_0_32px_8px_rgba(188,19,254,0.25)]">
            <div className="text-xs uppercase tracking-widest text-[#BC13FE] font-semibold mb-2">03 Optimize & Evolve</div>
            <div className="text-xl font-semibold text-white mb-4 text-center">Post-launch, we continue refining the solution—enhancing features, improving efficiency, and supporting your team every step of the way.</div>
            <div className="w-full flex items-center justify-center mb-4">
              <InfiniteMovingCards
                items={[
                  { quote: "+38%", name: "Software speed", title: "" },
                  { quote: "+25%", name: "Workflow efficiency", title: "" },
                  { quote: "-11%", name: "Operational cost", title: "" },
                  { quote: "+19%", name: "Customer satisfaction", title: "" },
                  { quote: "-8%", name: "Support resolution time", title: "" },
                ]}
                direction="left"
                speed="normal"
                pauseOnHover={true}
                className="max-w-xl mt-12 mb-2 scale-125"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fadein { animation: fadein 1.2s cubic-bezier(.4,0,.2,1) forwards; }
        @keyframes fadein { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
        .animate-float-logos { animation: floatlogos 2.5s ease-in-out infinite alternate; }
        @keyframes floatlogos { 0% { transform: translateY(0); } 100% { transform: translateY(10px); } }
        .animate-dash { stroke-dasharray: 8 4; stroke-dashoffset: 0; animation: dashmove 2s linear infinite; }
        @keyframes dashmove { to { stroke-dashoffset: -24; } }
        .animate-glow-border {
          box-shadow: 0 0 16px 2px #60a5fa44, 0 0 32px 8px #a855f744;
          transition: box-shadow 0.3s;
        }
        .animate-glow-border:hover {
          box-shadow: 0 0 32px 8px #60a5fa99, 0 0 48px 16px #a855f799;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </section>
  );
} 