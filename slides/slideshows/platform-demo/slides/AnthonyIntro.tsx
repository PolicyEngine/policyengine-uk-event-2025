import React from 'react';
import SpeakerIntroSlide from '@/components/SpeakerIntroSlide';
import { speakers } from '@/lib/speakers';

export default function AnthonyIntro() {
  return (
    <SpeakerIntroSlide
      name={speakers.anthonyVolk.name}
      title={speakers.anthonyVolk.title}
      organisation={speakers.anthonyVolk.organisation}
      headshotUrl={speakers.anthonyVolk.headshotUrl}
      presentationTitle="Live demo: PolicyEngine v2 platform"
    />
  );
}