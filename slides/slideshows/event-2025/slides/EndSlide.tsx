import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function EndSlide() {
  return (
    <Slide isEnd showFooter={false}>
      <div className="flex flex-col justify-center space-y-12">
        <SlideTitle isEnd>
          Thank you
        </SlideTitle>

        <div className="text-2xl text-white space-y-6 text-left">
          <p className="text-3xl font-medium">Questions?</p>
          <p className="opacity-90">hello@policyengine.org</p>
        </div>
      </div>
    </Slide>
  );
}
