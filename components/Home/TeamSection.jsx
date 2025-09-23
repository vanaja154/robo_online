"use client";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Guy Hawkins", role: "Admin", image: "/images/team-01.jpg" },
  { name: "Jacob Jones", role: "Manager", image: "/images/team-02.jpg" },
  { name: "Kristin Watson", role: "Consultant", image: "/images/team-03.jpg" },
  { name: "Bessie Cooper", role: "Founder", image: "/images/team-04.jpg" },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Container animation for section
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Card entrance animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="bg-[#092B26] py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-green-400 font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
          <span className="w-3 h-3 bg-green-400 rotate-45"></span>
          Our Teammate
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3 leading-snug">
          Enhance Your Experience with <br className="hidden sm:block" /> Expert Consulting
        </h2>
      </div>

      {/* Team Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transition-all"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Image with hover slide */}
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-full h-64 sm:h-72 lg:h-80 object-cover"
              initial={{ x: 50 }}
              animate={{ x: activeIndex === index ? 0 : 50 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />

            {/* Social Icons */}
            <motion.div
              className="absolute top-1/2 right-3 -translate-y-1/2 flex flex-col gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 20,
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-green-600 text-white p-2 sm:p-2.5 rounded-full hover:bg-green-700 transition"
                  >
                    <Icon />
                  </a>
                )
              )}
            </motion.div>

            {/* Footer Info */}
            <div className="bg-[#09312B] p-4 sm:p-5 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg">
                  {member.name}
                </h3>
                <p className="text-green-400 text-xs sm:text-sm">
                  {member.role}
                </p>
              </div>
              <motion.button
                whileHover={{ rotate: 45 }}
                className="bg-green-600 text-white w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full"
              >
                {activeIndex === index ? "x" : "+"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
