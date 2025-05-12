import React from "react";

function ChartPlaceholder({ type }) {
  return (
    <div className="flex flex-col items-center justify-center h-32 w-full bg-gradient-to-br from-gray-900 via-purple-900/60 to-black rounded-xl shadow-inner border border-purple-800/40">
      <span className="text-purple-400 text-lg font-semibold opacity-70">{type} Chart</span>
    </div>
  );
}

function KPIWidget({ title, value }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-900/60 to-gray-900 rounded-xl shadow-lg border border-purple-800/40 p-4 min-w-[120px]">
      <span className="text-xs text-gray-400 mb-1">{title}</span>
      <span className="text-2xl font-bold text-white">{value}</span>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-2 flex flex-col gap-4">
        <ChartPlaceholder type="Line" />
        <div className="flex gap-4">
          <ChartPlaceholder type="Bar" />
          <ChartPlaceholder type="Donut" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <KPIWidget title="Visibility" value="67%" />
        <KPIWidget title="Traffic" value="22.5K" />
        <KPIWidget title="SEO Score" value="82%" />
        <KPIWidget title="User Tracking" value="9.3" />
      </div>
    </section>
  );
} 