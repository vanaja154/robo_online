"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ActiveClientsSection() {
 
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-[#0F2727] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 items-start">
        
        <motion.div
          className="bg-[#06302f] rounded-2xl p-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <div>
            {/* Profile Images */}
            <div className="flex -space-x-4 mb-6">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <Image
                    key={index}
                    src="/images/news-02.jpg"
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-[#073534]"
                    alt="client"
                  />
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">Expert team members</h2>
            <p className="text-gray-300 mb-6">
              We take pride in assembling a diverse and highly skilled.
            </p>
          </div>

          {/* Button */}
          <a
            href="#"
            className="inline-flex items-center justify-between w-[220px] bg-gradient-to-r from-[#53e280] to-[#0fd6d6] text-[#073534] font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Lets Talk With Us
            <span className="bg-[#073534] text-white rounded-full p-2 ml-3">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </motion.div>

        {/* Fastest Customer Service */}
        <motion.div
          className="bg-[#06302f] rounded-2xl p-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#53e280] to-[#0fd6d6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#073534]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0A9 9 0 1112 3a9 9 0 019 9z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-3">Fastest customer service</h2>
          <p className="text-gray-300 mb-4">
            We pride ourselves on providing the fastest customer service industry.
          </p>
          <a href="#" className="underline text-white font-medium">
            Read More
          </a>
        </motion.div>

        {/* Reasonable Pricing */}
        <motion.div
          className="bg-[#06302f] rounded-2xl p-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#53e280] to-[#0fd6d6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#073534]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6M12 7v.01M3 7h18M3 13h18"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Reasonable pricing</h3>
          <p className="text-gray-300 mb-4">
            We believe in providing reasonable pricing that offers exceptional.
          </p>
          <a href="#" className="underline text-white font-medium">
            Read More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
