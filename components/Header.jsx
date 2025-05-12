import React from "react";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-gradient-to-r from-black via-purple-900 to-gray-900 rounded-2xl shadow-lg border-b-2 border-purple-700/60 font-sans">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="text-2xl font-extrabold text-white tracking-widest drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">CAWAR</div>
        <nav className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
          <div className="flex gap-6 text-lg font-medium text-gray-200">
            <a href="#" className="hover:text-purple-400 transition">Dashboard</a>
            <a href="#" className="hover:text-purple-400 transition">Overview</a>
            <a href="#" className="hover:text-purple-400 transition">Revenue</a>
            <a href="#" className="hover:text-purple-400 transition">Settings</a>
          </div>
          <div className="flex gap-4 text-xs text-gray-400 md:ml-8">
            <a href="#" className="hover:text-purple-300 transition">Profile</a>
            <a href="#" className="hover:text-purple-300 transition">Sign In</a>
            <a href="#" className="hover:text-purple-300 transition">Join Community</a>
          </div>
        </nav>
      </div>
    </header>
  );
} 