import FaqSection from "@/components/BusinessConsulting/FaqSection";
import InvestCom from "@/components/InvestProcess/InvestCom";
import CustomHeroSection from "@/utils/CustomHeroSection";
import ServiceHeadSection from "@/utils/SeviceHeadSection";
import React from "react";

export default function page() {
  return (
    <div>
      <CustomHeroSection
        backgroundImage="/images/service-2.jpg"
        headingLines={["Investment Process"]}
        subHeadingLines={[
          "Our investment process is designed to deliver long-term value through careful analysis, risk management, and strategic portfolio diversification.",
        ]}
      />

      <ServiceHeadSection
        label="Investment Process"
        headingLines={["Our Investment Process"]}
        paragraphLines={[
          "We follow a structured investment process to maximize returns and minimize risks.",
          "Our approach combines in-depth research, strategic planning, and disciplined execution to ensure sustainable growth.",
        ]}
        videoImage="/images/service-details.jpg"
      />

      <InvestCom/>

      <FaqSection />
    </div>
  );
}
