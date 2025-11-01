import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function AIBuildingSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Building internally: coding</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="grid grid-cols-5 gap-16 items-start">
            <div className="col-span-3">
              <h2 className="text-3xl font-semibold text-pe-dark text-left mb-10">
                Modelling policy in Python
              </h2>

              <BulletList
                size="md"
                items={[
                  {
                    text: 'Claude Code and other LLMs accelerate policy rule implementation',
                    subtext: 'Natural language descriptions guide code generation',
                  },
                  {
                    text: 'Automated testing catches errors before deployment',
                  },
                  {
                    text: 'Time from policy announcement to model update: hours instead of weeks',
                    subtext: 'Example: Autumn Budget 2024 NICs changes modelled same day',
                  },
                ]}
              />
            </div>

            <div className="col-span-2">
              <svg viewBox="0 0 400 500" className="w-full h-auto">
                {/* Code editor visualization */}
                <rect x="15" y="15" width="370" height="470" fill="#1D4044" opacity="0.08" rx="12"/>
                <rect x="15" y="15" width="370" height="45" fill="#319795" opacity="0.25" rx="12"/>

                {/* Window dots */}
                <circle cx="35" cy="37" r="6" fill="#319795" opacity="0.7"/>
                <circle cx="55" cy="37" r="6" fill="#319795" opacity="0.7"/>
                <circle cx="75" cy="37" r="6" fill="#319795" opacity="0.7"/>

                {/* Code lines */}
                <rect x="40" y="85" width="160" height="9" fill="#319795" opacity="0.5" rx="3"/>
                <rect x="40" y="115" width="240" height="9" fill="#319795" opacity="0.4" rx="3"/>
                <rect x="65" y="145" width="220" height="9" fill="#1D4044" opacity="0.4" rx="3"/>
                <rect x="65" y="175" width="190" height="9" fill="#1D4044" opacity="0.4" rx="3"/>
                <rect x="40" y="205" width="140" height="9" fill="#319795" opacity="0.5" rx="3"/>

                {/* AI assistant icon */}
                <circle cx="315" cy="260" r="55" fill="#319795" opacity="0.15"/>
                <circle cx="315" cy="260" r="40" fill="#319795" opacity="0.25"/>
                <path d="M 290 260 L 315 235 L 340 260 L 315 285 Z" fill="#319795" opacity="0.9"/>

                {/* Arrow showing transformation */}
                <path d="M 180 310 Q 230 340 280 310" stroke="#319795" strokeWidth="5" fill="none" opacity="0.6" markerEnd="url(#arrowhead2)"/>
                <defs>
                  <marker id="arrowhead2" markerWidth="12" markerHeight="12" refX="6" refY="4" orient="auto">
                    <polygon points="0 0, 12 4, 0 8" fill="#319795" opacity="0.6"/>
                  </marker>
                </defs>

                {/* Output code */}
                <rect x="40" y="370" width="320" height="9" fill="#1D4044" opacity="0.6" rx="3"/>
                <rect x="40" y="400" width="290" height="9" fill="#1D4044" opacity="0.6" rx="3"/>
                <rect x="40" y="430" width="260" height="9" fill="#1D4044" opacity="0.6" rx="3"/>
              </svg>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
