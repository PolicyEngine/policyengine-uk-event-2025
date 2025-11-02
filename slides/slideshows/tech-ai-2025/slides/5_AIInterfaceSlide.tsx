import React from 'react';
import Slide from '@/components/Slide';
import SlideLayout from '@/components/SlideLayout';
import SlideSubtitle from '@/components/SlideSubtitle';
import BulletList from '@/components/BulletList';

export default function AIInterfaceSlide() {
  return (
    <Slide>
      <SlideLayout title="Communicating externally">
        <div>
          <SlideSubtitle>
            Dashboards, apps, and presentations
          </SlideSubtitle>

          <BulletList
            size="lg"
            items={[
              {
                text: 'Interactive policy visualisations',
                subtext: 'Even basic levels of interactivity improve cut-through',
              },
              {
                text: 'Custom calculators and apps',
                subtext: 'Benefit eligibility tools, tax liability calculators',
              },
              {
                text: 'Automated slide decks and reports',
                subtext: 'This presentation itself was scaffolded with Claude Code. I spent the time saved doing more fun things, like tax-benefit policy modelling.',
              },
            ]}
          />
        </div>
      </SlideLayout>
    </Slide>
  );
}
