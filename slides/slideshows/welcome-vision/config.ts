import { SlideshowConfig } from '@/lib/types';
import SectionTitle from './slides/SectionTitle';
import CoverSlide from './slides/CoverSlide';
import JourneyBeginning from './slides/JourneyBeginning';
import RecognisingOpportunity from './slides/RecognisingOpportunity';
import EarlyGrowth from './slides/EarlyGrowth';
import IntroducingAnvar from './slides/IntroducingAnvar';
import AnvarIntro from './slides/AnvarIntro';
import PostNufFieldTransformation from './slides/PostNufFieldTransformation';
import TodaysAgenda from './slides/TodaysAgenda';
import TodaysUnveiling from './slides/TodaysUnveiling';
import EndSlide from './slides/EndSlide';

export const welcomeVisionConfig: SlideshowConfig = {
  id: 'welcome-vision',
  title: 'Welcome and vision',
  description: 'Opening presentation by Max Ghenis on PolicyEngine\'s journey and vision',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    JourneyBeginning,
    RecognisingOpportunity,
    EarlyGrowth,
    IntroducingAnvar,
  ],
};