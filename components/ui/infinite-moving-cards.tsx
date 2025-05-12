"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [current, setCurrent] = useState(0);
  const duration = speed === "fast" ? 2000 : speed === "slow" ? 6000 : 4000;
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [current, items.length, duration]);

  return (
    <div
      className={cn(
        "relative z-20 max-w-xs w-full h-[110px] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <div className="w-full h-full flex items-center justify-center relative">
        {items.map((item, idx) => (
          <div
            key={item.name + idx}
            className={
              "absolute left-0 top-0 w-full h-full flex items-center justify-center transition-all duration-700" +
              (idx === current
                ? " opacity-100 translate-x-0 z-20"
                : idx === (current - 1 + items.length) % items.length
                ? " opacity-0 -translate-x-full z-10"
                : " opacity-0 translate-x-full z-10")
            }
            style={{ pointerEvents: idx === current ? "auto" : "none" }}
          >
            <div className="w-auto min-w-[180px] max-w-xs mx-auto rounded-xl border border-slate-700 px-4 py-3 bg-gradient-to-br from-[#181c2f]/80 to-[#181a2b]/80 flex flex-col items-center justify-center">
              <span className="relative z-20 text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#7b2ff7] to-[#3b82f6] bg-clip-text text-transparent block text-center mb-1">
                {item.quote}
              </span>
              <span className="text-sm md:text-base font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent text-center">
                {item.name}
              </span>
              {item.title && (
                <span className="text-xs leading-[1.6] text-gray-400 font-normal text-center">
                  {item.title}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 