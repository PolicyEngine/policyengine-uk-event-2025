import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function GrowingAdoption() {
  const organisations = [
    { name: 'Green Party', logo: '/logos/organisations/gpew.png' },
    { name: 'Centre for Policy Studies', logo: '/logos/organisations/cps.png' },
    { name: 'NIESR', logo: '/logos/organisations/niesr.jpeg' },
    { name: 'Institute of Economic Affairs', logo: '/logos/organisations/iea.svg' },
    { name: 'Social Market Foundation', logo: '/logos/organisations/smf.png' },
    { name: 'Liberal Democrats', logo: '/logos/organisations/liberal-party.jpeg' },
    { name: 'UBI Lab Network', logo: '/logos/organisations/ubilabs.png' },
    { name: 'UK in a Changing Europe', logo: '/logos/organisations/ukeu.svg' },
    { name: 'UN Digital Public Good', logo: '/logos/organisations/dpga.png', isUN: true },
  ];

  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>2023-2024: Growing adoption</SlideTitle>
        </SlideHeader>

        <div className="mt-4">
          <div className="grid grid-cols-3 gap-2">
            {organisations.map((org, idx) => (
              <div
                key={idx}
                className={`
                  rounded p-2 border flex items-center justify-center border-pe-teal/30 bg-white
                  ${org.isUN ? 'col-span-3 bg-blue-50' : ''}
                `}
                style={{
                  height: org.isUN ? '50px' : '45px'
                }}
              >
                <Image
                  src={assetPath(org.logo)}
                  alt={org.name}
                  width={org.isUN ? 200 : 100}
                  height={org.isUN ? 40 : 30}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
