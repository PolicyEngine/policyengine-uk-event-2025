import { SlideshowConfig } from '@/lib/types';
import SectionTitle from '@/components/AutoSectionTitle';
import ThreeIngredientsSlide from './slides/ThreeIngredientsSlide';
import DataMethodologySlide from './slides/DataMethodologySlide';
import FlowchartSlide from './slides/FlowchartSlide';
import GoogleSlidesEmbed from './slides/GoogleSlidesEmbed';
import PoliciesScopeSlide from './slides/PoliciesScopeSlide';
import DynamicsSlide from './slides/DynamicsSlide';
import EndSlide from './slides/EndSlide';

export const modelScopeConfig: SlideshowConfig = {
  id: 'model-scope',
  title: 'Scope of the model: Policies, households, and dynamics',
  description: 'Overview of PolicyEngine microsimulation model structure and data',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    SectionTitle,
    ThreeIngredientsSlide,
    GoogleSlidesEmbed,
    PoliciesScopeSlide,
    FlowchartSlide,
    DynamicsSlide,
    DataMethodologySlide,
    EndSlide,
  ],
};
