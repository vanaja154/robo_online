"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BusinessJourney() {
  // Left side animation (top to bottom)
  const leftContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const leftItem = {
    hidden: { opacity: 0, y: -40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20, ease: "easeInOut" },
    },
  };

  // Right side animation (bottom to top)
  const rightContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.25 } },
  };

  const rightItem = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-[#0F2727] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-36 items-center">
        
        {/* ==== Left Images ==== */}
        <motion.div
          className="relative flex justify-center"
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Large Image */}
          <motion.div
            className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border-2 border-[#0d3b36] shadow-lg"
            variants={leftItem}
          >
            <Image src="/images/image.jpg" alt="Business meeting" fill className="object-cover" />
          </motion.div>

          {/* Small Image Overlay */}
          <motion.div
            className="absolute md:-bottom-8 md:-right-8 bottom-0 right-0 w-40 sm:w-48 md:w-60 h-40 sm:h-60 md:h-72 rounded-xl overflow-hidden border-2 border-[#0d3b36] shadow-lg"
            variants={leftItem}
          >
            <Image src="/images/about-01.jpg" alt="Team discussion" fill className="object-cover" />
          </motion.div>

          {/* Skilled Team Box with continuous left-right animation */}
          <motion.div
            className="absolute top-64 md:left-44 left-1/4 z-20 bg-[#C8F169] text-black rounded-xl px-4 py-2 shadow-md flex items-center space-x-3 h-16"
            animate={{
              x: [0, 10, 0, -10, 0], // continuous left-right motion
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="font-semibold">Skilled Team</span>
            <div className="flex -space-x-2">
              <Image src="/images/news-02.jpg" alt="member1" width={32} height={32} className="rounded-full border-2 border-white" />
              <Image src="/images/news-02.jpg" alt="member2" width={32} height={32} className="rounded-full border-2 border-white" />
              <Image src="/images/news-02.jpg" alt="member3" width={32} height={32} className="rounded-full border-2 border-white" />
              <span className="bg-black text-white text-sm rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
                9+
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ==== Right Content ==== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={rightContainer}
        >
          <motion.p variants={rightItem} className="uppercase tracking-wide font-medium flex items-center space-x-2">
            <span>Who We Are</span>
          </motion.p>

          <motion.h2 variants={rightItem} className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            The Journey Behind Our Business Success
          </motion.h2>

          <motion.p variants={rightItem} className="mt-6 text-gray-300">
            Consultz is the go-to hub for early adopters and innovation enthusiasts, offering cutting-edge technology
          </motion.p>

          <motion.div variants={rightItem} className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-xl flex items-center space-x-2">
                <span>💡</span> <span>Creative Solutions</span>
              </h3>
              <p className="text-gray-300 mt-1">
                In today’s competitive business landscape, the need for efficient IT solutions has been more critical.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl flex items-center space-x-2">
                <span>✏️</span> <span>Actionable Solutions</span>
              </h3>
              <p className="text-gray-300 mt-1">
                Innovation is the key to staying ahead in a changing world. We harness cutting-edge technology
              </p>
            </div>
          </motion.div>

          <motion.div variants={rightItem} className="mt-8">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Business Success</span>
              <span className="font-medium">88%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-[#0ed1a0] h-2 rounded-full" style={{ width: "88%" }}></div>
            </div>
          </motion.div>

          <motion.div variants={rightItem} className="mt-10 flex items-center gap-6">
            <a
              href="#"
              className="inline-flex items-center justify-between w-[220px] bg-gradient-to-r from-[#53e280] to-[#0fd6d6] text-[#073534] font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              Lets Talk With Us
              <span className="bg-[#073534] text-white rounded-full p-2 ml-3">
                <ArrowUpRight size={18} />
              </span>
            </a>

            <div className="flex items-center gap-3">
              <Image src="/images/news-02.jpg" alt="Founder" width={50} height={50} className="rounded-full border-2 border-[#b2ff59]" />
              <div>
                <p className="font-semibold">Michel Devid</p>
                <p className="text-sm text-gray-300">Founder</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
