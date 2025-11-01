import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function EndSlide() {
  return (
    <Slide isEnd showFooter={false}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white text-center">Thanks for your attention!</h1>
      </div>
    </Slide>
  );
}
