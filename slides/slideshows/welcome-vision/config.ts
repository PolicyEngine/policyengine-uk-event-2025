import { SlideshowConfig } from '@/lib/types';
import SectionTitle from './slides/SectionTitle';
import TimelineSlide from './slides/TimelineSlide';
import IntroducingAnvar from './slides/IntroducingAnvar';

export const welcomeVisionConfig: SlideshowConfig = {
  id: 'welcome-vision',
  title: 'Welcome and vision',
  description: 'Opening presentation by Max Ghenis on PolicyEngine\'s journey and vision',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    TimelineSlide,
    IntroducingAnvar,
  ],
};