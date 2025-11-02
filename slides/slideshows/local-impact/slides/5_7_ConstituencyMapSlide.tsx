import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import ConstituencyMap from '@/components/ConstituencyMap';

export default function ConstituencyMapSlide() {
  return (
    <Slide>
      <div className="max-w-full">
        <SlideHeader>
          <SlideTitle>Interactive constituency impacts</SlideTitle>
        </SlideHeader>

        <div className="mt-8">
          <ConstituencyMap />
        </div>
      </div>
    </Slide>
  );
}
