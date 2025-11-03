import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-16">
        <SlideTitle isCover>
          Looking ahead: AI-powered policy analysis
        </SlideTitle>
        <div className="text-3xl text-white space-y-3 text-center">
          <p className="font-medium">Max Ghenis, Nikhil Woodruff, Vahid Ahmadi</p>
          <p>PolicyEngine</p>
        </div>
      </div>
    </Slide>
  );
}
