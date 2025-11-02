import React from 'react';
import Slide from '@/components/Slide';
import SlideLayout from '@/components/SlideLayout';
import BulletList from '@/components/BulletList';

export default function WelcomeSlide() {
  return (
    <Slide>
      <SlideLayout title="Welcome and vision">
        <BulletList
          size="md"
          items={[
            {
              text: 'PolicyEngine is a non-profit providing free, open-source microsimulation tools that make tax and benefit policy analysis accessible to policymakers, researchers, journalists, and citizens.'
            },
            {
              text: 'PolicyEngine UK is the UK\'s only open-source tax-benefit microsimulation model, built on the OpenFisca framework, combining a web interface with an engine processing millions of policy reforms in real-time.'
            }
          ]}
        />
      </SlideLayout>
    </Slide>
  );
}
