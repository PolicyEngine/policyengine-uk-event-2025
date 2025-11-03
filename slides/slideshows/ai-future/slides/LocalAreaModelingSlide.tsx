import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function LocalAreaModellingSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Improving models: local area modelling</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-8 text-left">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-pe-teal mb-6">Continuing US work</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Refining our enhanced calibration methods for more accurate
                  local area estimates in the United States
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-pe-teal mb-6">Bringing to UK</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Transferring enhanced methods from US to UK for parliamentary
                  constituency and local authority analysis
                </p>
              </div>
            </div>

            <div className="bg-pe-teal/10 rounded-xl p-8 border-l-4 border-pe-teal">
              <p className="text-2xl font-semibold text-pe-dark mb-3">
                Open-source tools
              </p>
              <p className="text-xl text-gray-700">
                Helping others use microcalibrate and microimpute for their own microsimulation work
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
