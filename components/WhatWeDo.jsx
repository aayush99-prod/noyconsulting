'use client';
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { AutomationCircle } from "./ui/automation-circle";
import { AIGraph } from "./ui/ai-graph";
import WorkflowAutomationsCard from "./ui/WorkflowAutomationsCard";

const items = [
  {
    title: "Review Response Automation",
    description: "Automatically generate personalized responses to customer reviews using AI. The system analyzes sentiment, identifies key points, and crafts appropriate replies that maintain your brand voice.",
    link: "#",
    chat: (
      <div className="mt-6 space-y-4">
        <div className="flex flex-col items-start">
          <div className="font-semibold text-sm text-purple-300 mb-1">Customer <span className='ml-1'>⭐⭐⭐⭐⭐</span></div>
          <div className="bg-gradient-to-br from-blue-700/80 to-purple-700/80 rounded-xl px-4 py-3 text-gray-100 text-base max-w-xs shadow-md">
            Amazing experience! Jessica was so helpful and the food was incredible. Will definitely be back!
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="font-semibold text-sm text-purple-300 mb-1">Your Company</div>
          <div className="bg-gradient-to-br from-blue-700/80 to-purple-700/80 rounded-xl px-4 py-3 text-gray-100 text-base max-w-xs shadow-md">
            Thank you so much for your kind words! We're thrilled you had a great experience, and we'll be sure to let Jessica know about your shout-out. It was a pleasure having you — we appreciate you showing up and hope to see you again soon!
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Social Media Engagement",
    description: "Schedule and generate posts using AI based on restaurant events, menu items, reviews, or photos. Trend-watching bot: analyze local trending hashtags and topics for content ideas.",
    link: "#",
  },
  {
    title: "Customer Feedback Insight",
    description: "Pull data from Google/Yelp reviews, surveys, and DMs, then provide sentiment summaries, trending complaints, and staff-specific feedback. Include appointment scheduling integration.",
    link: "#",
  },
  {
    title: "Appointment Scheduling & Booking",
    description: "Enable customers to book tables, consultations, or services via AI-powered scheduling. Automate confirmations, reminders, and no-show follow-ups using NLP and customer history.",
    link: "#",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="w-full px-4 py-16 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a011a] to-[#0a011a] -z-10" />
      
      {/* Glowing orbs for visual interest */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px] -z-10" />
      
      {/* Overlapping gradient for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-5xl md:text-7xl font-extrabold text-left mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(168,85,247,0.3)] flex items-center gap-4">
          What we do
          <a
            href="mailto:aayushmaan.k.sharma@gmail.com?subject=Automation%20Inquiry"
            className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reach Out
          </a>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#181c2f]/80 to-[#181a2b]/80 border border-purple-700/60 rounded-2xl shadow-xl p-8 relative group hover:shadow-[0_0_32px_8px_rgba(168,85,247,0.4)] transition-all duration-300">
            <AIGraph />
          </div>
          <WorkflowAutomationsCard />
          <div className="bg-gradient-to-br from-[#181c2f]/80 to-[#181a2b]/80 border border-purple-700/60 rounded-2xl shadow-xl p-8 relative group hover:shadow-[0_0_32px_8px_rgba(168,85,247,0.4)] transition-all duration-300">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent mb-2">Review Response Automation</h3>
            <p className="text-gray-300 text-sm font-bold mb-4">Automatically generate personalized responses to customer reviews using AI. The system analyzes sentiment, identifies key points, and crafts appropriate replies that maintain your brand voice.</p>
            <div className="mt-6 space-y-4">
              <div className="flex flex-col items-start">
                <div className="font-semibold text-sm text-purple-300 mb-1">Customer <span className='ml-1'>⭐⭐⭐⭐⭐</span></div>
                <div className="bg-gradient-to-br from-blue-700/80 to-purple-700/80 rounded-xl px-4 py-3 text-gray-100 text-base max-w-xs shadow-md">
                  Amazing experience! Jessica was so helpful and the food was incredible. Will definitely be back!
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="font-semibold text-sm text-purple-300 mb-1">Your Company</div>
                <div className="bg-gradient-to-br from-blue-700/80 to-purple-700/80 rounded-xl px-4 py-3 text-gray-100 text-base max-w-xs shadow-md">
                  Thank you so much for your kind words! We're thrilled you had a great experience, and we'll be sure to let Jessica know about your shout-out. It was a pleasure having you — we appreciate you showing up and hope to see you again soon!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-gradient-to-br from-[#181c2f]/80 to-[#181a2b]/80 border border-purple-700/60 rounded-2xl shadow-xl p-8 relative group hover:shadow-[0_0_32px_8px_rgba(168,85,247,0.4)] transition-all duration-300">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent mb-2">Customer Feedback Insight</h3>
            <p className="text-gray-300 text-sm font-bold">Pull data from Google/Yelp reviews, surveys, and DMs, then provide sentiment summaries, trending complaints, and staff-specific feedback. Include appointment scheduling integration.</p>
          </div>
          <div className="bg-gradient-to-br from-[#181c2f]/80 to-[#181a2b]/80 border border-purple-700/60 rounded-2xl shadow-xl p-8 relative group hover:shadow-[0_0_32px_8px_rgba(168,85,247,0.4)] transition-all duration-300">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent mb-2">Appointment Scheduling & Booking</h3>
            <p className="text-gray-300 text-sm font-bold">Enable customers to book tables, consultations, or services via AI-powered scheduling. Automate confirmations, reminders, and no-show follow-ups using NLP and customer history.</p>
          </div>
          <div className="bg-gradient-to-br from-[#181c2f]/80 to-[#181a2b]/80 border border-purple-700/60 rounded-2xl shadow-xl p-8 relative group hover:shadow-[0_0_32px_8px_rgba(168,85,247,0.4)] transition-all duration-300">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent mb-2">Social Media Engagement</h3>
            <p className="text-gray-300 text-sm font-bold">Schedule and generate posts using AI based on restaurant events, menu items, reviews, or photos. Trend-watching bot: analyze local trending hashtags and topics for content ideas.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 