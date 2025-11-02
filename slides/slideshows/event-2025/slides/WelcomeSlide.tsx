import React from 'react';
import Slide from '@/components/Slide';
import SlideLayout from '@/components/SlideLayout';
import SlideContent from '@/components/SlideContent';

export default function WelcomeSlide() {
  return (
    <Slide>
      <SlideLayout title="Welcome and vision">
        <div>
          <p className="text-xl italic text-gray-600 mb-8 text-center">
            Speaker: Max Ghenis
          </p>

          <SlideContent size="md">
            <p>
              PolicyEngine is a non-profit providing free, open-source microsimulation
              tools that make tax and benefit policy analysis accessible to policymakers,
              researchers, journalists, and citizens.
            </p>

            <p>
              PolicyEngine UK is the UK's only open-source tax-benefit microsimulation
              model, built on the OpenFisca framework, combining a web interface with
              an engine processing millions of policy reforms in real-time.
            </p>
          </SlideContent>
        </div>
      </SlideLayout>
    </Slide>
  );
}
