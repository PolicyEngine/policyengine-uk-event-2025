import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function ClosingReflectionSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>AI's promise and challenge for policy</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-8 text-left">
            <div className="bg-pe-teal/10 rounded-xl p-8 border-l-4 border-pe-teal">
              <h3 className="text-2xl font-bold text-pe-dark mb-4">The opportunity</h3>
              <p className="text-xl text-gray-700">
                AI enables unprecedented policy analysis: more comprehensive, more accurate,
                and more accessible than ever before
              </p>
            </div>

            <div className="bg-pe-dark/10 rounded-xl p-8 border-l-4 border-pe-dark">
              <h3 className="text-2xl font-bold text-pe-dark mb-4">The challenge</h3>
              <p className="text-xl text-gray-700 mb-4">
                AI may transform society in radically rapid ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
                <li>Changing income growth patterns</li>
                <li>Reshaping income composition</li>
                <li>Creating new demands for policy research</li>
                <li>Requiring alignment with society's values</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-2xl font-semibold text-gray-800 text-center">
                We're bullish on AI—and motivated by the demands it creates
              </p>
              <p className="text-xl text-gray-600 text-center mt-4">
                Together with the broader community's expertise, we hope our software can help
                navigate this fast-changing world
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
