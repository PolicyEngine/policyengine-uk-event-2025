import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function ElectionCalculatorDemo() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>2024 Election Calculator in action</SlideTitle>
        </SlideHeader>

        <SlideContent size="sm">
          <div className="space-y-6">
            <div className="relative w-full h-96">
              <Image
                src={assetPath("/images/posts/introducing-2024-election-calculator.png")}
                alt="2024 Election Calculator interface"
                fill
                className="object-contain"
              />
            </div>

            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-2xl font-bold text-pe-teal mb-3">Example households analyzed</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Minnesota family with children</li>
                  <li>Florida semi-retired couple</li>
                  <li>NYC professional family</li>
                  <li>California high-net-worth individual</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-pe-teal mb-3">Key features</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Instant household-specific estimates</li>
                  <li>Side-by-side policy comparison</li>
                  <li>Comprehensive tax and benefit modelling</li>
                  <li>50-state coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
