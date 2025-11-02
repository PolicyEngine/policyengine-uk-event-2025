import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function FirstReport() {
  return (
    <Slide>
      <div className="h-full flex flex-col">
        <SlideHeader>
          <SlideTitle>May 2021: Model powers its first report</SlideTitle>
        </SlideHeader>

        <div className="flex-1 flex justify-center items-center mt-4">
          <Image
            src={assetPath("/timeline/first-report-may-2021.png")}
            alt="Blank Slate UBI report cover"
            width={450}
            height={600}
            className="max-h-[calc(100vh-340px)] w-auto h-auto object-contain"
          />
        </div>
      </div>
    </Slide>
  );
}
