"use client";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="w-full flex justify-center bg-[#0c2c2c] px-4 md:px-8 lg:px-12">
      <footer className="relative w-full max-w-7xl bg-[#0f3d3d] rounded-t-3xl overflow-hidden text-white">
        {/* Background Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/footer-shape.png"
            alt="Footer Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Head Office */}
            <div>
              {/* Logo */}
              <div className="mb-6">
                <Image
                  src="/images/Logo-removebg-preview1 (1).png"
                  alt="Finclix Logo"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>

              {/* Head Office Info */}
              <h3 className="text-lg font-semibold mb-3">Head office</h3>
              <p className="mb-4">
                2972 Westheimer Rd. Santa Ana, <br />
                Illinois 85486
              </p>
              <p className="mb-3 bg-[#0c2c2c] px-4 py-3 rounded-lg inline-block">
                <a href="tel:+1234567890" className="hover:text-green-400">
                  + (123) 456–7890
                </a>
              </p>
              <p className="bg-[#0c2c2c] px-4 py-3 rounded-lg inline-block">
                <a
                  href="mailto:Yourcompany@example.com"
                  className="hover:text-green-400"
                >
                  Yourcompany@example.com
                </a>
              </p>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="/aboutus" className="hover:text-green-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="hover:text-green-400">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/collaborations" className="hover:text-green-400">
                      Collaborations
                    </a>
                  </li>
                  <li>
                    <a href="/contactus" className="hover:text-green-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/business-consulting" className="hover:text-green-400">
                    Business Consulting
                  </a>
                </li>
                <li>
                  <a href="/invest-process" className="hover:text-green-400">
                    Invest Process
                  </a>
                </li>
                <li>
                  <a href="/it-services" className="hover:text-green-400">
                    It Services
                  </a>
                </li>
                <li>
                  <a href="/online-training" className="hover:text-green-400">
                    Online Training
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-end mt-10 space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c2c2c] hover:bg-green-500 transition"
            >
              <RxCross2 />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c2c2c] hover:bg-green-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c2c2c] hover:bg-green-500 transition"
            >
              <FaPinterestP />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0c2c2c] hover:bg-green-500 transition"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-gray-600 pt-6 text-center text-gray-400">
            Copyright © 2025 Finclix. All Rights Reserved
          </div>
        </div>
      </footer>
    </section>
  );
}
