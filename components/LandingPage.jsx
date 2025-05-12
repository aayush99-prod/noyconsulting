"use client";
import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { FlipWords } from "./ui/flip-words";
import WhatWeDo from "./WhatWeDo";
import TheProcess from "./TheProcess";
import StatisticsSection from "./StatisticsSection";
import CaseStudy from "./CaseStudy";
import ContactForm from "./ContactForm";
import OurClientsCarousel from "./OurClientsCarousel";

export default function LandingPage() {
  return (
    <>
      <BackgroundGradientAnimation>
        <div className="flex flex-col items-center justify-center w-full px-4 py-24">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#E5E5E5] text-center mb-6 font-sans">
            Noy Consulting
          </h1>
          <div className="text-lg md:text-2xl text-[#A0A0A0] text-center mb-10 max-w-2xl flex flex-wrap items-center justify-center">
            <span>Automate the&nbsp;</span>
            <FlipWords words={["mundane", "boring", "tedious", "repetitive", "routine", "dull"]} className="text-[#A0A0A0]" />
            <span>, focus on your clients</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="mailto:aayushmaan.k.sharma@gmail.com?subject=Automation%20Inquiry"
              className="px-8 py-3 rounded-full border border-purple-300 text-purple-300 font-semibold text-lg bg-transparent hover:bg-gradient-to-r hover:from-purple-400/20 hover:to-purple-600/20 hover:text-white hover:border-white transition-all duration-200 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact us <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </BackgroundGradientAnimation>
      <WhatWeDo />
      <TheProcess />
      <StatisticsSection />
      <CaseStudy />
      <ContactForm />
      <OurClientsCarousel />
    </>
  );
} 