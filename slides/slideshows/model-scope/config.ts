import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ThreeIngredientsSlide from './slides/ThreeIngredientsSlide';
import DataMethodologySlide from './slides/DataMethodologySlide';
import FlowchartSlide from './slides/FlowchartSlide';
import GoogleSlidesEmbed from './slides/GoogleSlidesEmbed';
import EndSlide from './slides/EndSlide';

export const modelScopeConfig: SlideshowConfig = {
  id: 'model-scope',
  title: 'Scope of the model: Policies, households, and dynamics',
  description: 'Overview of PolicyEngine microsimulation model structure and data',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    CoverSlide,
    ThreeIngredientsSlide,
    GoogleSlidesEmbed,
    FlowchartSlide,
    DataMethodologySlide,
    EndSlide,
  ],
};
