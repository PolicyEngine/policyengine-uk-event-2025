import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function NuffieldSupport() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Nuffield Foundation support</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-6 text-left">
            <p className="text-2xl font-semibold text-pe-dark">
              Enhancing, localising, and democratising tax-benefit policy analysis
            </p>

            <ul className="list-disc list-inside space-y-4">
              <li>12-month grant (September 2024 - September 2025)</li>
              <li>Part of General Election Analysis and Briefing Fund</li>
              <li>Supporting evidence-based policy discourse</li>
            </ul>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-pe-dark mb-4">Key deliverables</h3>
              <ul className="list-disc list-inside space-y-3">
                <li>Local authority and constituency-level analysis</li>
                <li>Childcare subsidies and public services integration</li>
                <li>Open validation dashboard</li>
                <li>AI-capable design improvements</li>
                <li>User symposium and community building</li>
              </ul>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}