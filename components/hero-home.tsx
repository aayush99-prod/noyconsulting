"use client";
import Image from "next/image";
import { TextHoverEffect } from "./TextHoverEffect";

export default function HeroHome() {
  return (
    <>
      <a
        href="mailto:aayushmaan.k.sharma@gmail.com?subject=Automation%20Inquiry"
        style={{ position: "absolute", top: 10, left: 10, zIndex: 9999, background: "red", color: "white", padding: "10px" }}
      >
        TEST CONTACT
      </a>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-900 to-purple-900 overflow-hidden">
        {/* Glassy background effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/80 via-blue-900/60 to-purple-900/80 blur-2xl pointer-events-none" />
        {/* Main content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-6 py-16 rounded-3xl shadow-2xl bg-black/70 border border-blue-800">
          {/* Logo */}
          <div className="mb-6 flex items-center justify-center">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-3xl text-white">🌑</span>
            </div>
          </div>
          {/* What's New badge */}
          <div className="mb-4 text-xs font-semibold text-blue-300 tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full inline-block" />
            What's New
          </div>
          {/* Headline with hover effect */}
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
            Unleash Your Full Potential<br />
            with <span className="inline-block w-[300px] h-[100px] align-middle"><TextHoverEffect text="Noy Consulting" /></span>
          </h1>
          {/* Subheadline */}
          <p className="text-center text-lg text-blue-100 mb-8">
            Transform Possibilities into Reality with Noy Consulting
          </p>
          {/* Contact Us Button */}
          <a
            href="mailto:aayushmaan.k.sharma@gmail.com?subject=Automation%20Inquiry"
            className="mb-10 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us <span className="ml-2">→</span>
          </a>
          {/* Social Icons and Close Icon */}
          <div className="flex items-center justify-center gap-6 mt-8 text-blue-300 text-2xl">
            <a href="#" aria-label="Twitter" className="hover:text-purple-400">🐦</a>
            <a href="#" aria-label="Instagram" className="hover:text-purple-400">📸</a>
            <a href="#" aria-label="Facebook" className="hover:text-purple-400">📘</a>
            <span className="mx-2 text-blue-700">|</span>
            <button aria-label="Close" className="hover:text-purple-400 text-2xl">✕</button>
          </div>
        </div>
      </section>
    </>
  );
}
