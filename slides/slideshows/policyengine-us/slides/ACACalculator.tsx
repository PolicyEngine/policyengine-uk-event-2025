import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function ACACalculator() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>ACA-Calc showing premium tax credit scenarios</SlideTitle>
        </SlideHeader>

        <SlideContent size="sm">
          <div className="space-y-6">
            <div className="relative w-full h-80">
              <Image
                src={assetPath("/images/posts/aca-calc-chart.png")}
                alt="ACA Calculator showing premium tax credits"
                fill
                className="object-contain"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 text-left">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-pe-teal">Enhanced subsidies (through 2025)</h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Lower income cap removed</li>
                  <li>Larger subsidies across income spectrum</li>
                  <li>Improved affordability for middle-income households</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-pe-teal">Calculator features</h3>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Compare enhanced vs original schedule</li>
                  <li>County-specific benchmark premiums</li>
                  <li>Household-level impact estimates</li>
                  <li>Scenario comparison tools</li>
                </ul>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
