import ContactSection from "@/components/Home/ContactSection";
import FaqSection from "@/components/Home/FaqSection";
import ShareHolderList from "@/components/ShareHolderList";
import CustomHeroSection from "@/utils/CustomHeroSection";
import React from "react";

export default function page() {
  return (
    <div>
      <CustomHeroSection
        backgroundImage="/images/office-team.jpg"
        headingLines={["Meet Our Valued Share Holders"]}
        subHeadingLines={[
          "Our trusted investors drive innovation and support our mission towards global growth.",
        ]}
      />

      {/* shareholder list */}
      <ShareHolderList />
      <ContactSection />
      <FaqSection />
    </div>
  );
}
