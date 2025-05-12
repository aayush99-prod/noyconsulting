"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Settings, BarChart3, Building2, MapPin, UtensilsCrossed } from "lucide-react";

export default function CaseStudy() {
  return (
    <section className="w-full px-4 py-20 bg-[#101020]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-left font-semibold mb-2 text-4xl md:text-5xl bg-gradient-to-r from-[#7b2ff7] to-[#3b82f6] bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
          Case Study
        </h2>
        <p className="text-left text-lg text-gray-400 mb-12 w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
          How automation transformed a local restaurant's operations, efficiency, and customer engagement.
        </p>
        {/* Company Info Card with icons, 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#181828] rounded-2xl p-6 border border-[#232336] mb-10 shadow-[0_0_32px_0_rgba(123,47,247,0.10)]">
          {/* Company */}
          <div className="flex flex-col items-center justify-center">
            <Building2 size={28} className="text-gray-300 mb-1" />
            <span className="text-lg font-semibold text-white text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              Thai Cuisine Experts
            </span>
          </div>
          {/* Location */}
          <div className="flex flex-col items-center justify-center">
            <MapPin size={28} className="text-gray-300 mb-1" />
            <span className="text-base text-gray-300 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              Mississauga, Canada
            </span>
          </div>
          {/* Industry */}
          <div className="flex flex-col items-center justify-center">
            <UtensilsCrossed size={28} className="text-gray-300 mb-1" />
            <span className="text-base text-gray-300 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              Restaurant & Hospitality
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Key Pain Points */}
          <div className="flex flex-col bg-[#181828] rounded-2xl p-8 border border-[#232336] shadow-[0_0_48px_0_rgba(123,47,247,0.18)]" style={{ filter: 'brightness(0.92)' }}>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase size={28} className="text-gray-300 group-hover:text-white transition-colors duration-200" />
              <span className="text-lg font-semibold bg-gradient-to-r from-[#7b2ff7] to-[#3b82f6] bg-clip-text text-transparent" style={{ fontFamily: 'Inter, sans-serif' }}>Key Pain Points</span>
            </div>
            <ul className="text-base space-y-3 pl-1">
              <li className="font-bold text-white">Overwhelmed by Google Reviews</li>
              <li className="font-bold text-white">No Clear View of Menu Trends</li>
              <li className="font-bold text-white">Inconsistent Promotion Updates</li>
            </ul>
          </div>
          {/* Card 2: The Automation */}
          <div className="flex flex-col bg-[#181828] rounded-2xl p-8 border border-[#232336] shadow-[0_0_48px_0_rgba(123,47,247,0.18)]">
            <div className="flex items-center gap-2 mb-4">
              <Settings size={28} className="text-gray-300 group-hover:text-white transition-colors duration-200" />
              <span className="text-lg font-semibold bg-gradient-to-r from-[#7b2ff7] to-[#3b82f6] bg-clip-text text-transparent" style={{ fontFamily: 'Inter, sans-serif' }}>The Automation</span>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <div>
                <div className="font-semibold text-gray-100 mb-1">Automated Review Monitoring</div>
                <div className="text-gray-400 text-base">Personalized responses delivered automatically, saving hours per week.</div>
              </div>
              <div>
                <div className="font-semibold text-gray-100 mb-1">Menu Demand Tracking</div>
                <div className="text-gray-400 text-base">Daily sales trends in a simple dashboard for quick decision-making.</div>
              </div>
              <div>
                <div className="font-semibold text-gray-100 mb-1">Automated Promotions</div>
                <div className="text-gray-400 text-base">Targeted messages based on customer preferences via SMS and email.</div>
              </div>
            </div>
          </div>
          {/* Card 3: The Impact */}
          <div className="flex flex-col bg-[#181828] rounded-2xl p-8 border border-[#232336] shadow-[0_0_48px_0_rgba(123,47,247,0.18)]">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 size={28} className="text-gray-300 group-hover:text-white transition-colors duration-200" />
              <span className="text-lg font-semibold bg-gradient-to-r from-[#7b2ff7] to-[#3b82f6] bg-clip-text text-transparent" style={{ fontFamily: 'Inter, sans-serif' }}>The Impact</span>
            </div>
            <div className="flex flex-col gap-5 mt-2">
              <div className="rounded-xl border border-[#2d2d3a] bg-[#14141c] px-6 py-5 flex flex-col items-center mb-1 transition-shadow duration-200 hover:shadow-[0_0_0_2px_#7b2ff7]">
                <span className="text-3xl font-bold text-white mb-1">90%</span>
                <span className="text-gray-400 text-base">Less time spent on review responses</span>
              </div>
              <div className="rounded-xl border border-[#2d2d3a] bg-[#14141c] px-6 py-5 flex flex-col items-center mb-1 transition-shadow duration-200 hover:shadow-[0_0_0_2px_#7b2ff7]">
                <span className="text-3xl font-bold text-white mb-1">12%</span>
                <span className="text-gray-400 text-base">Increase in menu efficiency</span>
              </div>
              <div className="rounded-xl border border-[#2d2d3a] bg-[#14141c] px-6 py-5 flex flex-col items-center mb-1 transition-shadow duration-200 hover:shadow-[0_0_0_2px_#7b2ff7]">
                <span className="text-3xl font-bold text-white mb-1">3×</span>
                <span className="text-gray-400 text-base">Higher promotion engagement</span>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <div className="mt-14 flex justify-center">
          <a
            href="mailto:aayushmaan.k.sharma@gmail.com?subject=Automation%20Inquiry"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg shadow-none hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
            style={{ fontFamily: 'Inter, sans-serif' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Automating
          </a>
        </div>
      </div>
    </section>
  );
} 