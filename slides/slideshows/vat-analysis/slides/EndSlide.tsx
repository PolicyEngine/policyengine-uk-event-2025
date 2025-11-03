import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function EndSlide() {
  return (
    <Slide isEnd showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-12">
        <SlideTitle isEnd>Thank you</SlideTitle>
      </div>
    </Slide>
  );
}
