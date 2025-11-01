import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';

export default function DynamicModellingSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <h1 className="text-5xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
            Firm VAT dynamic modelling
          </h1>
        </SlideHeader>

        <div className="mt-8" style={{maxWidth: '1250px'}}>
          <p className="text-2xl font-bold text-pe-teal mb-8 text-left">
            Firms respond to tax incentives! We extend the model to capture behavioural responses.
          </p>

          <ul className="space-y-8 text-2xl text-left leading-relaxed pl-4">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                Firms maximise profits by choosing output:
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                Firms choose output where marginal revenue net of VAT equals marginal cost.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                We assume a Cobb–Douglas production technology:
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                This lets us back out firm-specific marginal costs from observed input and output data,
                capturing heterogeneity in productivity across firms.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                We model VAT using a smooth sigmoid tax schedule.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
