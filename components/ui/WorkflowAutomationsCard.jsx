"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const logos = [
  { src: "/clients/gmail.svg", alt: "Gmail" },
  { src: "/clients/outlook.svg", alt: "Outlook" },
  { src: "/clients/slack.svg", alt: "Slack" },
  { src: "/clients/openai.svg", alt: "OpenAI" },
  { src: "/clients/instagram.svg", alt: "Instagram" },
  { src: "/clients/discord.svg", alt: "Discord" },
];

export default function WorkflowAutomationsCard() {
  const controlsTop = useAnimation();
  const controlsBottom = useAnimation();

  useEffect(() => {
    controlsTop.start({ x: [0, -100, 0] });
    controlsBottom.start({ x: [0, 100, 0] });
  }, [controlsTop, controlsBottom]);

  return (
    <div className="relative bg-gradient-to-br from-[#181c2f] to-[#181a2b] rounded-2xl shadow-2xl p-8 flex flex-col justify-center w-full max-w-md mx-auto border border-blue-700/40 overflow-hidden min-h-[440px]">
      {/* Top Background Carousel (just above the circle) */}
      <motion.div
        className="absolute left-0 right-0 flex items-center justify-center z-0 pointer-events-none select-none"
        style={{ top: 'calc(50% - 140px)', height: '40px', filter: 'blur(1.2px)', opacity: 0.38 }}
        animate={controlsTop}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex gap-10 w-max px-8">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={"top-" + i}
              className="flex flex-col items-center justify-center min-w-[48px]"
            >
              <img src={logo.src} alt={logo.alt} className="w-8 h-8 object-contain rounded-full bg-[#181a2b] border border-blue-500/30 shadow" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main Glowing Circle (centered and static) */}
      <div className="relative z-10 flex flex-col items-center justify-center" style={{ margin: '56px 0 56px 0' }}>
        <div className="w-44 h-44 rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1e2746] to-[#181a2b] border-2 border-blue-500/40 shadow-[0_0_48px_12px_rgba(59,130,246,0.25)] animate-pulse-glow">
          <span className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text drop-shadow-[0_0_16px_#60a5fa] text-center">
            100+
          </span>
          <span className="text-lg font-extrabold text-blue-200 mt-2 tracking-wide opacity-90 text-center">
            Automations
          </span>
        </div>
      </div>

      {/* Bottom Background Carousel (just below the circle, above the description) */}
      <motion.div
        className="absolute left-0 right-0 flex items-center justify-center z-0 pointer-events-none select-none"
        style={{ top: 'calc(50% + 30px)', height: '40px', filter: 'blur(1.2px)', opacity: 0.38 }}
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex gap-10 w-max px-8">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={"bottom-" + i}
              className="flex flex-col items-center justify-center min-w-[48px]"
            >
              <img src={logo.src} alt={logo.alt} className="w-8 h-8 object-contain rounded-full bg-[#181a2b] border border-blue-500/30 shadow" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Description */}
      <div className="relative z-10 text-center text-gray-100 text-base max-w-xs mb-2 mt-4 font-bold">
        We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors.
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
    </div>
  );
} 