import Contact from "@/components/ContactUs/Contact";
import ContactSection from "@/components/Home/ContactSection";
import CustomHeroSection from "@/utils/CustomHeroSection";
import React from "react";

export default function page() {
  return (
    <div>
      <CustomHeroSection
        backgroundImage="/images/contact3.jpg"
        headingLines={["Get in Touch With Us"]}
        subHeadingLines={[
          "We’re here to answer your questions, discuss your needs, and explore opportunities to work together.",
          "Reach out to us anytime — our team is ready to support you.",
        ]}
      />

      <Contact />
       <ContactSection />
    </div>
  );
}
