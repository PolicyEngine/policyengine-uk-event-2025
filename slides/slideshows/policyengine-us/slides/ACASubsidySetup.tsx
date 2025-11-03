import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function ACASubsidySetup() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Shutdown centres on Obamacare subsidies</SlideTitle>
        </SlideHeader>

        <div className="mt-8 flex justify-center items-center" style={{ height: 'calc(100vh - 280px)' }}>
          <Image
            src={assetPath("/timeline/shutdown-subsidies.png")}
            alt="Shutdown centres on Obamacare subsidies"
            width={1200}
            height={800}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
      </div>
    </Slide>
  );
}
