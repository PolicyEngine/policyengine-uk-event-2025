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

        <SlideContent size="md">
          {/* Visual representation of household distribution */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold text-pe-dark mb-6 text-left">
              Universal donor households
            </h2>
            <div className="flex flex-col items-center">
              {/* Central household */}
              <div className="bg-pe-teal text-white rounded-lg px-6 py-4 font-semibold text-2xl mb-6">
                Household #1595
              </div>

              {/* Arrows to states */}
              <div className="flex justify-center w-full mt-6 space-x-8">
                <div className="flex-1 max-w-xs text-center">
                  <div className="text-pe-teal text-5xl mb-3">↙</div>
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <div className="font-semibold text-pe-dark text-2xl">Hawaii</div>
                    <div className="text-4xl font-bold text-pe-teal my-2">32.57</div>
                    <div className="text-lg text-gray-600">weight</div>
                  </div>
                </div>

                <div className="flex-1 max-w-xs text-center">
                  <div className="text-pe-teal text-5xl mb-3">↓</div>
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <div className="font-semibold text-pe-dark text-2xl">California</div>
                    <div className="text-4xl font-bold text-pe-teal my-2">6.42</div>
                    <div className="text-lg text-gray-600">weight</div>
                  </div>
                </div>

                <div className="flex-1 max-w-xs text-center">
                  <div className="text-pe-teal text-5xl mb-3">↘</div>
                  <div className="bg-white rounded-lg p-5 shadow-md">
                    <div className="font-semibold text-pe-dark text-2xl">S. Dakota</div>
                    <div className="text-4xl font-bold text-pe-teal my-2">0.79</div>
                    <div className="text-lg text-gray-600">weight</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Matrix sparsity visualisation */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-pe-dark mb-6 text-left">
              Sparse matrix structure
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left pr-4"></th>
                    <th className="text-center font-semibold px-3 text-lg">H1_CA</th>
                    <th className="text-center font-semibold px-3 text-lg">H2_CA</th>
                    <th className="text-center font-semibold px-3 text-lg">H3_CA</th>
                    <th className="text-center font-semibold px-3 text-lg">H1_TX</th>
                    <th className="text-center font-semibold px-3 text-lg">H2_TX</th>
                    <th className="text-center font-semibold px-3 text-lg">H3_TX</th>
                  </tr>
                </thead>
                <tbody>

                  {/* National employment */}
                  <tr>
                    <td className="font-semibold text-right pr-4 py-1 text-base">national_employment</td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                  </tr>

                  {/* National tax revenue */}
                  <tr>
                    <td className="font-semibold text-right pr-4 py-1 text-base">national_tax_revenue</td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                  </tr>

                  {/* CA age 0-5 */}
                  <tr>
                    <td className="font-semibold text-right pr-4 py-1 text-base">CA_age_0_5</td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                  </tr>

                  {/* CA age 5-10 */}
                  <tr>
                    <td className="font-semibold text-right pr-4 py-1 text-base">CA_age_5_10</td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                  </tr>

                  {/* CA age 10-15 */}
                  <tr>
                    <td className="font-semibold text-right pr-4 py-1 text-base">CA_age_10_15</td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                  </tr>

                  {/* TX age 0-5 */}
                  <tr>
                    <td className="font-semibold text-right pr-4 py-1 text-base">TX_age_0_5</td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                  </tr>

                  {/* TX age 5-10 */}
                  <tr>
                    <td className="font-semibold text-right pr-4 py-1 text-base">TX_age_5_10</td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                  </tr>

                  {/* TX age 10-15 */}
                  <tr>
                    <td className="font-semibold text-right pr-4 py-1 text-base">TX_age_10_15</td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-gray-300 text-gray-600 text-center rounded py-2 font-bold">0</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                    <td className="px-2 py-1"><div className="bg-pe-teal text-white text-center rounded py-2 font-bold">X</div></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-6">
              <div className="space-y-3 text-xl text-left">
                <div className="flex items-start">
                  <span className="text-pe-teal font-bold text-2xl mr-4">•</span>
                  <span><strong>X</strong> = household contributes to target</span>
                </div>
                <div className="flex items-start">
                  <span className="text-pe-teal font-bold text-2xl mr-4">•</span>
                  <span><strong>0</strong> = household doesn't contribute</span>
                </div>
              </div>
              <div className="space-y-3 text-xl text-left">
                <div className="flex items-start">
                  <span className="text-pe-teal font-bold text-2xl mr-4">•</span>
                  <span>99% sparsity (23 GB → 166 MB)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-pe-teal font-bold text-2xl mr-4">•</span>
                  <span>Scales to 436 congressional districts</span>
                </div>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}