"use client";
import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

export default function ContactSection() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative bg-[#0c2c2c] text-white py-16">
      <motion.div
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* Left Side */}
        <motion.div variants={item}>
          <p className="text-green-400 font-semibold flex items-center gap-2">
            <span className="text-green-400">▶</span> Our Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-snug">
            let's work together
          </h2>
          <p className="mt-4 text-gray-300 max-w-md">
            We denounce with righteous indignation and like men beguiled and
            demoralized by the charms
          </p>

          {/* Contact Info */}
          <motion.div className="mt-8 space-y-6" variants={container}>
            <motion.div className="flex items-center gap-4" variants={item}>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#073333]">
                <FaPhoneAlt className="text-pink-300 text-lg" />
              </div>
              <div>
                <p className="text-gray-400">Call For Inquiry</p>
                <p className="text-xl font-semibold">+000 (222) 000 00</p>
              </div>
            </motion.div>

            <motion.div className="flex items-center gap-4" variants={item}>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#073333]">
                <FaEnvelope className="text-pink-300 text-lg" />
              </div>
              <div>
                <p className="text-gray-400">Send Us Email</p>
                <p className="text-xl font-semibold">info@example.com</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="relative bg-[#093d3d] rounded-lg p-8 shadow-lg"
          variants={item}
        >
          <h3 className="text-2xl font-bold mb-2">Need Help For Project!</h3>
          <p className="text-gray-300 mb-6">
            We are ready to help your next projects, let’s work together
          </p>

          <motion.form className="space-y-4" variants={container}>
            {/* Name & Email */}
            <motion.div className="grid grid-cols-2 gap-4" variants={container}>
              <motion.div className="relative" variants={item}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 focus:outline-none"
                />
                <FaUser className="absolute right-3 top-3 text-gray-400" />
              </motion.div>
              <motion.div className="relative" variants={item}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 focus:outline-none"
                />
                <MdEmail className="absolute right-3 top-3 text-gray-400" />
              </motion.div>
            </motion.div>

            {/* Service Dropdown */}
            <motion.select
              className="w-full p-3 rounded-md bg-transparent border border-gray-600 text-gray-400 focus:outline-none"
              variants={item}
            >
              <option className="bg-[#093d3d]">Choose Our Service</option>
              <option className="bg-[#093d3d]">Web Development</option>
              <option className="bg-[#093d3d]">UI/UX Design</option>
              <option className="bg-[#093d3d]">Mobile App</option>
            </motion.select>

            {/* Message */}
            <motion.textarea
              rows="4"
              placeholder="Write a Message"
              className="w-full p-3 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 focus:outline-none"
              variants={item}
            ></motion.textarea>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="flex items-center justify-center gap-3 w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-green-300 to-green-500 text-black font-semibold"
              variants={item}
            >
              Send Message
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <IoIosArrowForward className="text-black text-lg" />
              </span>
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}
