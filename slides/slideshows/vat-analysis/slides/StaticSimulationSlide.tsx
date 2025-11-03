import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import OpenDashboardButton from './OpenDashboardButton';

export default function StaticSimulationSlide() {
  return (
    <Slide>
      <div className="w-full h-full flex flex-col">
        <SlideHeader>
          <h1 className="text-5xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
            Our dashboard calculates static revenue changes
          </h1>
        </SlideHeader>

        <div className="flex-1 mt-8 flex flex-col items-center justify-center gap-8">
          <Image
            src={assetPath("/Screenshot 2025-11-01 at 18.14.40.png")}
            alt="Static simulation dashboard"
            width={700}
            height={500}
            className="h-auto rounded-lg shadow-xl"
          />
          <OpenDashboardButton url="https://uk-vatlab-app1j7s6o-policy-engine.vercel.app/" />
        </div>
      </div>
    </Slide>
  );
}
