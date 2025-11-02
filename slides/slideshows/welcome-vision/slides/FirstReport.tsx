import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function FirstReport() {
  return (
    <Slide>
      <div className="max-w-7xl h-full flex flex-col">
        <SlideHeader>
          <SlideTitle>May 2021: First report</SlideTitle>
        </SlideHeader>

        <div className="flex-1 flex justify-center items-center mt-8">
          <Image
            src={assetPath("/timeline/first-report-may-2021.png")}
            alt="Blank Slate UBI report cover"
            width={600}
            height={800}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
      </div>
    </Slide>
  );
}
