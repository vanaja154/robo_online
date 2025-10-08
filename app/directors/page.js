import WhatWeDo from "@/components/AboutUs/WhatWeDo";
import DirectorsList from "@/components/DirectosList";
import BusinessJourney from "@/components/Home/BusinessJourney";
import ContactSection from "@/components/Home/ContactSection";
import CustomHeroSection from "@/utils/CustomHeroSection";
import React from "react";

export default function page() {
  return (
    <div>
      <CustomHeroSection
        backgroundImage="/images/office-team.jpg"
        headingLines={["Meet Our Visionary Leaders"]}
        subHeadingLines={[
          "Our Board of Directors drives innovation, strategy, and excellence across all facets of our organization.",
        ]}
      />
       <BusinessJourney />
       {/* directors list */}
       <DirectorsList />
        <WhatWeDo />
        <ContactSection />
    </div>
  );
}
