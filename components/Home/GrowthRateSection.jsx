"use client";
import { ArrowUpRight } from "lucide-react";

export default function GrowthRateSection() {
  const stats = [
    {
      value: "90%",
      title: "Scalable Solutions",
      desc: "End to end fiber optic cable connectivity for stable",
    },
    {
      value: "95%",
      title: "Automation Features",
      desc: "End to end fiber optic cable connectivity for stable",
    },
    {
      value: "75%",
      title: "24/7 Support",
      desc: "End to end fiber optic cable connectivity for stable",
    },
  ];

  return (
    <section className="w-full flex justify-center bg-[#052B2B] px-4 md:px-8 lg:px-12">
      <div className="relative w-full max-w-7xl rounded-3xl overflow-hidden py-16 px-6 md:px-12 lg:px-16 text-white">
        {/* Background Image + Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src="/growth-bg.png" // 👉 replace with your image
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,68,67,0)_0%,rgba(20,68,67,0.8)_14%,rgba(20,68,67,0.96)_30%,#144443_100%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top Label */}
          <p className="flex items-center gap-2 text-sm font-semibold text-green-400 mb-4">
            <span className="text-lg">▸</span> Growth Rate
          </p>

          {/* Heading + Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-snug max-w-3xl">
              Building Connections for grow <br /> Limitless Opportunities.
            </h2>
            <button className="bg-gradient-to-r from-green-400 to-green-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition">
              Lets Talk With Us
              <span className="bg-black text-green-400 rounded-full p-2">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>

          {/* Divider Line */}
          <div className="border-b border-gray-500/40 mt-10 mb-10"></div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Circle Progress */}
                <div className="relative w-28 h-28 mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-green-300 to-green-600 flex items-center justify-center text-xl font-bold">
                    {item.value}
                  </div>
                  <div className="absolute inset-0 rounded-full border-[6px] border-green-700 opacity-50"></div>
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
