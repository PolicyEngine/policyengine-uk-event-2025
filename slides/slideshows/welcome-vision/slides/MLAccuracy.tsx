import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function MLAccuracy() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>2022: Machine learning calibration</SlideTitle>
        </SlideHeader>

        <div className="mt-8">
          <div className="relative w-full" style={{ height: 'calc(100vh - 280px)' }}>
            <Image
              src={assetPath("/timeline/ml-accuracy.png")}
              alt="Machine learning accuracy improvements"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
