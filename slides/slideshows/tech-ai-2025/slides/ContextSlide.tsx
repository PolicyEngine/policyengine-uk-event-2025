import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function ContextSlide() {
  return (
    <Slide>
      <div className="h-full flex flex-col justify-center max-w-6xl mx-auto">
        <SlideHeader>
          <SlideTitle>AI at PolicyEngine: two uses</SlideTitle>
        </SlideHeader>

        <div className="mt-16 space-y-16">
          <div>
            <h2 className="text-5xl font-bold text-pe-dark mb-6 text-left">
              Building internally
            </h2>
            <p className="text-3xl text-gray-600 text-left leading-relaxed">
              Dataset enhancement and faster policy modelling
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-pe-dark mb-6 text-left">
              Communicating research
            </h2>
            <p className="text-3xl text-gray-600 text-left leading-relaxed">
              Dashboards, calculators, and presentations
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
