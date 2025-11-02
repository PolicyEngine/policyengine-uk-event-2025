import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function ACAShutdown() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>ACA subsidies at risk in shutdown fight</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-6 text-left">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl border-2 border-gray-300">
              <Image
                src={assetPath("/images/aca-shutdown-news.png")}
                alt="PBS News article on health care subsidies shutdown fight"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-semibold text-pe-dark">
                Enhanced ACA subsidies set to expire without Congressional action
              </p>

              <p className="text-xl text-gray-700">
                Millions of Americans face potential loss of affordable health coverage
                as enhanced premium tax credits hang in the balance.
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
