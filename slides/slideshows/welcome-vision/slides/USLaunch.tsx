import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function USLaunch() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Mar 2022: PolicyEngine arrives stateside</SlideTitle>
        </SlideHeader>

        <div className="mt-8 flex justify-center items-center" style={{ height: 'calc(100vh - 280px)' }}>
          <Image
            src={assetPath("/timeline/us-launch.png")}
            alt="PolicyEngine US Launch"
            width={1200}
            height={800}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
      </div>
    </Slide>
  );
}
