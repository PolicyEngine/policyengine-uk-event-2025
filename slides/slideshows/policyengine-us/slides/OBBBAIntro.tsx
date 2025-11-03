import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function OBBBAIntro() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Trump signed One Big Beautiful Bill Act in July</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <div className="space-y-8 text-left">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-pe-teal mb-6">Tax changes</h3>
                <ul className="list-disc list-inside space-y-3 text-xl text-gray-700">
                  <li>Extends 2017 tax cuts</li>
                  <li>Increases standard deduction</li>
                  <li>Raises the Child Tax Credit</li>
                  <li>Expands child and dependent care credit</li>
                  <li>Exempts tip and overtime income</li>
                  <li>Introduces senior deduction</li>
                  <li>Reforms state and local tax deduction cap</li>
                  <li>Modifies alternative minimum tax</li>
                  <li>Changes itemized deductions</li>
                  <li>Downstream state tax impacts</li>
                </ul>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-pe-teal mb-6">Benefit changes</h3>
                <ul className="list-disc list-inside space-y-3 text-xl text-gray-700">
                  <li>Adds work requirements for food stamps and Medicaid</li>
                  <li>Restricts immigrant eligibility for Child Tax Credit, food stamps, Medicaid, and Affordable Care Act subsidies</li>
                  <li>Increases Earned Income Tax Credit audits</li>
                </ul>
              </div>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}
