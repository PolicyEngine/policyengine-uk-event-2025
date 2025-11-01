import React from 'react';
import SectionTitleSlide from '@/components/SectionTitleSlide';
import { getSpeakersByIds } from '@/lib/speakers';

export default function SectionTitle() {
  const [max, nikhil] = getSpeakersByIds(['max-ghenis', 'nikhil-woodruff']);

  return (
    <SectionTitleSlide
      title="Technology and AI for UK policymaking: the PolicyEngine approach"
      speakerIds={['max-ghenis', 'nikhil-woodruff']}
    />
  );
}
