import React from 'react';
import Slide from '@/components/Slide';
import SlideContent from '@/components/SlideContent';
import SlideHeader from '@/components/SlideHeader';

export default function TurnoverDistributionsSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <h1 className="text-5xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
            Turnover distributions
          </h1>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="flex items-center justify-center h-96">
            <p className="text-gray-500 italic">
              [Chart: Turnover distributions showing bunching effects]
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
