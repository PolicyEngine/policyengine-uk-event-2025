import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function USLaunch() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>March 2022: PolicyEngine arrives stateside</SlideTitle>
        </SlideHeader>

        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-5xl" style={{ height: 'calc(100vh - 280px)' }}>
            <Image
              src={assetPath("/timeline/us-launch.png")}
              alt="PolicyEngine US Launch"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
