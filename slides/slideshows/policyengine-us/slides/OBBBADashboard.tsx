import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';

export default function OBBBADashboard() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>We show representative household impacts</SlideTitle>
        </SlideHeader>

        <div className="mt-8">
          <div className="w-full h-[calc(100vh-250px)] rounded-lg overflow-hidden shadow-2xl border-4 border-pe-teal">
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
