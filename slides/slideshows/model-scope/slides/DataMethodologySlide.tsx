import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function DataMethodologySlide() {
  return (
    <Slide>
      <div className="w-full h-full flex flex-col">
        <SlideHeader>
<<<<<<< HEAD
          <SlideTitle className="text-4xl">PolicyEngine UK Data Methodology</SlideTitle>
        </SlideHeader>

        <div className="flex-1 px-4 py-4">
          <iframe
            src="/uk_methodology.html"
            className="w-full h-full rounded-lg shadow-2xl"
            style={{ border: '2px solid #ccc' }}
=======
          <SlideTitle>PolicyEngine UK Data Methodology</SlideTitle>
        </SlideHeader>

        <div className="flex-1 px-8 py-6 overflow-hidden">
          <iframe
            src="/uk_methodology.html"
            className="w-full h-full"
            style={{
              border: '2px solid #ccc',
              borderRadius: '8px',
              backgroundColor: 'white'
            }}
            title="PolicyEngine UK Data Methodology"
>>>>>>> 8fc1254 (scope)
          />
        </div>
      </div>
    </Slide>
  );
}
