"use client";

import { useState } from "react";

export const AIGraph = () => {
  // Increase height for more space
  const width = 320;
  const height = 240;

  // Both lines start at the same left edge point, jagged
  const efficiency = [
    { x: 0, y: 120 },
    { x: 40, y: 80 },
    { x: 80, y: 100 },
    { x: 120, y: 60 }, // peak
    { x: 160, y: 90 },
    { x: 200, y: 40 },
    { x: 240, y: 70 },
    { x: width, y: 20 },
  ];
  const cost = [
    { x: 0, y: 120 },
    { x: 40, y: 140 },
    { x: 80, y: 110 },
    { x: 120, y: 150 }, // valley
    { x: 160, y: 130 },
    { x: 200, y: 155 },
    { x: 240, y: 135 },
    { x: width, y: 155 },
  ];

  // For hover effect
  const [hovered, setHovered] = useState(null);

  // Label positions (use a prominent peak/valley for each)
  const efficiencyLabel = efficiency[3];
  const costLabel = cost[3];

  // Area fill for each line
  const efficiencyArea = [
    ...efficiency,
    { x: width, y: height },
    { x: 0, y: height },
  ];
  const costArea = [
    ...cost,
    { x: width, y: height },
    { x: 0, y: height },
  ];

  return (
    <div className="relative w-full h-full p-6 rounded-2xl bg-gradient-to-br from-[#10131a] to-[#181a2b] border-2 border-blue-500/30 shadow-xl overflow-visible flex flex-col justify-between min-h-[380px] max-w-xl mx-auto" style={{ boxShadow: "0 0 0 2px #60a5fa33, 0 4px 32px 0 #60a5fa22" }}>
      {/* Title at the top */}
      <div className="relative z-20 text-lg md:text-2xl font-bold text-blue-100 mb-2 flex items-center gap-2">
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(96,165,250,0.25)]">AI Consulting</span>
      </div>
      {/* Blue vignette background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
          <radialGradient id="vignette" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#60a5fa22" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <rect width={width} height={height} fill="url(#vignette)" />
        </svg>
      </div>
      {/* Graph SVG */}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height={height}
        className="relative z-10 overflow-visible"
        style={{ minHeight: height }}
      >
        <defs>
          <linearGradient id="efficiencyLine" x1="0" y1="0" x2={width} y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="costLine" x1="0" y1="0" x2={width} y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a855f7" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="efficiencyArea" x1="0" y1="0" x2="0" y2={height} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60a5fa88" />
            <stop offset="100%" stopColor="#60a5fa00" />
          </linearGradient>
          <linearGradient id="costArea" x1="0" y1="0" x2="0" y2={height} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a855f788" />
            <stop offset="100%" stopColor="#a855f700" />
          </linearGradient>
          <radialGradient id="efficiencyGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="costGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Efficiency area fill */}
        <polygon
          fill="url(#efficiencyArea)"
          points={efficiencyArea.map(p => `${p.x},${p.y}`).join(' ')}
        />
        {/* Cost area fill */}
        <polygon
          fill="url(#costArea)"
          points={costArea.map(p => `${p.x},${p.y}`).join(' ')}
        />
        {/* Efficiency line */}
        <polyline
          fill="none"
          stroke="url(#efficiencyLine)"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={efficiency.map(p => `${p.x},${p.y}`).join(' ')}
        />
        {/* Cost line */}
        <polyline
          fill="none"
          stroke="url(#costLine)"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={cost.map(p => `${p.x},${p.y}`).join(' ')}
        />
        {/* Efficiency point (peak) */}
        <g
          onMouseEnter={() => setHovered('efficiency')}
          onMouseLeave={() => setHovered(null)}
          style={{ cursor: 'pointer' }}
        >
          <circle cx={efficiencyLabel.x} cy={efficiencyLabel.y} r="20" fill="url(#efficiencyGlow)" />
          <circle cx={efficiencyLabel.x} cy={efficiencyLabel.y} r={hovered === 'efficiency' ? 12 : 9} fill="#60a5fa" style={{ transition: 'r 0.2s' }} />
          <circle cx={efficiencyLabel.x} cy={efficiencyLabel.y} r="5" fill="#fff" />
        </g>
        {/* Cost point (valley) */}
        <g
          onMouseEnter={() => setHovered('cost')}
          onMouseLeave={() => setHovered(null)}
          style={{ cursor: 'pointer' }}
        >
          <circle cx={costLabel.x} cy={costLabel.y} r="20" fill="url(#costGlow)" />
          <circle cx={costLabel.x} cy={costLabel.y} r={hovered === 'cost' ? 12 : 9} fill="#a855f7" style={{ transition: 'r 0.2s' }} />
          <circle cx={costLabel.x} cy={costLabel.y} r="5" fill="#fff" />
        </g>
        {/* Efficiency label */}
        <foreignObject x={efficiencyLabel.x - 70} y={efficiencyLabel.y - 44} width="140" height="36">
          <div className="flex items-center justify-center">
            <div className="px-4 py-1 rounded-lg border border-blue-400/60 bg-[#10131add] backdrop-blur-md text-blue-100 text-sm md:text-base font-semibold shadow-[0_2px_16px_0_rgba(96,165,250,0.15)] flex gap-2 whitespace-nowrap" style={{ boxShadow: '0 0 8px #60a5fa55' }}>
              <span>Efficiency</span>
              <span className="text-blue-300 font-bold">+103%</span>
            </div>
          </div>
        </foreignObject>
        {/* Cost label */}
        <foreignObject x={costLabel.x - 60} y={costLabel.y + 10} width="120" height="36">
          <div className="flex items-center justify-center">
            <div className="px-4 py-1 rounded-lg border border-purple-400/60 bg-[#10131add] backdrop-blur-md text-purple-100 text-sm md:text-base font-semibold shadow-[0_2px_16px_0_rgba(168,85,247,0.15)] flex gap-2 whitespace-nowrap" style={{ boxShadow: '0 0 8px #a855f755' }}>
              <span>Cost</span>
              <span className="text-purple-300 font-bold">-67%</span>
            </div>
          </div>
        </foreignObject>
      </svg>
      {/* Description inside the card */}
      <div className="relative z-10 text-center text-gray-400 text-sm md:text-base max-w-xl mx-auto mt-2 px-2 pb-1">
        Unlock efficiency and reduce costs using tailored AI strategies and analytics.
      </div>
    </div>
  );
}; 