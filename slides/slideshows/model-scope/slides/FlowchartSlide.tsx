import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function FlowchartSlide() {
  return (
    <Slide>
      <div className="w-full h-full flex flex-col">
        <SlideHeader>
          <SlideTitle>And build tools to show interactions</SlideTitle>
        </SlideHeader>

        <div className="flex-1 px-4 pb-4">
          <iframe
            src="https://policyengine.github.io/flowchart/?variable=universal_childcare_entitlement&country=UK"
            className="w-full h-full rounded-lg shadow-lg"
            style={{ border: '1px solid #ccc' }}
            title="Universal Childcare Entitlement Flowchart"
          />
        </div>
      </div>
    </Slide>
  );
}
