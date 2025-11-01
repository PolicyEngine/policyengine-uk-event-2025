import React from 'react';
import SectionTitleSlide from '@/components/SectionTitleSlide';
import { speakers } from '@/lib/speakers';

export default function AnvarIntro() {
  return (
    <SectionTitleSlide
      sectionTitle="The Nuffield Foundation's vision for evidence-based policy"
      speakerName={speakers.anvarSarygulov.name}
      speakerTitle={speakers.anvarSarygulov.title}
      speakerOrganisation={speakers.anvarSarygulov.organisation}
      headshotUrl={speakers.anvarSarygulov.headshotUrl}
    />
  );
}