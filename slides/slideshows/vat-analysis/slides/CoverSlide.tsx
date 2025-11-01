import React from 'react';
import Slide from '@/components/Slide';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col justify-center space-y-16 max-w-none w-full px-16">
        <h1 className="text-5xl font-bold text-white mb-10 leading-tight text-left whitespace-nowrap overflow-visible">
          VAT analysis with synthetic firm microdata
        </h1>

        <div className="text-3xl text-white space-y-3 text-left">
          <p className="font-medium">Vahid Ahmadi</p>
          <p>Research Associate at PolicyEngine</p>
        </div>
      </div>
    </Slide>
  );
}
