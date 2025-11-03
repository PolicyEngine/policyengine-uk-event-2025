import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function GeoStackingSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Geo-stacking: universal donor households</SlideTitle>
        </SlideHeader>

        <p className="text-2xl italic text-gray-600 mb-6 text-left">
          One household, multiple geographies, optimised weights
        </p>

        <SlideContent columns={2}>
          <div>
            <h2 className="text-3xl font-semibold text-pe-dark mb-6 text-left">
              The approach
            </h2>

            {/* Visual representation of household distribution */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex flex-col items-center">
                {/* Central household */}
                <div className="bg-pe-teal text-white rounded-lg px-4 py-3 font-semibold mb-4">
                  Household #1595
                </div>

                {/* Arrows to states */}
                <div className="flex justify-between w-full mt-4 space-x-4">
                  <div className="flex-1 text-center">
                    <div className="text-pe-teal text-3xl mb-2">↙</div>
                    <div className="bg-white rounded p-3 shadow-sm">
                      <div className="font-semibold text-pe-dark">Hawaii</div>
                      <div className="text-2xl font-bold text-pe-teal">32.57</div>
                      <div className="text-sm text-gray-600">weight</div>
                    </div>
                  </div>

                  <div className="flex-1 text-center">
                    <div className="text-pe-teal text-3xl mb-2">↓</div>
                    <div className="bg-white rounded p-3 shadow-sm">
                      <div className="font-semibold text-pe-dark">California</div>
                      <div className="text-2xl font-bold text-pe-teal">6.42</div>
                      <div className="text-sm text-gray-600">weight</div>
                    </div>
                  </div>

                  <div className="flex-1 text-center">
                    <div className="text-pe-teal text-3xl mb-2">↘</div>
                    <div className="bg-white rounded p-3 shadow-sm">
                      <div className="font-semibold text-pe-dark">S. Dakota</div>
                      <div className="text-2xl font-bold text-pe-teal">0.79</div>
                      <div className="text-sm text-gray-600">weight</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Matrix sparsity visualization */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-pe-dark mb-3 text-left">
                Sparse matrix structure
              </h3>
              <div className="grid grid-cols-6 gap-1 text-xs">
                {/* Header row */}
                <div className="col-span-1"></div>
                <div className="text-center font-semibold">H1_CA</div>
                <div className="text-center font-semibold">H2_CA</div>
                <div className="text-center font-semibold">H1_TX</div>
                <div className="text-center font-semibold">H2_TX</div>
                <div className="text-center font-semibold">...</div>

                {/* National targets */}
                <div className="font-semibold text-right pr-2">National</div>
                <div className="bg-pe-teal text-white text-center rounded">✓</div>
                <div className="bg-pe-teal text-white text-center rounded">✓</div>
                <div className="bg-pe-teal text-white text-center rounded">✓</div>
                <div className="bg-pe-teal text-white text-center rounded">✓</div>
                <div className="bg-pe-teal text-white text-center rounded">✓</div>

                {/* CA targets */}
                <div className="font-semibold text-right pr-2">CA age</div>
                <div className="bg-pe-teal text-white text-center rounded">✓</div>
                <div className="bg-pe-teal text-white text-center rounded">✓</div>
                <div className="bg-gray-200 text-center rounded">-</div>
                <div className="bg-gray-200 text-center rounded">-</div>
                <div className="bg-gray-200 text-center rounded">-</div>

                {/* TX targets */}
                <div className="font-semibold text-right pr-2">TX age</div>
                <div className="bg-gray-200 text-center rounded">-</div>
                <div className="bg-gray-200 text-center rounded">-</div>
                <div className="bg-pe-teal text-white text-center rounded">✓</div>
                <div className="bg-pe-teal text-white text-center rounded">✓</div>
                <div className="bg-gray-200 text-center rounded">-</div>
              </div>
              <p className="text-sm text-gray-600 mt-3 text-left">
                99% sparsity: only relevant households contribute to each target
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-pe-dark mb-6 text-left">
              Key achievements
            </h2>

            {/* Statistics boxes */}
            <div className="space-y-4">
              <div className="bg-pe-teal bg-opacity-10 rounded-lg p-5">
                <div className="text-4xl font-bold text-pe-teal mb-2">99%</div>
                <div className="text-xl text-pe-dark font-semibold">Memory reduction</div>
                <div className="text-lg text-gray-600">23 GB → 166 MB for 51 states</div>
              </div>

              <div className="bg-pe-teal bg-opacity-10 rounded-lg p-5">
                <div className="text-4xl font-bold text-pe-teal mb-2">64,522</div>
                <div className="text-xl text-pe-dark font-semibold">Universal donor households</div>
                <div className="text-lg text-gray-600">Representing 167,089 geographic pairs</div>
              </div>

              <div className="bg-pe-teal bg-opacity-10 rounded-lg p-5">
                <div className="text-4xl font-bold text-pe-teal mb-2">2.59</div>
                <div className="text-xl text-pe-dark font-semibold">Average states per household</div>
                <div className="text-lg text-gray-600">One household active in up to 50 states</div>
              </div>
            </div>

            {/* Benefits list */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-pe-dark mb-4 text-left">
                Benefits
              </h3>
              <ul className="list-disc list-inside space-y-3 text-xl text-left">
                <li>Full household diversity in every geography</li>
                <li>Consistent microsimulation across areas</li>
                <li>Hierarchical targets: national → state → district</li>
                <li>Scalable to 436 congressional districts</li>
              </ul>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}