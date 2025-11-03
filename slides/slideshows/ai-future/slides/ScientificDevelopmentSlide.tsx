import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function ScientificDevelopmentSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Building software: scientific approach</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-8 text-left">
            <p className="text-2xl font-semibold text-pe-dark">
              End-to-end rules-as-code automation
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="bg-pe-teal text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-pe-dark mb-2">Golden pull request</h3>
                  <p className="text-xl text-gray-700">
                    Manually develop and verify code that accurately encodes a new program
                    (e.g., a US cash welfare program)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-pe-dark text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-pe-dark mb-2">AI generation</h3>
                  <p className="text-xl text-gray-700">
                    AI produces code from policy description using our plugin
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-pe-teal text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-pe-dark mb-2">Maximize alignment</h3>
                  <p className="text-xl text-gray-700">
                    Adjust prompts iteratively to maximize alignment between AI-produced
                    and golden code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
