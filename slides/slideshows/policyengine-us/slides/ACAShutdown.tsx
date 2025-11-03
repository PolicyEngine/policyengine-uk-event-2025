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
      <div className="w-full">
        <SlideHeader>
          <SlideTitle>Shutdown centers on premium tax credits</SlideTitle>
        </SlideHeader>

        <div className="flex justify-center items-center mt-8">
          <Image
            src={assetPath("/images/posts/aca-shutdown-news.png")}
            alt="PBS News article on health care subsidies shutdown fight"
            width={700}
            height={450}
            className="h-auto"
          />
        </div>
      </div>
    </Slide>
  );
}
