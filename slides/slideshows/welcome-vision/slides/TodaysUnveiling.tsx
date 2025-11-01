import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function TodaysUnveiling() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>PolicyEngine 2.0</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-8 text-left">
            <p className="text-3xl font-semibold text-pe-dark">
              What we've built together
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-2xl font-medium">From simple calculator...</p>
                <ul className="list-disc list-inside space-y-2 text-xl text-gray-600">
                  <li>Basic web interface</li>
                  <li>Limited coverage</li>
                  <li>Technical users only</li>
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-2xl font-medium">...to comprehensive platform</p>
                <ul className="list-disc list-inside space-y-2 text-xl text-gray-600">
                  <li>AI-powered explanations</li>
                  <li>Complete UK coverage</li>
                  <li>Accessible to everyone</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 bg-pe-teal/10 rounded-lg border-l-4 border-pe-teal">
              <p className="text-2xl font-medium text-pe-dark">
                Anthony will now demonstrate the platform we've been building...
              </p>
            </div>

            <p className="text-xl italic text-center text-gray-600 mt-6">
              This is just the beginning
            </p>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}