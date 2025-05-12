import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "⚡",
    title: "Real-Time Updates",
    description: "Stay ahead with up-to-the-minute ranking data.",
  },
  {
    icon: "💡",
    title: "Instant Insights",
    description: "Actionable SEO data without delay.",
  },
  {
    icon: "📊",
    title: "Effortless Reporting",
    description: "Clear reports into SEO progress.",
  },
  {
    icon: "🚀",
    title: "Lightning Fast",
    description: "Full setup in just 60 seconds.",
  },
  {
    icon: "🎯",
    title: "Intelligent Targeting",
    description: "Analyze direct competitors for strategies.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="w-full max-w-5xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
} 