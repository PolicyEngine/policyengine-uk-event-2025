import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function USFoodStampMapSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>US example: Food stamp benefits by congressional district</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="flex items-center justify-center h-full">
            <Image
              src={assetPath("/images/food-stamp-map.png")}
              alt="Food stamp benefits by congressional district"
              width={1200}
              height={700}
              className="object-contain max-h-[600px]"
            />
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
