import React from 'react';
import Slide from '@/components/Slide';
import SlideHeader from '@/components/SlideHeader';
import SlideTitle from '@/components/SlideTitle';

export default function InnovationsSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>PolicyEngine innovates on ingredients</SlideTitle>
        </SlideHeader>

        <div className="mt-8">
          {/* Three column headers */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-[#6B9B9B] text-white text-center py-4 rounded-lg">
              <h2 className="text-3xl font-bold">Rules</h2>
            </div>
            <div className="bg-[#5A8A8A] text-white text-center py-4 rounded-lg">
              <h2 className="text-3xl font-bold">Dynamics</h2>
            </div>
            <div className="bg-[#4A7979] text-white text-center py-4 rounded-lg">
              <h2 className="text-3xl font-bold">Data</h2>
            </div>
          </div>

          {/* Content columns */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Rules column */}
            <div className="text-left">
              <ul className="space-y-3 text-[#4A7979] text-xl">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Income tax & NI</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Universal Credit & other benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>VAT & stamp duties</span>
                </li>
              </ul>
            </div>

            {/* Dynamics column */}
            <div className="text-left">
              <ul className="space-y-3 text-[#4A7979] text-xl">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Labour supply & capital gains elasticities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Pass-through of employer NI & land & carbon taxes</span>
                </li>
              </ul>
            </div>

            {/* Data column */}
            <div className="text-left">
              <ul className="space-y-3 text-[#4A7979] text-xl">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>FRS foundation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Integrates SPI, LCFS, & WAS</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Calibrates to UK, constituencies, & local authorities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>OBR-based ageing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom three sections */}
          <div className="grid grid-cols-3 gap-6 mt-12 bg-[#E8F4F8] py-6 px-4 rounded-lg">
            <div className="text-center">
              <p className="text-lg italic text-[#2C5F6F]">
                Legislative references &<br />thousands of unit tests
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg italic text-[#2C5F6F]">
                Adjustable parameters<br />with US CBO presets
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg italic text-[#2C5F6F]">
                Machine learning (QRF +<br />GD) boosts accuracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
