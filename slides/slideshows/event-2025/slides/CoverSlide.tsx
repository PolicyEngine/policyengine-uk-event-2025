import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col justify-center space-y-16">
        <SlideTitle isCover>
          PolicyEngine 2.0 and the<br />
          future of public policy analysis
        </SlideTitle>

        <div className="text-3xl text-white space-y-3 text-left">
          <p className="font-medium">3 November 2025</p>
          <p>Central Hall Westminster, London</p>
        </div>
      </div>
    </Slide>
  );
}
