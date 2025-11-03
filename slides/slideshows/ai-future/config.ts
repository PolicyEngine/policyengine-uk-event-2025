import { SlideshowConfig } from '@/lib/types';
import ThreePillarsSlide from './slides/ThreePillarsSlide';
import ClaudeCodeSlide from './slides/ClaudeCodeSlide';
import ScientificDevelopmentSlide from './slides/ScientificDevelopmentSlide';
import LocalAreaModelingSlide from './slides/LocalAreaModelingSlide';
import SyntheticPanelSlide from './slides/SyntheticPanelSlide';
import NaturalLanguageSlide from './slides/NaturalLanguageSlide';
import ClosingReflectionSlide from './slides/ClosingReflectionSlide';
import EndSlide from './slides/EndSlide';

export const aiFutureConfig: SlideshowConfig = {
  id: 'ai-future',
  title: 'Looking ahead: AI-powered policy analysis',
  description: 'The future of PolicyEngine with AI',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    ThreePillarsSlide,
    ClaudeCodeSlide,
    ScientificDevelopmentSlide,
    LocalAreaModelingSlide,
    SyntheticPanelSlide,
    NaturalLanguageSlide,
    ClosingReflectionSlide,
    EndSlide,
  ],
};
