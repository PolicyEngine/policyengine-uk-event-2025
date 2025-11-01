import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function AIDataSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Building internally: data</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="grid grid-cols-5 gap-16 items-start">
            <div className="col-span-3">
              <h2 className="text-3xl font-semibold text-pe-dark text-left mb-10">
                Dataset enhancement with machine learning
              </h2>

              <BulletList
                size="md"
                items={[
                  {
                    text: 'Neural network reweighting to match administrative targets',
                    subtext: 'Calibrating survey data to DWP, HMRC statistics',
                  },
                  {
                    text: 'Imputation models for missing variables',
                    subtext: 'Income, assets, programme participation',
                  },
                  {
                    text: 'Privacy-preserving synthetic data generation',
                  },
                ]}
              />
            </div>

            <div className="col-span-2">
              <svg viewBox="0 0 400 450" className="w-full h-auto">
                {/* Neural network visualization */}
                <defs>
                  <linearGradient id="tealGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#319795" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#1D4044" stopOpacity="0.9"/>
                  </linearGradient>
                </defs>

                {/* Input layer */}
                <circle cx="60" cy="100" r="22" fill="#319795" opacity="0.4"/>
                <circle cx="60" cy="180" r="22" fill="#319795" opacity="0.4"/>
                <circle cx="60" cy="260" r="22" fill="#319795" opacity="0.4"/>
                <circle cx="60" cy="340" r="22" fill="#319795" opacity="0.4"/>

                {/* Hidden layer 1 */}
                <circle cx="170" cy="70" r="26" fill="url(#tealGrad)"/>
                <circle cx="170" cy="160" r="26" fill="url(#tealGrad)"/>
                <circle cx="170" cy="250" r="26" fill="url(#tealGrad)"/>
                <circle cx="170" cy="340" r="26" fill="url(#tealGrad)"/>

                {/* Hidden layer 2 */}
                <circle cx="280" cy="115" r="26" fill="url(#tealGrad)"/>
                <circle cx="280" cy="205" r="26" fill="url(#tealGrad)"/>
                <circle cx="280" cy="295" r="26" fill="url(#tealGrad)"/>

                {/* Output */}
                <circle cx="360" cy="210" r="30" fill="#319795"/>

                {/* Connections (sample) */}
                <line x1="82" y1="100" x2="144" y2="70" stroke="#319795" strokeWidth="2" opacity="0.25"/>
                <line x1="82" y1="180" x2="144" y2="160" stroke="#319795" strokeWidth="2" opacity="0.25"/>
                <line x1="196" y1="70" x2="254" y2="115" stroke="#319795" strokeWidth="2" opacity="0.35"/>
                <line x1="196" y1="160" x2="254" y2="205" stroke="#319795" strokeWidth="2" opacity="0.35"/>
                <line x1="306" y1="205" x2="330" y2="210" stroke="#319795" strokeWidth="3" opacity="0.5"/>

                {/* Labels */}
                <text x="60" y="390" textAnchor="middle" fill="#666" fontSize="16" fontWeight="600">Survey</text>
                <text x="360" y="260" textAnchor="middle" fill="#666" fontSize="16" fontWeight="600">Enhanced</text>
              </svg>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
