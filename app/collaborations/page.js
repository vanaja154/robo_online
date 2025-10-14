import Collaborators from "@/components/Collaborators";
import ContactSection from "@/components/Home/ContactSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import CustomHeroSection from "@/utils/CustomHeroSection";
import React from "react";

export default function page() {
  return (
    <div className="bg-[#052B2B]">
      <CustomHeroSection
        backgroundImage="/images/service-2.jpg"
        headingLines={["Collaborating for Impact"]}
        subHeadingLines={[
          "We partner with industry leaders to drive innovation, create solutions, and deliver value that empowers businesses and communities alike.",
        ]}
      />
      <Collaborators />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}
