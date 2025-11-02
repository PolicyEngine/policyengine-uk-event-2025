import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function FirstReport() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>May 2021: First report using the model</SlideTitle>
        </SlideHeader>

        <div className="mt-8 flex justify-center items-center" style={{ height: 'calc(100vh - 280px)' }}>
          <Image
            src={assetPath("/timeline/first-report-may-2021.png")}
            alt="Blank Slate UBI report cover"
            width={800}
            height={1000}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
      </div>
    </Slide>
  );
}
