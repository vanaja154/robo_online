"use client";

import { motion } from "framer-motion";
import { Briefcase, Folder, Layers } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "01",
    icon: Briefcase,
    title: "Business Consulting",
    desc: "Everyone with high and useful reward for his We offer a free consultation so that.",
  },
  {
    id: "02",
    icon: Folder,
    title: "Invest Process",
    desc: "Everyone with high and useful reward for his We offer a free consultation so that.",
  },
  {
    id: "03",
    icon: Layers,
    title: "Life Insurance",
    desc: "Everyone with high and useful reward for his We offer a free consultation so that.",
  },
];

export default function ServicesCompo() {
  return (
    <section className="bg-[#0F2727] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white text-[#0F2727] rounded-lg shadow-md p-8 overflow-hidden group"
          >
            {/* Top Row: Icon and Number */}
            <div className="flex items-center gap-4 mb-6">
              {/* Folded Icon Box */}
              <div className="relative w-14 h-14 bg-[#06302f] flex items-center justify-center rounded-sm">
                <motion.div
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center justify-center"
                >
                  <service.icon className="w-6 h-6 text-green-400" />
                </motion.div>
                {/* Small folded triangle effect */}
                <div className="absolute -right-2 bottom-0 w-0 h-0 border-t-[28px] border-t-[#06302f] border-l-[14px] border-l-transparent"></div>
              </div>

              {/* Number Section */}
              <div className="text-5xl font-extrabold text-gray-300 opacity-90">
                {service.id}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.desc}</p>

            {/* Animated bottom-right triangles */}
            <motion.div
              className="absolute bottom-4 right-4 opacity-60"
              animate={{ x: [0, 10, 0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/arrow-shape.png"
                alt="pattern"
                width={60}
                height={60}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
