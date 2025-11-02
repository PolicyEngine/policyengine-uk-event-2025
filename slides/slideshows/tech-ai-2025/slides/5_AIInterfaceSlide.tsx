import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import SlideSubtitle from '@/components/SlideSubtitle';
import BulletList from '@/components/BulletList';

export default function AIInterfaceSlide() {
  return (
    <Slide>
      <div className="">
        <SlideHeader>
          <SlideTitle>Communicating externally</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <SlideSubtitle>
            Dashboards, apps, and presentations
          </SlideSubtitle>

          <BulletList
            size="lg"
            items={[
              {
                text: 'AI-powered explanations (March 2024)',
                subtext: 'GPT-4 translates complex tax calculations into plain English',
              },
              {
                text: 'Conversational policy interface (October 2024)',
                subtext: 'Natural language queries about household impacts and policy reforms',
              },
              {
                text: 'Interactive policy visualisations',
                subtext: 'Even basic levels of interactivity improve cut-through',
              },
              {
                text: 'Custom calculators and apps',
                subtext: 'Benefit eligibility tools, tax liability calculators',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
