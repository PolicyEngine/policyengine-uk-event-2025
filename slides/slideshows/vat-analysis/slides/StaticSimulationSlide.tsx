import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';

export default function StaticSimulationSlide() {
  return (
    <Slide>
      <div className="max-w-7xl w-full">
        <SlideHeader>
          <h1 className="text-5xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
            Static simulation dashboard
          </h1>
        </SlideHeader>

        <div className="flex justify-center items-center mt-8">
          <Image
            src="/Screenshot 2025-11-01 at 18.14.40.png"
            alt="Static simulation dashboard"
            width={800}
            height={600}
            className="h-auto"
          />
        </div>
      </div>
    </Slide>
  );
}
