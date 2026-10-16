import React from 'react';
import { HeroSlider } from '@/components/HeroSlider';
import { ImpactStats } from '@/components/ImpactStats';
import { AboutIntroSection } from '@/components/AboutIntroSection';
import { EducationalServicesSection } from '@/components/EducationalServicesSection';
import { ChairmanSection } from '@/components/ChairmanSection';
import { VisionMissionValues } from '@/components/VisionMissionValues';
import { InstitutionShowcase } from '@/components/InstitutionShowcase';
import { StoriesSection } from '@/components/StoriesSection';
import { EnquirySection } from '@/components/EnquirySection';

export default function HomePage() {
  return (
    <>
      {/* Section 2: Cinematic Hero with 4 Core Themes */}
      <HeroSlider />

      {/* Section 3: Our Impact Statistics */}
      <ImpactStats />

      {/* Section 4: About GES Quality Education */}
      <AboutIntroSection />

      {/* Section 5: Educational Services & Operational Models */}
      <EducationalServicesSection />

      {/* Section 6: Chairman's Message Verbatim */}
      <ChairmanSection />

      {/* Section 7 & 8: Vision, Mission, Values & Innovation */}
      <VisionMissionValues />

      {/* Section 9: Our Institutions (SIPS, Qurum, Al Mouj) */}
      <InstitutionShowcase />

      {/* Section 10: Inside GES / Community Stories */}
      <StoriesSection />

      {/* Section 11: Enquiry & Executive Consultations */}
      <EnquirySection />
    </>
  );
}
