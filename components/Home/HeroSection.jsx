"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[#0F2727] lg:h-[100vh] p-8 lg:mt-2">
      <div
        className="h-full w-full flex items-center justify-center gap-10 lg:gap-48 lg:px-8 px-4 flex-col lg:flex-row 
        bg-none lg:bg-[url('/images/hero-bg.png')] lg:bg-center lg:bg-cover lg:bg-no-repeat"
      >
        <LeftContent />
        <RightContent />
      </div>
    </section>
  );
}

function LeftContent() {
  return (
    <motion.div
      className="space-y-4 mt-20 lg:mt-0"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      <h1 className="text-white flex flex-col text-3xl lg:text-7xl font-semibold">
        <span>We are Helping</span>
        <span>
          Grow <span className="text-[#C8F169]">Business</span>
        </span>
        <span>Success</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-2 z-20 relative">
        <p className="text-gray-500 text-lg font-medium">
          everyone with high and useful reward <br /> for his/her trading,
          purchase and <br /> investment. Our goal is to make the
        </p>
        <img src="/images/small-image.jpg" className="rounded-full" alt="" />
      </div>

      <div className="w-full flex lg:block items-center justify-center">
        <button className="relative w-[250px] overflow-hidden rounded-full group bg-[#ffffff1a] cursor-pointer">
          {/* Background with top-to-bottom animation */}
          <span className="absolute inset-0 bg-[#C8F169] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

          {/* Button content */}
          <span className="relative z-10 flex items-center justify-center p-4 text-white group-hover:text-black transition-colors duration-500">
            <span className="flex-1 text-center">Lets Talk with us</span>
            <span className="absolute right-[5px] bg-[#C8F169] p-3 rounded-full group-hover:bg-white transition-colors duration-500">
              <ArrowUpRight color="black" />
            </span>
          </span>
        </button>
      </div>
    </motion.div>
  );
}

function RightContent() {
  return (
    <motion.div
      className="relative mt-4 lg:mt-0"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} // comes after LeftContent
    >
      <div className="absolute hidden lg:flex right-10 top-[280px] bg-[#C8F169] rounded-full items-center justify-center spin-slow-custom">
        <img src="/images/text-circle.png" alt="" />
      </div>

      <div className="absolute hidden lg:block top-[370px] -left-[290px] rotate-45-anim">
        <img src="/images/paper-shape.png" alt="" />
      </div>

      <div className="lg:h-[500px]">
        <img src="/images/hero-img.png" className="h-full w-full" />
      </div>
    </motion.div>
  );
}
