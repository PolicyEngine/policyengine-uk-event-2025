import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function NaturalLanguageSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Augmenting software: natural language interfaces</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-10 text-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-pe-dark">PolicyEngine App v2</h3>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="bg-pe-teal text-white px-6 py-4 rounded-t-lg">
                    <h4 className="text-2xl font-bold">LLM extraction</h4>
                  </div>
                  <div className="bg-pe-teal/10 px-6 py-6 rounded-b-lg">
                    <p className="text-xl text-gray-700">
                      Extract relevant insights from our database based on natural language queries
                    </p>
                  </div>
                </div>

                <div>
                  <div className="bg-pe-dark text-white px-6 py-4 rounded-t-lg">
                    <h4 className="text-2xl font-bold">Flexible visualizations</h4>
                  </div>
                  <div className="bg-pe-dark/10 px-6 py-6 rounded-b-lg">
                    <p className="text-xl text-gray-700">
                      Present insights in adaptive charts on extensible report canvas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <p className="text-2xl font-semibold text-gray-800">
                Nikhil will demonstrate these capabilities
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
