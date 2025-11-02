import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import { getSpeakerById } from '@/lib/speakers';

export default function DaphneIntro() {
  const daphne = getSpeakerById('daphne-hansell');

  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Tool for estimating health insurance premium subsidies</SlideTitle>
        </SlideHeader>

        <div className="mt-8">
          <div className="text-left mb-6">
            <h2 className="text-2xl font-bold text-pe-dark">{daphne?.name}</h2>
            <p className="text-lg text-gray-700">{daphne?.title}, {daphne?.organisation}</p>
          </div>

          <div className="w-full h-[calc(100vh-300px)] rounded-lg overflow-hidden shadow-2xl border-4 border-pe-teal">
            <iframe
              src="https://policyengine.org/us/aca-calc"
              className="w-full h-full"
              title="PolicyEngine ACA Calculator"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
