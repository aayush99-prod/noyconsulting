import React, { useState, useEffect, useRef } from "react";

const metrics = [
  { label: "Software speed", value: "+38%", positive: true },
  { label: "Workflow efficiency", value: "+25%", positive: true },
  { label: "Operational cost", value: "-11%", positive: false },
  { label: "Customer satisfaction", value: "+19%", positive: true },
  { label: "Support resolution time", value: "-8%", positive: false },
];

export default function PerformanceStatsCard() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const metricCount = metrics.length;

  // Auto-advance logic
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % metricCount);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, metricCount]);

  // Manual scroll/swipe support
  useEffect(() => {
    let startY = null;
    let isDragging = false;
    const onTouchStart = (e) => {
      isDragging = true;
      startY = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      if (!isDragging) return;
      const deltaY = e.touches[0].clientY - startY;
      if (Math.abs(deltaY) > 40) {
        if (deltaY > 0) {
          setCurrent((prev) => (prev - 1 + metricCount) % metricCount);
        } else {
          setCurrent((prev) => (prev + 1) % metricCount);
        }
        isDragging = false;
      }
    };
    const onTouchEnd = () => {
      isDragging = false;
    };
    const onWheel = (e) => {
      if (e.deltaY > 0) {
        setCurrent((prev) => (prev + 1) % metricCount);
      } else if (e.deltaY < 0) {
        setCurrent((prev) => (prev - 1 + metricCount) % metricCount);
      }
    };
    const container = document.getElementById("perf-stats-card");
    if (container) {
      container.addEventListener("touchstart", onTouchStart);
      container.addEventListener("touchmove", onTouchMove);
      container.addEventListener("touchend", onTouchEnd);
      container.addEventListener("wheel", onWheel);
    }
    return () => {
      if (container) {
        container.removeEventListener("touchstart", onTouchStart);
        container.removeEventListener("touchmove", onTouchMove);
        container.removeEventListener("touchend", onTouchEnd);
        container.removeEventListener("wheel", onWheel);
      }
    };
  }, [metricCount]);

  return (
    <div
      id="perf-stats-card"
      className="w-full max-w-sm mx-auto bg-[#101117] rounded-2xl shadow-[0_2px_32px_0_rgba(59,130,246,0.10)] border border-blue-900/40 p-6 font-sans backdrop-blur-md overflow-hidden select-none cursor-pointer relative min-h-[96px] h-[96px]"
    >
      <div className="relative w-full h-[64px] flex items-center justify-center">
        {metrics.map((stat, idx) => {
          // Card stacking/fade/slide effect
          const isActive = idx === current;
          const isPrev = idx === (current - 1 + metricCount) % metricCount;
          return (
            <div
              key={stat.label}
              className={`absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(.77,0,.18,1)]
                ${isActive ? "opacity-100 z-20 scale-100" : "opacity-0 z-10 scale-95"}
                ${isPrev ? "-translate-y-4" : "translate-y-0"}
              `}
              style={{ pointerEvents: isActive ? "auto" : "none" }}
            >
              <span className="text-[1.25rem] md:text-xl font-extrabold text-center w-full bg-gradient-to-r from-[#BC13FE] via-[#1F51FF] to-white bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(31,81,255,0.25)]">
                {stat.label}
              </span>
              <span
                className={`text-3xl md:text-4xl font-extrabold mt-1 text-center w-full
                  ${stat.positive
                    ? "bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent drop-shadow-[0_0_16px_#60a5fa]"
                    : "text-red-400 drop-shadow-[0_0_8px_#a855f7]"}
                `}
              >
                {stat.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
} 