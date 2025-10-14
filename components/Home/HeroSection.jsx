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
  const word = "Business".split("");

  return (
    <motion.div
      className="space-y-4 mt-20 lg:mt-0"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      {/* Heading */}
      <h1 className="text-white flex flex-col text-3xl lg:text-7xl font-semibold">
        <span>We are Helping</span>
        <span className="flex flex-wrap gap-1">
          Grow{" "}
          <span className="flex bg-gradient-to-r from-[#C8F169] to-[#039397] bg-clip-text text-transparent">
            {word.map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                animate={{
                  y: [0, -10, 10, 0], // jumping animation
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // gradient animation
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #C8F169, #039397)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </span>
        <span>Success</span>
      </h1>

      {/* Description & Circle with AtoZ */}
      <div className="flex flex-col lg:flex-row items-center gap-2 z-20 relative">
        <p className="text-white text-lg font-medium">
          everyone with high and useful reward <br /> for his/her trading,
          purchase and <br /> investment. Our goal is to make the
        </p>

        {/* Text-circle with AtoZ */}
        <div className="absolute hidden lg:flex right-10 -top-[10px] bg-[#C8F169] rounded-full items-center justify-center">
          {/* Circle Image */}
          <img
            src="/images/text-circle.png"
            alt=""
            className="spin-slow-custom"
          />

          {/* Animated AtoZ Text */}
          <motion.span
            className="absolute font-bold text-lg lg:text-xl text-black"
            animate={{
              opacity: [0.5, 1, 0.5],
              textShadow: [
                "0 0 2px #C8F169, 0 0 5px #C8F169",
                "0 0 5px #C8F169, 0 0 10px #C8F169",
                "0 0 2px #C8F169, 0 0 5px #C8F169",
              ],
            }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            AtoZ
          </motion.span>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex lg:block items-center justify-center">
        <button className="relative w-[250px] overflow-hidden rounded-full group bg-[#ffffff1a] cursor-pointer">
          <span className="absolute inset-0 bg-[#C8F169] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>

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
      className="relative mt-4 lg:mt-0 flex justify-center items-center"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    >
      {/* Half-circle yellow glow effect on left */}
      <div className="absolute -left-18 top-1/2 transform -translate-y-1/2 w-64 h-52 lg:w-[200px] lg:h-[300px] bg-[#C8F169] opacity-30 rounded-l-full filter blur-3xl pointer-events-none"></div>

      <div className="lg:h-[500px] lg:w-full relative z-10">
        <img
          src="/images/hero-img.png"
          className="h-full w-full object-contain"
        />
      </div>
    </motion.div>
  );
}
