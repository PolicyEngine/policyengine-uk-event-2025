import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function OBBBADashboard() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Interactive OBBBA household explorer</SlideTitle>
        </SlideHeader>

        <SlideContent size="sm">
          <div className="space-y-6">
            <div className="relative w-full h-96">
              <Image
                src={assetPath("/images/posts/obbba-household-by-household.png")}
                alt="OBBBA Household Explorer dashboard"
                fill
                className="object-contain"
              />
            </div>

            <div className="text-left space-y-4">
              <p className="text-2xl font-semibold text-pe-teal">
                Waterfall charts show net impact for each representative household
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Dashboard capabilities</h3>
                  <ul className="list-disc list-inside space-y-1 text-lg">
                    <li>Filter by household characteristics</li>
                    <li>Sort by impact magnitude</li>
                    <li>Explore winners and losers</li>
                    <li>Download household-level data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Example households</h3>
                  <ul className="list-disc list-inside space-y-1 text-lg">
                    <li>Montana couple (#66994)</li>
                    <li>Georgia couple (#43826)</li>
                    <li>40,000+ more households</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
