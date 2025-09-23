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
          className="relative flex flex-col items-center"
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Large Image */}
          <motion.div
            className="relative w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] h-80 sm:h-96 md:h-[28rem] lg:h-[35rem] rounded-xl overflow-hidden border-2 border-[#0d3b36] shadow-lg"
            variants={leftItem}
          >
            <Image src="/images/image2.jpg" alt="Business meeting" fill className="object-cover" />
          </motion.div>

          {/* Skilled Team Box below the image */}
          <motion.div
            className="mt-6 z-20 bg-[#C8F169] text-black rounded-xl px-4 py-2 shadow-md flex flex-col sm:flex-row items-center sm:space-x-3 w-full max-w-[20rem] justify-center"
            animate={{
              y: [0, -5, 0, 5, 0], // subtle up-down motion for life
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="font-semibold mb-2 sm:mb-0">Skilled Team</span>
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
          <motion.p
            variants={rightItem}
            className="uppercase tracking-wide font-medium flex items-center space-x-2 text-sm lg:text-base"
          >
            <span>Who We Are</span>
          </motion.p>

          <motion.h2
            variants={rightItem}
            className="text-4xl md:text-5xl lg:text-5xl font-bold mt-4 lg:mt-6 leading-tight"
          >
            The Journey Behind Our Business Success
          </motion.h2>

          <motion.p
            variants={rightItem}
            className="mt-6 lg:mt-8 text-gray-300 text-base lg:text-lg"
          >
            Consultz is the go-to hub for early adopters and innovation enthusiasts, offering cutting-edge technology
          </motion.p>

          <motion.div variants={rightItem} className="mt-6 lg:mt-8 space-y-4 lg:space-y-6">
            <div>
              <h3 className="font-semibold text-xl lg:text-2xl flex items-center space-x-2">
                <span>💡</span> <span>Creative Solutions</span>
              </h3>
              <p className="text-gray-300 mt-1 lg:mt-2 text-sm lg:text-base">
                In today’s competitive business landscape, the need for efficient IT solutions has been more critical.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl lg:text-2xl flex items-center space-x-2">
                <span>✏️</span> <span>Actionable Solutions</span>
              </h3>
              <p className="text-gray-300 mt-1 lg:mt-2 text-sm lg:text-base">
                Innovation is the key to staying ahead in a changing world. We harness cutting-edge technology
              </p>
            </div>
          </motion.div>

          <motion.div variants={rightItem} className="mt-10 lg:mt-12 flex items-center gap-6">
            <a
              href="#"
              className="inline-flex items-center justify-between w-[220px] lg:w-[240px] bg-gradient-to-r from-[#53e280] to-[#0fd6d6] text-[#073534] font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-full hover:opacity-90 transition text-sm lg:text-base"
            >
              Lets Talk With Us
              <span className="bg-[#073534] text-white rounded-full p-2 ml-3 lg:p-3">
                <ArrowUpRight size={18} />
              </span>
            </a>

            <div className="flex items-center gap-3">
              <Image src="/images/news-02.jpg" alt="Founder" width={50} height={50} className="rounded-full border-2 border-[#b2ff59]" />
              <div>
                <p className="font-semibold text-base lg:text-lg">Anil</p>
                <p className="text-sm lg:text-base text-gray-300">Founder</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
