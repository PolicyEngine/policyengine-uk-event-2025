import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function DataMethodologySlide() {
  return (
    <Slide>
      <div className="w-full h-full flex flex-col">
        <SlideHeader>
          <SlideTitle className="text-4xl">PolicyEngine UK Data Methodology</SlideTitle>
        </SlideHeader>

        <div className="flex-1 px-4 py-4">
          <iframe
            src="/uk_methodology.html"
            className="w-full h-full rounded-lg shadow-2xl"
            style={{ border: '2px solid #ccc' }}
            title="PolicyEngine UK Data Methodology"
          />
        </div>
      </div>
    </Slide>
  );
}
