import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function EnhancedSubsidies() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>What enhanced subsidies do</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-10 text-left">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="bg-pe-dark text-white px-6 py-4 rounded-t-lg">
                  <h3 className="text-2xl font-bold">Remove income cap</h3>
                </div>
                <div className="bg-pe-dark/10 px-6 py-6 rounded-b-lg">
                  <p className="text-xl mb-4">
                    Eliminate the 400% FPL eligibility cliff
                  </p>
                  <div className="space-y-2 text-lg">
                    <p className="font-semibold text-pe-dark">Result:</p>
                    <p>Families above 400% FPL can now receive subsidies</p>
                    <p className="mt-2">Premium capped at 8.5% of income for all eligible households</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-pe-teal text-white px-6 py-4 rounded-t-lg">
                  <h3 className="text-2xl font-bold">Lower income share</h3>
                </div>
                <div className="bg-pe-teal/10 px-6 py-6 rounded-b-lg">
                  <p className="text-xl mb-4">
                    Reduce the share of income households must pay for premiums
                  </p>
                  <div className="space-y-2 text-lg">
                    <p className="font-semibold text-pe-dark">Example:</p>
                    <p>Family at 200% FPL:</p>
                    <p className="ml-4">• Before: 6.5% of income</p>
                    <p className="ml-4">• After: 2.0% of income</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
