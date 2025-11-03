import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';

export default function DynamicModellingSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <h1 className="text-5xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
            Next step: Modelling firm VAT dynamics
          </h1>
        </SlideHeader>

        <div className="mt-8" style={{maxWidth: '1250px'}}>
          <ul className="space-y-8 text-2xl text-left leading-relaxed pl-4">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                Firms respond to tax incentives! We extend the model to capture behavioural responses
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                Firms maximise profits by choosing output:{' '}
                <span className="inline-block" style={{fontFamily: 'Georgia, serif'}}>
                  max<sub className="text-base italic">y<sub className="text-sm">i</sub></sub>{' '}
                  (1 − <i>τ</i>(<i>y</i><sub className="text-base">i</sub>))<i>y</i><sub className="text-base">i</sub> − <i>c</i><sub className="text-base">i</sub>(<i>y</i><sub className="text-base">i</sub>)
                </span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                Firms choose output where marginal revenue net of VAT equals marginal cost
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                We assume a Cobb–Douglas production function:{' '}
                <span style={{fontFamily: 'Georgia, serif'}}>
                  <i>y</i><sub className="text-base">i</sub> = <i>A</i><sub className="text-base">i</sub><i>x</i><sub className="text-base">i</sub><sup className="text-base">α</sup>
                </span>
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                This lets us back out firm-specific marginal costs from observed input and output data,
                capturing heterogeneity in productivity across firms
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                We model VAT using a smooth sigmoid tax schedule:{' '}
                <span style={{fontFamily: 'Georgia, serif'}}>
                  <i>τ</i>(<i>y</i><sub className="text-base">i</sub>) = <i>τ</i><sub className="text-base">max</sub> · (1 + <i>e</i><sup className="text-base">−<i>k</i>(<i>y</i><sub className="text-sm">i</sub>−<i>T</i>*)</sup>)<sup className="text-base">−1</sup>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
