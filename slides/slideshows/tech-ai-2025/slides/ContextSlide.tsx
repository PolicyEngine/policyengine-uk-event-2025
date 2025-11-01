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
          <div className="space-y-16">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-pe-teal flex items-center justify-center flex-shrink-0">
                <span className="text-4xl text-white font-bold">1</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-pe-dark mb-2">
                  Building internally
                </h2>
                <p className="text-2xl text-gray-700">
                  Dataset enhancement and faster policy modelling
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-pe-dark flex items-center justify-center flex-shrink-0">
                <span className="text-4xl text-white font-bold">2</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-pe-dark mb-2">
                  Communicating research
                </h2>
                <p className="text-2xl text-gray-700">
                  Dashboards, calculators, and presentations
                </p>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
