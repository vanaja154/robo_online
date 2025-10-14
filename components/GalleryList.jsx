"use client";
import { motion } from "framer-motion";

export default function GalleryList() {
  const galleryImages = [
    "/images/image2.jpg",
    "/images/gallery-02.jpg",
    "/images/team-01.jpg",
    "/images/team-02.jpg",
    "/images/team-04.jpg",
    "/images/team-03.jpg",
    "/images/tesimonial-02.jpg",
    "/images/gallery-01.jpg",
  ];

  return (
    <section className="w-full flex justify-center bg-[#052B2B] px-6 md:px-10 lg:px-16 py-16">
      <div className="w-full max-w-7xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
          Our <span className="text-white">Gallery</span>
        </h2>

        {/* Section Tagline */}
        <p className="text-center text-gray-300 mt-4 mb-12 max-w-2xl mx-auto">
          Explore our gallery showcasing highlights of our work, projects, and
          events. Witness creativity, innovation, and excellence captured in every image.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((imgSrc, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-[#144443] rounded-2xl shadow-lg overflow-hidden p-4"
            >
              <img
                src={imgSrc}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
