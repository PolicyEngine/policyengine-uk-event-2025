import React from 'react';
import Slide from '@/components/Slide';
import SingleImageLayout from '@/components/SingleImageLayout';

export default function StaticSimulationSlide() {
  return (
    <Slide>
      <SingleImageLayout
        title="Static simulation dashboard"
        src="/Screenshot 2025-11-01 at 18.14.40.png"
        alt="Static simulation dashboard"
        maxWidth={1000}
      />
    </Slide>
  );
}
