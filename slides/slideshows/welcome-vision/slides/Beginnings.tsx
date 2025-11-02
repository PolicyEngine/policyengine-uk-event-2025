import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function Beginnings() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Aug 2020: Beginnings of PolicyEngine UK model</SlideTitle>
        </SlideHeader>

        <div className="mt-8 flex justify-center items-center" style={{ height: 'calc(100vh - 280px)' }}>
          <Image
            src={assetPath("/timeline/commits-history.png")}
            alt="PolicyEngine UK commits over time"
            width={1400}
            height={400}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
      </div>
    </Slide>
  );
}
