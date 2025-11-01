import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';

export default function BehaviouralExtensionSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <h1 className="text-5xl font-bold text-pe-teal pb-5 border-b-4 border-pe-teal text-left">
            Behavioural extension and elasticity
          </h1>
        </SlideHeader>

        <ul className="space-y-8 text-2xl text-left leading-relaxed pl-4 mt-8" style={{maxWidth: '1250px'}}>
          <li className="flex items-start gap-4">
            <span className="flex-shrink-0 mt-1.5 font-bold">Extension:</span>
            <span className="leading-normal">
              We incorporate asymmetric uncertainty around the threshold to capture realistic firm variation.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex-shrink-0 mt-1.5 font-bold">No-notch:</span>
            <span className="leading-normal">
              We follow the bunching literature (Saez, 2010; Chetty et al., 2011; Kleven and Waseem, 2013;
              Liu and Lockwood, 2015) by fitting a smooth polynomial to the turnover distribution.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="flex-shrink-0 mt-1.5 font-bold">Elasticity Estimation:</span>
            <span className="leading-normal">
              We find the mapping from each firm's real-world turnover to its turnover under the
              counterfactual scenario (here, the no-notch distribution), and then estimate elasticities.
            </span>
          </li>
        </ul>
      </div>
    </Slide>
  );
}
