import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import { getSpeakerById } from '@/lib/speakers';

export default function OBBBADashboard() {
  const david = getSpeakerById('david-trimmer');

  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Tool for exploring household-by-household policy impacts</SlideTitle>
        </SlideHeader>

        <div className="mt-8">
          <div className="text-left mb-6">
            <h2 className="text-2xl font-bold text-pe-dark">{david?.name}</h2>
            <p className="text-lg text-gray-700">{david?.title}, {david?.organisation}</p>
          </div>

          <div className="w-full h-[calc(100vh-300px)] rounded-lg overflow-hidden shadow-2xl border-4 border-pe-teal">
            <iframe
              src="https://policyengine.org/us/obbba-household-by-household"
              className="w-full h-full"
              title="PolicyEngine OBBBA Household Explorer"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
