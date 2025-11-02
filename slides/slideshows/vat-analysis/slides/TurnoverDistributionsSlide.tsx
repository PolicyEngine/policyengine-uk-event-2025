import React from 'react';
import Slide from '@/components/Slide';
import SingleImageLayout from '@/components/SingleImageLayout';

export default function TurnoverDistributionsSlide() {
  return (
    <Slide>
      <SingleImageLayout
        title="Turnover distributions"
        src="/bunching_analysis.png"
        alt="Turnover distributions showing bunching effects"
        caption="Bunching analysis showing firm behaviour around VAT threshold"
        maxWidth={850}
      />
    </Slide>
  );
}
