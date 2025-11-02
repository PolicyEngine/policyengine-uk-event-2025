import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';

export default function RecognisingOpportunity() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>October 2021: Recognising the opportunity</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <div className="space-y-8 text-left">
            <p className="text-3xl font-semibold text-pe-dark">
              A bigger vision emerged
            </p>

            <ul className="list-disc list-inside space-y-4">
              <li>Realised the potential to build infrastructure for the entire economic policy research community</li>
              <li>Spun off as independent nonprofit to focus entirely on this mission</li>
              <li>Vision: Democratise access to policy analysis tools</li>
              <li>Make microsimulation available to everyone, not just well-funded institutions</li>
            </ul>

            <div className="mt-12 p-6 bg-pe-teal/10 rounded-lg border-l-4 border-pe-teal">
              <p className="text-2xl font-medium text-pe-dark">
                Mission: Build the infrastructure that enables evidence-based policy discourse
              </p>
            </div>
          </div>
        </SlideContent>
      </div>
    </Slide>
  );
}