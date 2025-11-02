import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function OBBBAIntro() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>The One Big Beautiful Bill Act</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-8 text-left">
            <div className="bg-pe-teal/10 rounded-xl p-8 border-l-4 border-pe-teal">
              <p className="text-2xl font-semibold text-pe-dark mb-3">
                Signed: 4 July 2025
              </p>
              <p className="text-xl text-gray-700">
                Major tax and benefit legislation affecting individual households
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-pe-teal mb-4">Tax changes</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <li>Extends TCJA provisions</li>
                  <li>Increases standard deduction</li>
                  <li>Raises the CTC</li>
                  <li>Expands child and dependent care credit</li>
                  <li>Exempts tip and overtime income</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pe-teal mb-4">Benefit reforms</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <li>Adds work requirements for SNAP and Medicaid</li>
                  <li>Restricts immigrants from receiving CTC, SNAP, Medicaid, and ACA subsidies</li>
                  <li>Audits EITC claims</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pe-teal mb-4">Other provisions</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                  <li>Introduces senior deduction</li>
                  <li>Reforms SALT cap, alternative minimum tax, itemized deductions</li>
                  <li>Downstream state tax impacts</li>
                  <li>...and more</li>
                </ul>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
