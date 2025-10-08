"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function DirectorsList() {
  const directors = [
    { name: "James Anderson", role: "Board Director", img: "/images/team-01.jpg" },
    { name: "Amelia Fairchild", role: "Board Director", img: "/images/team-02.jpg" },
    { name: "Thomas Ellington", role: "Board Director", img: "/images/team-03.jpg" },
    { name: "Olivia Westwood", role: "Board Director", img: "/images/team-04.jpg" },
    { name: "Ethan Brooks", role: "Board Director", img: "/images/tesimonial-01.jpg" },
    { name: "Sophia Clarke", role: "Board Director", img: "/images/tesimonial-02.jpg" },
    { name: "Michael Turner", role: "Board Director", img: "/images/team-04.jpg" },
    { name: "Isabella Foster", role: "Board Director", img: "/images/team-01.jpg" },
  ];

  return (
    <section className="w-full flex justify-center bg-[#052B2B] px-6 md:px-10 lg:px-16 py-16">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
          Our <span className="text-white">Directors</span>
        </h2>

        {/* Section Tagline */}
        <p className="text-center text-gray-300 mt-4 mb-12 max-w-2xl mx-auto">
          Meet the visionary leaders driving our mission forward with dedication,
          expertise, and innovation.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-[#144443] rounded-2xl shadow-lg overflow-hidden group relative"
            >
              {/* Image with social overlay */}
              <div className="relative p-4">
                <img
                  src={director.img}
                  alt={director.name}
                  className="w-full h-64 object-cover rounded-xl"
                />

                {/* Social icons - hidden until hover */}
                <div className="absolute right-4 bottom-[-100px] flex flex-col gap-3 opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <a
                    href="#"
                    className="bg-green-600 text-white p-2 rounded-full shadow hover:bg-green-500 transition"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#"
                    className="bg-green-600 text-white p-2 rounded-full shadow hover:bg-green-500 transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="bg-green-600 text-white p-2 rounded-full shadow hover:bg-green-500 transition"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="px-4 pb-6 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {director.name}
                </h3>
                <p className="text-green-400 text-sm mt-1">{director.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
