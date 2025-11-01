import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function FutureSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Looking ahead</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-6">
            <ul className="list-disc list-inside space-y-4 text-xl text-left text-gray-700">
              <li>
                <span className="font-semibold">Real-time policy drafting:</span> AI suggesting
                optimal parameters as policymakers explore trade-offs
              </li>
              <li>
                <span className="font-semibold">Automated research:</span> AI agents conducting
                literature reviews and empirical validation
              </li>
              <li>
                <span className="font-semibold">Multi-country models:</span> Accelerating
                deployment of PolicyEngine worldwide
              </li>
              <li>
                <span className="font-semibold">Behavioural microsimulation:</span> ML models
                predicting household responses to policy changes
              </li>
            </ul>

          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
