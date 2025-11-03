import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';

export default function TwoChildLimitSlide() {
  return (
    <Slide>
      <div className="h-full flex flex-col">
        <SlideHeader>
          <SlideTitle>Enables rapid policy-specific tooling</SlideTitle>
        </SlideHeader>

        <div className="flex-1 w-full">
          <iframe
            src="https://policyengine.org/uk/two-child-limit-comparison"
            className="w-full h-full border-2 border-pe-teal/30 rounded"
            title="Two-child limit comparison"
          />
        </div>
      </div>
    </Slide>
  );
}
