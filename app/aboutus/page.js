import Testimonials from "@/components/AboutUs/Testimonials";
import BusinessJourney from "@/components/Home/BusinessJourney";
import ContactSection from "@/components/Home/ContactSection";
import TeamSection from "@/components/Home/TeamSection";
import CustomHeroSection from "@/utils/CustomHeroSection";
import React from "react";

export default function page() {
  return (
    <div>
      <CustomHeroSection
        backgroundImage="/images/office-team.jpg"
        headingLines={[
          "Empowering Businesses Globally",
        ]}
        subHeadingLines={[
          "RoboOnline delivers cutting-edge software, AI, and IT services that drive growth.",
        ]}
      />
      <BusinessJourney />
      {/* what wwe do */}
      <TeamSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
