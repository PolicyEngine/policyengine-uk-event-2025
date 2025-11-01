import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function PostNufFieldTransformation() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>The transformation</SlideTitle>
        </SlideHeader>

        <p className="text-xl italic text-gray-600 mb-8 text-left">
          With Nuffield's support, we built what users needed
        </p>

        <SlideContent size="md">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-pe-dark mb-4">Enhanced Coverage</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>All 650 parliamentary constituencies</li>
                <li>Every local authority in the UK</li>
                <li>Childcare subsidies integration</li>
                <li>Major public services modelling</li>
                <li>Complete tax-benefit system</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-pe-dark mb-4">Platform Evolution</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>AI-powered explanations</li>
                <li>Open validation dashboard</li>
                <li>Redesigned user experience</li>
                <li>Mobile-optimised interface</li>
                <li>API for researchers</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-pe-teal/10 rounded-lg">
            <p className="text-2xl font-bold text-center text-pe-dark">
              From tool → platform → community → ecosystem
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}