import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function DataFormatSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Data format for local area modelling</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-6 text-left">
            <div>
              <h2 className="text-3xl font-semibold text-pe-dark mb-4">UK approach: reweighting</h2>
              <ul className="list-disc list-inside space-y-3 text-xl">
                <li>Produced a weight file of 650,100k weights (100k households × 650 constituencies)</li>
                <li>Each household in the Enhanced FRS has a weight for each constituency</li>
                <li>Allows flexible analysis across all areas using the same base dataset</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-pe-dark mb-4">US approach: L0 optimised sampling</h2>
              <ul className="list-disc list-inside space-y-3 text-xl">
                <li>Create small, targeted datasets for each local area</li>
                <li>L0 regularisation selects the most representative records</li>
                <li>Improves efficiency by reducing dataset size</li>
                <li>Improves accuracy by allowing local records to truly represent local policy outcomes</li>
              </ul>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
