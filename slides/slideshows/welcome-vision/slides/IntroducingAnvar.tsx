import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function IntroducingAnvar() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>The turning point</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-8 text-left">
            <p className="text-3xl font-semibold text-pe-dark">
              December 2024: Nuffield Foundation steps forward
            </p>

            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl border-2 border-gray-300">
              <Image
                src={assetPath("/images/nuffield-policyengine-grant.png")}
                alt="Nuffield Foundation grant page for PolicyEngine"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="space-y-6">
              <p className="text-2xl">
                The Nuffield Foundation recognised PolicyEngine's potential to transform
                evidence-based policymaking in the UK.
              </p>

              <p className="text-2xl">
                Their support enabled us to build the infrastructure that UK policy
                analysis desperately needed.
              </p>

              <p className="text-2xl font-medium text-pe-teal">
                Our first major UK grant — a transformative moment for PolicyEngine.
              </p>
            </div>

            <div className="mt-12 p-8 bg-pe-teal/10 rounded-lg border-l-4 border-pe-teal">
              <p className="text-2xl font-medium text-pe-dark">
                I'd now like to invite Anvar Sarygulov from the Nuffield Foundation
                to share why they believed in this vision...
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}