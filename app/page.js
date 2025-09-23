import ActiveClientsSection from '@/components/Home/ActiveClientsSection';
import BlogSection from '@/components/Home/BlogSection';
import BusinessJourney from '@/components/Home/BusinessJourney';
import ContactSection from '@/components/Home/ContactSection';
import FaqSection from '@/components/Home/FaqSection';
import GrowthRateSection from '@/components/Home/GrowthRateSection';
import HeroSection from '@/components/Home/HeroSection';
import LatestServices from '@/components/Home/LatestServices';
import OpportunitySection from '@/components/Home/OpportunitySection';
import PricingPlans from '@/components/Home/PricingPlans';
import StrategicSupport from '@/components/Home/StrategicSupport';
import TeamSection from '@/components/Home/TeamSection';
import TestimonialSection from '@/components/Home/TestimonialSection';
import React from 'react';

export default function Aboutpage() {
    return (
        <div>
            <HeroSection />
            <ActiveClientsSection />  
            <BusinessJourney />
            <StrategicSupport />
            <OpportunitySection />
            <PricingPlans />
            <LatestServices />
            <GrowthRateSection />
            <TeamSection />
            <TestimonialSection />
            <ContactSection />
            <FaqSection />
            <BlogSection />
        </div>
    );
}