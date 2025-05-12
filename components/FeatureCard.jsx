import React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-900/70 to-gray-900 rounded-2xl shadow-xl border border-purple-700/40 p-6 min-w-[180px] transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(168,85,247,0.3)]">
      <div className="mb-4 text-4xl drop-shadow-[0_0_8px_rgba(168,85,247,0.7)] text-purple-400">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-1 text-center">{title}</h3>
      <p className="text-sm text-gray-300 text-center">{description}</p>
    </div>
  );
} 