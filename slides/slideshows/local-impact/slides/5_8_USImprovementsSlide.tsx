import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function USImprovementsSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>We're improving this further in the US</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <p className="mb-6">
            We're developing an enhanced approach that clones each household for each local area,
            then reweights this larger dataset while pruning it with an L0 penalty
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-pe-dark mb-2">Why this matters</h3>
              <p>
                This enables capturing local policy variation, which is considerable in both countries:
              </p>
            </div>

            <div className="ml-6 space-y-3">
              <div>
                <p className="font-semibold text-pe-teal">United States</p>
                <p className="text-xl">
                  Income tax and transfer programs vary significantly by state
                </p>
              </div>

              <div>
                <p className="font-semibold text-pe-teal">United Kingdom</p>
                <p className="text-xl">
                  Local Housing Allowance and Council Tax Reduction vary by local authority
                </p>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
