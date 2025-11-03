import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function OBBBADashboard() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>We show representative household impacts</SlideTitle>
        </SlideHeader>

        <div className="mt-8 flex flex-col items-center">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={assetPath("/images/posts/obbba-household-by-household.png")}
              alt="OBBBA Household by Household tool"
              fill
              className="object-cover"
            />
          </div>
          <a
            href="https://policyengine.org/us/obbba-household-by-household"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-2xl text-pe-teal hover:text-pe-dark transition-colors"
          >
            policyengine.org/us/obbba-household-by-household
          </a>
        </div>
      </div>
    </Slide>
  );
}
