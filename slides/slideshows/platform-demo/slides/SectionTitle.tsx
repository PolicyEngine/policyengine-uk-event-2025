import React from 'react';
import SectionTitleSlide from '@/components/SectionTitleSlide';
import { speakers } from '@/lib/speakers';

export default function SectionTitle() {
  return (
    <SectionTitleSlide
      sectionTitle="Live demo: PolicyEngine v2 platform"
      speakerName={speakers.anthonyVolk.name}
      speakerTitle={speakers.anthonyVolk.title}
      speakerOrganisation={speakers.anthonyVolk.organisation}
      headshotUrl={speakers.anthonyVolk.headshotUrl}
    />
  );
}