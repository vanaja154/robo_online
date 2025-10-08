"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ShareHolderList() {
  const team = [
    { name: "Arun Hogan", role: "Share Holder", img: "/images/team-01.jpg" },
    { name: "Maria Warren", role: "Share Holder", img: "/images/team-02.jpg" },
    { name: "Kirsty Bryan", role: "Share Holder", img: "/images/team-03.jpg" },
    { name: "Selma Wells", role: "Share Holder", img: "/images/team-04.jpg" },
    { name: "Pablo Bush", role: "Share Holder", img: "/images/tesimonial-02.jpg" },
    { name: "Talia Wyatt", role: "Share Holder", img: "/images/team-01.jpg" },
    { name: "Nina Patel", role: "Share Holder", img: "/images/team-03.jpg" },
    { name: "Rahul Mehta", role: "Share Holder", img: "/images/team-02.jpg" },
    { name: "Lena Fischer", role: "Share Holder", img: "/images/tesimonial-01.jpg" },
  ];

  // Animation container & item
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full flex justify-center bg-[#052B2B] px-6 md:px-10 lg:px-16 py-16">
      <div className="w-full max-w-7xl">
        {/* Section Heading with Animation */}
        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* Section Tagline */}
          <motion.p
            variants={item}
            className="text-green-300 text-sm md:text-base lg:text-lg font-medium uppercase mb-4 flex items-center justify-center gap-3"
          >
            <span className="inline-block w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-green-400"></span>
            Our Trusted Investors
          </motion.p>

          {/* Section Title */}
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug text-white px-2 lg:px-0"
          >
            Meet Our <span className="text-white">Share Holders</span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-[#144443] rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Image with full radius */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500 rounded-2xl"
                />
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-green-400 text-sm mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
