import BusinessConsultingPage from "@/components/BusinessConsulting/BusinessConsultingPage";
import CustomHeroSection from "@/utils/CustomHeroSection";
import ServiceDetails from "@/utils/ServiceDetails";
import ServicesFaqSection from "@/utils/CustomFaqSection";
import ServiceHeadSection from "@/utils/SeviceHeadSection";
import React from "react";
import FaqSection from "@/components/BusinessConsulting/FaqSection";

export default function page() {
  return (
    <div>
      <CustomHeroSection
        backgroundImage="/images/service-2.jpg"
        headingLines={["Business Consulting"]}
        subHeadingLines={[
          "We provide expert business consulting services to help you achieve sustainable growth, optimize operations, and make informed strategic decisions.",
        ]}
      />
      {/* <ServiceHeadSection /> */}
      <ServiceHeadSection
        label="Business Consulting"
        headingLines={["Business Consulting Services"]}
        paragraphLines={[
          "We provide expert consulting to help your business grow and succeed.",
          "Our team focuses on strategy, operations, and digital transformation."
        ]}
        videoImage="/images/service-details.jpg"
      />
      {/* <ServiceDetails /> */}
      <BusinessConsultingPage />
      {/* <ServicesFaqSection /> */}
      <FaqSection />
    </div>
  );
}
