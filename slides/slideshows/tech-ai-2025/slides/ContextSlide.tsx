import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function ContextSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Technology at PolicyEngine</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <p className="text-3xl text-gray-800 leading-relaxed text-left">
            At PolicyEngine, tech is pretty core to what we do. We think using a modern tech stack is critical to being <span className="font-semibold text-pe-dark">agile</span>.
          </p>
          <p className="text-3xl text-gray-800 leading-relaxed text-left mt-8">
            And being agile is critical to providing timely and accurate research that incorporates the best available modelling.
          </p>
        </SlideContent>
      </div>
    </Slide>
  );
}
