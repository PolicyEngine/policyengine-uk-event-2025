import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function SyntheticPanelSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Improving models: synthetic panel data</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-10 text-left">
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-gray-400">
              <p className="text-2xl font-semibold text-gray-800 mb-4">
                Challenge: Pension program simulation
              </p>
              <p className="text-xl text-gray-700">
                Programs like US Social Security solvency require tracking individuals over time—
                but survey data is cross-sectional
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-pe-teal">Exploring synthetic panel generation</h3>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-pe-teal/10 rounded-lg p-6">
                  <p className="text-xl font-semibold text-pe-dark mb-3">Current approach</p>
                  <p className="text-lg text-gray-700">
                    Cross-sectional survey data provides snapshots
                  </p>
                </div>

                <div className="bg-pe-dark/10 rounded-lg p-6">
                  <p className="text-xl font-semibold text-pe-dark mb-3">AI-generated panels</p>
                  <p className="text-lg text-gray-700">
                    Generate synthetic longitudinal data to simulate lifetime programs
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
