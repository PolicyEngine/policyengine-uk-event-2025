import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function ChallengesSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Challenges and safeguards</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-pe-dark text-left mb-3">
                Accuracy and trust
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-left text-gray-700 ml-4">
                <li>All AI-generated code goes through human review and testing</li>
                <li>Automated validation against known benchmarks</li>
                <li>Transparent methodology and open-source codebase</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-pe-dark text-left mb-3">
                Interpretability
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-left text-gray-700 ml-4">
                <li>AI assists, but deterministic models remain at the core</li>
                <li>Every result traceable to specific rule implementations</li>
                <li>Clear separation between ML-enhanced data and rule-based calculations</li>
              </ul>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
