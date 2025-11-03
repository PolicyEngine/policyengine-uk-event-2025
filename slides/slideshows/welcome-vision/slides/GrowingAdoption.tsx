import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function GrowingAdoption() {
  const organizations = [
    { name: 'Green Party', logo: '/logos/organizations/gpew.png' },
    { name: 'Centre for Policy Studies', logo: '/logos/organizations/cps.png' },
    { name: 'NIESR', logo: '/logos/organizations/niesr.jpeg' },
    { name: 'Institute of Economic Affairs', logo: '/logos/organizations/iea.svg' },
    { name: 'Social Market Foundation', logo: '/logos/organizations/smf.png' },
    { name: 'Liberal Democrats', logo: '/logos/organizations/liberal-party.jpeg' },
    { name: 'UBI Lab Network', logo: '/logos/organizations/ubilabs.png' },
    { name: 'UK in a Changing Europe', logo: '/logos/organizations/ukeu.svg' },
    { name: 'UN Digital Public Good', logo: '/logos/organizations/dpga.png', isUN: true },
  ];

  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>2023-2024: Growing adoption</SlideTitle>
        </SlideHeader>

        <div className="mt-4">
          <div className="grid grid-cols-4 gap-3">
            {organizations.map((org, idx) => (
              <div
                key={idx}
                className={`
                  rounded-lg p-3 border flex items-center justify-center border-pe-teal/30 bg-white
                  ${org.isUN ? 'col-span-4 bg-blue-50' : ''}
                `}
                style={{
                  height: org.isUN ? '60px' : '55px'
                }}
              >
                <Image
                  src={assetPath(org.logo)}
                  alt={org.name}
                  width={org.isUN ? 200 : 120}
                  height={org.isUN ? 45 : 35}
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
