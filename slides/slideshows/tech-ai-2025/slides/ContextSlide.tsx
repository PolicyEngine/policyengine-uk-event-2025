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
          <SlideTitle>AI at PolicyEngine: two uses</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-20">
            <div>
              <h2 className="text-5xl font-bold text-pe-dark mb-4 text-left">
                Building internally
              </h2>
              <p className="text-3xl text-gray-700 text-left">
                Dataset enhancement and faster policy modelling
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-pe-dark mb-4 text-left">
                Communicating research
              </h2>
              <p className="text-3xl text-gray-700 text-left">
                Dashboards, calculators, and presentations
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
