import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function HouseholdAISlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Household AI: plain language explanations</SlideTitle>
        </SlideHeader>

        <SlideContent size="sm">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-pe-teal">UK Household AI</h3>
                <div className="relative w-full h-64">
                  <Image
                    src={assetPath("/images/posts/uk-household-ai.png")}
                    alt="UK Household AI feature"
                    fill
                    className="object-contain border-2 border-pe-teal/30 rounded"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-pe-teal">US Household AI</h3>
                <div className="relative w-full h-64">
                  <Image
                    src={assetPath("/images/posts/us-household-ai.png")}
                    alt="US Household AI feature"
                    fill
                    className="object-contain border-2 border-pe-teal/30 rounded"
                  />
                </div>
              </div>
            </div>

            <div className="text-left space-y-3">
              <p className="text-xl font-semibold">Claude 3.5 Sonnet integration for instant tax-benefit explanations</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Plain language breakdown of complex calculations</li>
                <li>Context-aware explanations for each household</li>
                <li>Winner of Georgetown Beeck Center Policy2Code Challenge</li>
              </ul>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
