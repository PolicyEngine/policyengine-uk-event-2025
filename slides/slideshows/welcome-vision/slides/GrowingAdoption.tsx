import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function GrowingAdoption() {
  const organisations = [
    { name: 'Green Party', logo: '/logos/organizations/gpew.png' },
    { name: 'Centre for Policy Studies', logo: '/logos/organizations/cps.png' },
    { name: 'NIESR', logo: '/logos/organizations/niesr.jpeg' },
    { name: 'Institute of Economic Affairs', logo: '/logos/organizations/iea.png' },
    { name: 'Social Market Foundation', logo: '/logos/organizations/smf.png' },
    { name: 'Liberal Democrats', logo: '/logos/organizations/liberal-party.jpeg' },
    { name: 'UBI Lab Network', logo: '/logos/organizations/ubilabs.png' },
    { name: 'UK in a Changing Europe', logo: '/logos/organizations/ukeu.svg' },
    { name: 'UN Digital Public Good', logo: '/logos/organizations/dpga.png', isUN: true },
  ];

  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>2023-2024: Growing adoption</SlideTitle>
      </SlideHeader>

      <div className="w-full mt-8">
        <div className="grid grid-cols-3 gap-x-12 gap-y-24 w-full">
          {organisations.map((org, idx) => (
            <div
              key={idx}
              className={`
                flex items-center justify-center
                ${org.isUN ? 'col-span-3' : ''}
              `}
              style={{
                height: org.isUN ? '60px' : '60px'
              }}
            >
              <Image
                src={assetPath(org.logo)}
                alt={org.name}
                width={org.isUN ? 280 : 120}
                height={org.isUN ? 50 : 50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
