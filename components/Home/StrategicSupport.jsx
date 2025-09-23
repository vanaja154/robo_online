import Image from "next/image";
import { FaChartLine, FaCoins, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";

export default function StrategicSupport() {
  return (
    <section className="w-full flex justify-center bg-[#062522] px-4 md:px-8 lg:px-12">
      <div
        className="relative w-full max-w-7xl rounded-3xl overflow-hidden py-12 px-6 md:px-12 lg:px-16 text-white"
        style={{
          background:
            "linear-gradient(90deg, rgba(20, 68, 67, 0) 0%, rgba(20, 68, 67, 0.8) 14%, rgba(20, 68, 67, 0.96) 30%, #144443 100%)",
        }}
      >
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/pattern.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>

        {/* Globe SVG (Bottom Right) */}
        <div className="absolute bottom-6 right-6 opacity-20 w-64 h-64 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 200 200"
            stroke="currentColor"
            className="text-green-300 w-full h-full"
          >
            <circle cx="100" cy="100" r="95" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="95" ry="35" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="35" ry="95" strokeWidth="1" />
            <line x1="5" y1="100" x2="195" y2="100" strokeWidth="1" />
            <line x1="100" y1="5" x2="100" y2="195" strokeWidth="1" />
          </svg>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/onlinetraining.jpg"
              alt="Team Meeting"
              width={520}
              height={460}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            {/* Section Label */}
            <p className="text-sm uppercase tracking-wide text-green-300 mb-3 flex items-center gap-2">
              <span className="text-lg">▸</span> Latest Services
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-10">
              You Need Someone At with <br /> Strategic Support
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              {/* Business Consulting */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500 rounded-full p-3 flex items-center justify-center">
                  <FaChartLine className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Business Consulting</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    everyone with high and useful reward for his Financial statement analysis, Cost-benefit analysis.
                  </p>
                </div>
              </div>

              {/* Finance Management */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500 rounded-full p-3 flex items-center justify-center">
                  <FaCoins className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Finance Management</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    everyone with high and useful reward for his Financial statement analysis, Cost-benefit analysis.
                  </p>
                </div>
              </div>

              {/* Invest Process */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500 rounded-full p-3 flex items-center justify-center">
                  <FaProjectDiagram className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Invest Process</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    everyone with high and useful reward for his Financial statement analysis, Cost-benefit analysis.
                  </p>
                </div>
              </div>

              {/* Life Insurance */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500 rounded-full p-3 flex items-center justify-center">
                  <FaShieldAlt className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Life Insurance</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    everyone with high and useful reward for his Financial statement analysis, Cost-benefit analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
