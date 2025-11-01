import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ContextSlide from './slides/ContextSlide';
import AIUsesSlide from './slides/AIUsesSlide';
import AIBuildingSlide from './slides/AIBuildingSlide';
import AIInterfaceSlide from './slides/AIInterfaceSlide';
import EndSlide from './slides/EndSlide';

export const techAI2025Config: SlideshowConfig = {
  id: 'tech-ai-2025',
  title: 'Technology and AI for UK policymaking: The PolicyEngine approach',
  description: 'How AI is transforming policy analysis at PolicyEngine',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    CoverSlide,
    ContextSlide,
    AIUsesSlide,
    AIBuildingSlide,
    AIInterfaceSlide,
    EndSlide,
  ],
};
