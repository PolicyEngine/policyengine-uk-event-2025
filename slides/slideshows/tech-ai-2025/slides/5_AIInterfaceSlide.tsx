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
      <div className="max-w-7xl">
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
                text: 'Interactive policy dashboards',
                subtext: 'AI-generated Plotly charts and responsive layouts',
              },
              {
                text: 'Custom calculators and apps',
                subtext: 'Benefit eligibility tools, tax liability calculators',
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
