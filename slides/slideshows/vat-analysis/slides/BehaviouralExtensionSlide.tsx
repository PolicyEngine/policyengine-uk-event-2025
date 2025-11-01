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

        <div className="space-y-8 text-2xl text-left leading-relaxed mt-8" style={{maxWidth: '1250px'}}>
          <ul className="space-y-8 pl-4">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                <span className="font-bold">Extension:</span> We incorporate asymmetric uncertainty around the threshold to capture realistic firm variation:
              </span>
            </li>
          </ul>

          <div className="flex flex-col items-center gap-6 my-8" style={{fontFamily: 'Georgia, serif'}}>
            <div className="text-2xl">
              <i>y</i><sub className="text-base">uncertainty</sub> = <i>y</i>*<sub className="text-base">FOC</sub> × (1 + <i>ε</i><sub className="text-base">i</sub>)
            </div>

            <div className="flex items-center gap-4 text-2xl">
              <span><i>ε</i><sub className="text-base">i</sub> = </span>
              <span className="text-4xl">{`{`}</span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-8">
                  <span><i>N</i>(<i>μ</i><sub className="text-base">skew</sub>, <i>σ</i><sup className="text-base">2</sup>)</span>
                  <span>if 0 &lt; <i>y</i>*<sub className="text-base">FOC</sub> − <i>T</i>* &lt; 10000</span>
                </div>
                <div className="flex items-center gap-8">
                  <span><i>N</i>(0, <i>σ</i><sup className="text-base">2</sup>)</span>
                  <span>otherwise</span>
                </div>
              </div>
            </div>
          </div>

          <ul className="space-y-8 pl-4">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                <span className="font-bold">No-notch:</span> We follow the bunching literature (Saez, 2010; Chetty et al., 2011; Kleven & Waseem, 2013; Liu & Lockwood, 2015) by fitting a smooth polynomial to the turnover distribution.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 mt-1.5">•</span>
              <span className="leading-normal">
                <span className="font-bold">Elasticity Estimation:</span> We find the mapping from each firm's real-world turnover to its turnover under the counterfactual scenario (here, the no-notch distribution), and then estimate elasticities.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
