import React from 'react';
import Slide from '@/components/Slide';
import SlideTitle from '@/components/SlideTitle';
import SlideHeader from '@/components/SlideHeader';
import SlideContent from '@/components/SlideContent';
import BulletList from '@/components/BulletList';
import SlideSubtitle from '@/components/SlideSubtitle';

export default function AIUsesSlide() {
  return (
    <Slide>
      <div>
        <SlideHeader>
          <SlideTitle>We use AI in three ways</SlideTitle>
        </SlideHeader>

        <SlideContent size="lg">
          <BulletList
            size="lg"
            items={[
              {
                text: 'Building our software',
                subtext: 'LLM coding agents for faster policy modelling and data work',
              },
              {
                text: 'Improving our models',
                subtext: 'Machine learning for calibration and imputation',
              },
              {
                text: 'Augmenting our software',
                subtext: 'Natural language interfaces and AI-powered explanations',
              },
            ]}
          />
        </SlideContent>
      </div>
    </Slide>
  );
}
