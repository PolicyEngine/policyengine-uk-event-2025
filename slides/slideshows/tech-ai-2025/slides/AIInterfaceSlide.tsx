import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function AIInterfaceSlide() {
  return (
    <Slide>
      <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
        <SlideHeader>
          <SlideTitle>Communicating research</SlideTitle>
        </SlideHeader>

        <div className="mt-16">
          <h2 className="text-4xl font-semibold text-pe-dark text-left mb-12">
            Dashboards, calculators, and presentations
          </h2>

          <BulletList
            size="lg"
            items={[
              {
                text: 'AI generates interactive dashboards from policy analysis',
                subtext: 'Plotly charts, responsive layouts, publication-ready',
              },
              {
                text: 'Custom calculators for specific audiences',
                subtext: 'Benefit eligibility, tax liability tools',
              },
              {
                text: 'Automated slide decks and reports',
                subtext: 'This presentation was scaffolded with Claude Code',
              },
            ]}
          />
        </div>
      </div>
    </Slide>
  );
}
