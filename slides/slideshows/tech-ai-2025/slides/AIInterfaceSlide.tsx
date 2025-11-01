import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';

export default function AIInterfaceSlide() {
  return (
    <Slide>
      <div className="max-w-7xl">
        <SlideHeader>
          <SlideTitle>Communicating research</SlideTitle>
        </SlideHeader>

        <SlideContent size="md">
          <h2 className="text-3xl font-semibold text-pe-dark text-left mb-10">
            Dashboards, calculators, and presentations
          </h2>

          <BulletList
            size="md"
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
        </SlideContent>
      </div>
    </Slide>
  );
}
