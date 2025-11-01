import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function DemoSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>PolicyEngine v2 demo</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-8 text-left">
            <p className="text-3xl font-semibold text-pe-dark">
              Live demonstration
            </p>

            <ul className="list-disc list-inside space-y-4">
              <li>New user interface design</li>
              <li>AI-powered explanations</li>
              <li>Local area analysis</li>
              <li>Mobile optimisation</li>
            </ul>

            <div className="mt-12 p-6 bg-pe-teal/10 rounded-lg border-l-4 border-pe-teal">
              <p className="text-2xl font-medium text-pe-dark">
                Switch to live demo at policyengine.org
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}