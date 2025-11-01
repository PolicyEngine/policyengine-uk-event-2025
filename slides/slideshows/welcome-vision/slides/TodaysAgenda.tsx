import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function TodaysAgenda() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Today's journey</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-6 text-left">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-pe-dark mb-4">Morning: Platform & capabilities</h2>
                <ul className="list-disc list-inside space-y-2 text-xl">
                  <li>Anthony unveils PolicyEngine 2.0</li>
                  <li>Citizen Codex on UX research</li>
                  <li>Local area analysis demonstration</li>
                  <li>Vahid on model scope & data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-pe-dark mb-4">Afternoon: Real-world impact</h2>
                <ul className="list-disc list-inside space-y-2 text-xl">
                  <li>NIESR's Living Standards Review</li>
                  <li>Carbon dividend microsimulation</li>
                  <li>VAT analysis with firm data</li>
                  <li>US expansion story</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-pe-teal/10 rounded-lg">
              <p className="text-2xl font-medium text-center text-pe-dark">
                Panel: The future of evidence-based policymaking
              </p>
            </div>

            <p className="text-xl italic text-center text-gray-600">
              Please engage, ask questions, and join us for networking at tea and reception
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}