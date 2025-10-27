"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Briefcase,
  Folder,
  Layers,
  Laptop,
  Smartphone,
  Code,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// All service dropdown items (combined list)
const dropdownServices = [
  {
    title: "Business Consulting",
    href: "/business-consulting",
    icon: Briefcase,
  },
  {
    title: "Invest Process",
    href: "/invest-process",
    icon: Folder,
  },
  {
    title: "IT Services",
    href: "/it-services",
    icon: Layers,
  },
  {
    title: "Online Training",
    href: "/online-training",
    icon: Laptop,
  },
  {
    title: "Mobile Solutions",
    href: "/mobile-solutions",
    icon: Smartphone,
  },
  {
    title: "Facility Management Services",
    href: "/facility-management",
    icon: Code,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Hide header on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" }, // dropdown trigger
    { name: "About Us", href: "/aboutus" },
    { name: "Gallery", href: "/gallery" },
    { name: "Collaborations", href: "/collaborations" },
    { name: "Directors", href: "/directors" },
    { name: "Share Holders", href: "/shareholders" },
  ];

  return (
    <header
      className={`fixed top-[70px] left-0 w-full bg-[#039397] shadow-md z-40 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 lg:mt-5 relative">
        {/* Left side: Nav links or toggle in mobile */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white mr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center relative">
            {navItems.map((item) => {
              if (item.name === "Services") {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button className="flex items-center text-white text-[16px] font-medium relative transition duration-300 hover:text-[#C8F169]">
                      {item.name}
                      <ChevronDown
                        size={18}
                        className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute left-0 top-full mt-2 w-64 bg-[#0F2727] rounded-lg shadow-lg overflow-hidden border border-[#C8F169]/20 z-50"
                        >
                          {dropdownServices.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#C8F169] hover:text-black transition-all duration-300"
                            >
                              <service.icon size={18} className="text-[#C8F169]" />
                              <span className="text-[15px] font-medium">
                                {service.title}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white text-[16px] font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C8F169] after:transition-all after:duration-300 hover:after:w-full hover:text-[#C8F169] transition duration-300"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side: Social Media Links */}
        <div className="flex space-x-4 text-white">
          <Link href="#" className="hover:text-[#C8F169] transition duration-300">
            <Facebook size={20} />
          </Link>
          <Link href="#" className="hover:text-[#C8F169] transition duration-300">
            <Twitter size={20} />
          </Link>
          <Link href="#" className="hover:text-[#C8F169] transition duration-300">
            <Linkedin size={20} />
          </Link>
          <Link href="#" className="hover:text-[#C8F169] transition duration-300">
            <Instagram size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#039397] border-t border-gray-700 shadow-md">
          <nav className="flex flex-col items-center space-y-3 p-4">
            {navItems.map((item) => {
              if (item.name === "Services") {
                return (
                  <div key={item.name} className="w-full text-center">
                    <button
                      onClick={() =>
                        setIsDropdownOpen((prev) => !prev)
                      }
                      className="w-full flex items-center justify-center gap-2 text-white text-lg font-medium hover:text-[#C8F169]"
                    >
                      Services
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col mt-2 space-y-2 bg-[#0F2727] rounded-lg py-2"
                        >
                          {dropdownServices.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              className="flex items-center justify-start gap-3 px-6 py-2 text-white hover:bg-[#C8F169] hover:text-black transition-all duration-300"
                              onClick={() => setIsOpen(false)}
                            >
                              <service.icon size={18} className="text-[#C8F169]" />
                              <span>{service.title}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-[#C8F169] text-lg relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C8F169] after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
