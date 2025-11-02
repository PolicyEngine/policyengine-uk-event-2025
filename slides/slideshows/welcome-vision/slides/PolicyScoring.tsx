import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function PolicyScoring() {
  const analyses = [
    { date: 'Oct 2021', policy: 'Autumn Budget Universal Credit reforms' },
    { date: 'Dec 2021', policy: 'Income Tax cuts under consideration' },
    { date: 'May 2022', policy: 'Cost of Living Support package' },
    { date: 'Aug 2022', policy: 'Basic rate cut to 16%' },
    { date: 'Sep 2022', policy: 'Growth Plan 2022 tax cuts' },
    { date: 'Sep 2022', policy: 'Energy Price Guarantee' },
  ];

  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>2021-2022: Demonstrating utility through policy scoring</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-8 text-left">
            <p className="text-2xl text-gray-700">
              While building infrastructure to empower others, PolicyEngine scored policies to demonstrate model utility and contribute to evidence base
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {analyses.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 border-l-4 border-pe-teal shadow-md"
                >
                  <div className="text-base font-semibold text-pe-teal mb-2">{item.date}</div>
                  <div className="text-xl text-gray-800">{item.policy}</div>
                </div>
              ))}
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
