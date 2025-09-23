"use client";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";

const teamMembers = [
  {
    name: "Guy Hawkins",
    role: "Admin",
    image: "/team-01.jpg",
  },
  {
    name: "Jacob Jones",
    role: "Manager",
    image: "/team-02.jpg",
  },
  {
    name: "Kristin Watson",
    role: "Consultant",
    image: "/team-03.jpg",
  },
  {
    name: "Bessie Cooper",
    role: "Founder",
    image: "/team-04.jpg",
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-[#092B26] py-16">
      <div className="text-center mb-12">
        <p className="text-green-400 font-medium flex items-center justify-center gap-2">
          <span className="w-3 h-3 bg-green-400 rotate-45"></span>
          Our Teammate
        </p>
        <h2 className="text-4xl font-bold text-white mt-3">
          Enhance Your Experience with <br /> Expert Consulting
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden relative group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover"
            />

            {/* Social Icons */}
            {activeIndex === index && (
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                <a
                  href="#"
                  className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition"
                >
                  <FaBehance />
                </a>
              </div>
            )}

            {/* Footer Info */}
            <div className="bg-[#09312B] p-5 flex justify-between items-center">
              <div>
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <p className="text-green-400 text-sm">{member.role}</p>
              </div>
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="bg-green-600 text-white w-9 h-9 flex items-center justify-center rounded-full"
              >
                {activeIndex === index ? "x" : "+"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
