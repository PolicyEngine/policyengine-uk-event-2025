import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';

export default function TimelineSlide() {
  const milestones = [
    { year: '2020', event: 'UBI Center builds UK microsimulation models' },
    { year: '2021', month: 'Sep', event: 'Launch PolicyEngine within UBI Center' },
    { year: '2021', month: 'Oct', event: 'Create independent nonprofit for open-source microsimulation' },
    { year: '2022', month: 'Mar', event: 'Expand to US' },
    { year: '2022-23', event: 'Build world-class economic simulation: rigorous rule encoding + representative datasets' },
    { year: '2023', month: 'Jan', event: 'Open surfaces: Python package, web app, AI summarisation' },
    { year: '2023', event: 'UN recognises PolicyEngine as digital public good' },
    { year: '2024', event: 'Users: Green Party, CPS, NIESR, IEA, SMF, Lib Dems, UBI Lab Network, UK in a Changing Europe' },
    { year: '2024', month: 'Spring', event: 'AI-powered explanations launch' },
    { year: '2024', month: 'Sep', event: 'Nuffield Foundation: childcare, public services, local datasets, validation, AI design' },
    { year: '2025', month: 'Mar', event: 'HM Treasury pilots PolicyEngine UK' },
  ];

  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>PolicyEngine journey</SlideTitle>
        </SlideHeader>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-pe-teal/30" />

          {/* Milestones */}
          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex items-start gap-6 relative">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-pe-teal border-4 border-white shadow-lg z-10" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-lg shadow-md p-5 border-l-4 border-pe-teal">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl font-bold text-pe-dark">{milestone.year}</span>
                    {milestone.month && (
                      <span className="text-lg font-semibold text-pe-teal">{milestone.month}</span>
                    )}
                  </div>
                  <p className="text-xl text-gray-700 text-left">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
