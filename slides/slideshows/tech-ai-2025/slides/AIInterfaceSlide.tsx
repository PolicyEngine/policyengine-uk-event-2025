import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function AIInterfaceSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Communicating research</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="grid grid-cols-5 gap-16 items-start">
            <div className="col-span-3">
              <h2 className="text-3xl font-semibold text-pe-dark text-left mb-10">
                Dashboards, calculators, and presentations
              </h2>

              <BulletList
                size="md"
                items={[
                  {
                    text: 'AI generates interactive dashboards from policy analysis',
                    subtext: 'Plotly charts, responsive layouts, publication-ready',
                  },
                  {
                    text: 'Custom calculators for specific audiences',
                    subtext: 'Benefit eligibility, tax liability tools',
                  },
                  {
                    text: 'Automated slide decks and reports',
                    subtext: 'This presentation was scaffolded with Claude Code',
                  },
                ]}
              />
            </div>

            <div className="col-span-2">
              <svg viewBox="0 0 400 500" className="w-full h-auto">
                {/* Dashboard/charts visualization */}
                <rect x="15" y="15" width="370" height="470" fill="#F5F9FF" stroke="#319795" strokeWidth="3" rx="12"/>

                {/* Header */}
                <rect x="15" y="15" width="370" height="55" fill="#319795" opacity="0.15" rx="12"/>
                <text x="200" y="50" textAnchor="middle" fill="#1D4044" fontSize="22" fontWeight="bold">Dashboard</text>

                {/* Chart 1 - Bar chart */}
                <g transform="translate(40, 100)">
                  <rect x="0" y="80" width="35" height="60" fill="#319795" opacity="0.7" rx="3"/>
                  <rect x="50" y="55" width="35" height="85" fill="#319795" opacity="0.7" rx="3"/>
                  <rect x="100" y="65" width="35" height="75" fill="#319795" opacity="0.7" rx="3"/>
                  <rect x="150" y="40" width="35" height="100" fill="#319795" opacity="0.7" rx="3"/>
                  <line x1="0" y1="145" x2="190" y2="145" stroke="#666" strokeWidth="2"/>
                </g>

                {/* Chart 2 - Line chart */}
                <g transform="translate(40, 310)">
                  <polyline points="0,85 40,55 80,63 120,35 160,50" fill="none" stroke="#1D4044" strokeWidth="4" opacity="0.7"/>
                  <circle cx="0" cy="85" r="6" fill="#1D4044"/>
                  <circle cx="40" cy="55" r="6" fill="#1D4044"/>
                  <circle cx="80" cy="63" r="6" fill="#1D4044"/>
                  <circle cx="120" cy="35" r="6" fill="#1D4044"/>
                  <circle cx="160" cy="50" r="6" fill="#1D4044"/>
                  <line x1="0" y1="92" x2="160" y2="92" stroke="#666" strokeWidth="2"/>
                </g>

                {/* Small metrics boxes */}
                <rect x="250" y="100" width="120" height="70" fill="#319795" opacity="0.15" rx="6"/>
                <text x="310" y="135" textAnchor="middle" fill="#1D4044" fontSize="28" fontWeight="bold">£2.5B</text>
                <text x="310" y="155" textAnchor="middle" fill="#666" fontSize="14">Impact</text>

                <rect x="250" y="190" width="120" height="70" fill="#1D4044" opacity="0.15" rx="6"/>
                <text x="310" y="225" textAnchor="middle" fill="#1D4044" fontSize="28" fontWeight="bold">15%</text>
                <text x="310" y="245" textAnchor="middle" fill="#666" fontSize="14">Reduction</text>
              </svg>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
