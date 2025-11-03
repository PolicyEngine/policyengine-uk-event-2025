'use client';

import React, { useState, useEffect } from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function GrowingAdoption() {
  const organizations = [
    { name: 'Green Party', logo: '/logos/organizations/gpew.png', height: 60 },
    { name: 'Centre for Policy Studies', logo: '/logos/organizations/cps.png', height: 50 },
    { name: 'NIESR', logo: '/logos/organizations/niesr.jpeg', height: 50 },
    { name: 'Institute of Economic Affairs', logo: '/logos/organizations/iea.svg', height: 50 },
    { name: 'Social Market Foundation', logo: '/logos/organizations/smf.png', height: 50 },
    { name: 'Liberal Democrats', logo: '/logos/organizations/liberal-party.jpeg', height: 60 },
    { name: 'UBI Lab Network', logo: '/logos/organizations/ubilabs.png', height: 50 },
    { name: 'UK in a Changing Europe', logo: '/logos/organizations/ukeu.svg', height: 50 },
    { name: 'UN Digital Public Good', logo: '/logos/organizations/dpga.png', height: 80, isUN: true },
  ];

  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>2023-2024: Growing adoption</SlideTitle>
        </SlideHeader>

        <div className="mt-12">
          <div className="grid grid-cols-3 gap-8">
            {organizations.map((org, idx) => (
              <div
                key={idx}
                className={`
                  rounded-xl p-8 border-2 flex items-center justify-center border-pe-teal bg-white shadow-lg
                  ${org.isUN ? 'col-span-3 bg-gradient-to-r from-blue-50 to-purple-50' : ''}
                `}
                style={{
                  minHeight: org.isUN ? '140px' : '120px'
                }}
              >
                <Image
                  src={assetPath(org.logo)}
                  alt={org.name}
                  width={org.isUN ? 300 : 200}
                  height={org.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </Slide>
  );
}
