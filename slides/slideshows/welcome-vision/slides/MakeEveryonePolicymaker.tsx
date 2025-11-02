import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function MakeEveryonePolicymaker() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Oct 2021: We launch PolicyEngine independently</SlideTitle>
        </SlideHeader>

        <div className="mt-8 flex justify-center items-center" style={{ height: 'calc(100vh - 280px)' }}>
          <Image
            src={assetPath("/timeline/make-everyone-policymaker.png")}
            alt="Make Everyone a Policymaker"
            width={1200}
            height={800}
            className="max-w-full max-h-full w-auto h-auto object-contain"
          />
        </div>
      </div>
    </Slide>
  );
}
