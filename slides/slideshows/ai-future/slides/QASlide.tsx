import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';

export default function QASlide() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center h-full space-y-16">
        <SlideTitle>Questions?</SlideTitle>
        <div className="text-3xl text-gray-700 text-center space-y-6">
          <p className="font-medium">We'd love to hear your thoughts</p>
        </div>
      </div>
    </Slide>
  );
}
