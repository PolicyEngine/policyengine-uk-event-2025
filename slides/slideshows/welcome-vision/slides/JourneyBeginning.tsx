import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function JourneyBeginning() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>September 2021: The beginning</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-8 text-left">
            <p className="text-3xl font-semibold text-pe-dark">
              Built at the UBI Center think tank
            </p>

            <ul className="list-disc list-inside space-y-4">
              <li>Created as a tool to support our own policy research</li>
              <li>Simple web app for tax-benefit analysis</li>
              <li>Built on open-source OpenFisca framework</li>
              <li>UK's first open microsimulation model</li>
            </ul>

            <div className="mt-12 p-6 bg-gray-100 rounded-lg">
              <p className="text-2xl italic text-gray-700">
                "We built PolicyEngine to answer our own research questions faster and more transparently"
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}