import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';

export default function TurnoverDistributionsSlide() {
  return (
    <Slide>
      <div className="max-w-7xl w-full">
        <SlideHeader>
          <h1 className="text-5xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
            Turnover distributions
          </h1>
        </SlideHeader>

        <div className="flex justify-center items-center mt-8">
          <Image
            src="/bunching_analysis.png"
            alt="Turnover distributions showing bunching effects"
            width={700}
            height={525}
            className="h-auto"
          />
        </div>
      </div>
    </Slide>
  );
}
