import { SlideshowConfig } from '@/lib/types';
import SectionTitle from './slides/0_SectionTitle';
import ContextSlide from './slides/2_ContextSlide';
import AIUsesSlide from './slides/3_AIUsesSlide';
import AIBuildingSlide from './slides/4_AIBuildingSlide';
import AIInterfaceSlide from './slides/5_AIInterfaceSlide';
import TwoChildLimitSlide from './slides/5_5_TwoChildLimitSlide';
import EndSlide from './slides/6_EndSlide';

export const techAI2025Config: SlideshowConfig = {
  id: 'tech-ai-2025',
  title: 'Technology and AI for UK policymaking: The PolicyEngine approach',
  description: 'How AI is transforming policy analysis at PolicyEngine',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    ContextSlide,
    AIUsesSlide,
    AIBuildingSlide,
    AIInterfaceSlide,
    TwoChildLimitSlide,
    EndSlide,
  ],
};
