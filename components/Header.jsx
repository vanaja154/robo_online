"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/aboutus" },
    { name: "Collaborations", href: "/collaborations" },
    { name: "Directors", href: "/directors" },
    { name: "Share Holders", href: "/shareholders" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0F2727] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        
        {/* Logo with white background */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-white p-1 rounded">
            <img
              src="/images/Logo-removebg-preview1 (1).png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center text-white transition relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C8F169] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} className="ml-1" />}
              </Link>

              {/* Dropdown */}
              {item.dropdown && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition">
                  {item.dropdown.map((sub, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#0F2727]"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side (Desktop CTA) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/contactus"
            className="px-5 py-2 bg-gradient-to-r from-[#C8F169] to-[#039397] text-white rounded-full hover:from-[#039397] hover:to-[#C8F169] transition duration-300"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Menu Button - now white */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0F2727] border-t border-gray-800 shadow-md">
          <nav className="flex flex-col items-center space-y-2 p-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-white hover:text-[#C8F169] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C8F169] after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((sub, i) => (
                      <Link
                        key={i}
                        href="#"
                        className="block text-gray-300 hover:text-[#C8F169] text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA - same as desktop (colors swapped for hover) */}
            <Link
              href="/contactus"
              className="mt-3 px-5 py-2 bg-gradient-to-r from-[#C8F169] to-[#039397] text-white rounded-full hover:from-[#039397] hover:to-[#C8F169] transition duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
