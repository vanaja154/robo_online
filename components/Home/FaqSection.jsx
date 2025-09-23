"use client";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function FaqSection() {
  const faqs = [
    "How Can Business Consulting Benefit My Company?",
    "What Are the Costs of Your Consulting Services?",
    "How Do You Measure the Success of a Project?",
    "Do You Provide Remote Consulting Services?",
    "What Industries Do You Specialize In?",
  ];

  return (
    <section className="w-full flex justify-center bg-[#0c2c2c] px-4 md:px-8 lg:px-12">
      <div className="relative w-full max-w-7xl rounded-3xl overflow-hidden py-16 px-6 md:px-12 lg:px-16 text-white">
        {/* Background Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/dotted-map-dark.png" // 👉 replace with your background image in /public
            alt="FAQ Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,68,67,0)_0%,rgba(20,68,67,0.8)_14%,rgba(20,68,67,0.96)_30%,#144443_100%)]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/profile.jpg" // 👉 replace with your image in /public
              alt="FAQ"
              width={600}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-green-400 font-semibold flex items-center gap-2">
              <span className="text-green-400">▶</span> FAQ
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-snug">
              Top Questions Answered
            </h2>
            <p className="mt-4 text-gray-300 max-w-lg">
              Everyone with high and useful reward for his Financial statement
              analysis, Cost-benefit analysis everyone with high and useful
              reward for his
            </p>

            {/* Button */}
            <button className="mt-6 flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-300 to-green-500 text-black font-semibold">
              Lets Talk With Us
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <IoIosArrowForward className="text-black text-lg" />
              </span>
            </button>

            {/* FAQ List */}
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-6 py-4 rounded-lg bg-[#0f3d3d] hover:bg-[#115252] transition"
                >
                  <span className="text-white font-medium">{faq}</span>
                  <IoIosArrowForward className="text-gray-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
