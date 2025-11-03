import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function ACAShutdown() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Shutdown centers on premium tax credits</SlideTitle>
        </SlideHeader>

        <div className="mt-12 flex justify-center items-center">
          <div className="relative w-full h-[600px]">
            <Image
              src={assetPath("/images/posts/aca-shutdown-news.png")}
              alt="PBS News article on health care subsidies shutdown fight"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
