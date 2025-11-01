import React from 'react';
import MultiSpeakerIntroSlide from '@/components/MultiSpeakerIntroSlide';
import { speakers } from '@/lib/speakers';

export default function CitizenCodexIntro() {
  return (
    <MultiSpeakerIntroSlide
      speakers={[
        {
          name: speakers.biniamGebre.name,
          title: speakers.biniamGebre.title,
          organisation: speakers.biniamGebre.organisation,
          headshotUrl: speakers.biniamGebre.headshotUrl,
        },
        {
          name: speakers.masaraMyers.name,
          title: speakers.masaraMyers.title,
          organisation: speakers.masaraMyers.organisation,
          headshotUrl: speakers.masaraMyers.headshotUrl,
        }
      ]}
      presentationTitle="UX research and design of PolicyEngine v2 platform"
    />
  );
}