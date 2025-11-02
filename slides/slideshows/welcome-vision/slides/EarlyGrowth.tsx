import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function EarlyGrowth() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>2022-2024: Building momentum</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-6 text-left">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-semibold text-pe-dark mb-4">Progress</h2>
                <ul className="list-disc list-inside space-y-3">
                  <li>January 2023: Expanded to United States</li>
                  <li>Growing user base across UK</li>
                  <li>Recognition from HM Treasury</li>
                  <li>Media coverage of policy analysis</li>
                  <li>Bootstrapped development</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-pe-dark mb-4">Challenges</h2>
                <ul className="list-disc list-inside space-y-3">
                  <li>Users wanted local area analysis</li>
                  <li>Need for better user experience</li>
                  <li>Requests for validation framework</li>
                  <li>Limited resources for major enhancements</li>
                  <li>Required institutional backing to scale</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
              <p className="text-2xl font-medium text-center text-pe-dark">
                We had proven the concept, but needed support to become essential infrastructure
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}