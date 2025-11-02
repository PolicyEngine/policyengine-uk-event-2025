import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ThreeIngredientsSlide from './slides/ThreeIngredientsSlide';
import InnovationsSlide from './slides/InnovationsSlide';
import DataMethodologySlide from './slides/DataMethodologySlide';
import GoogleSlidesEmbed from './slides/GoogleSlidesEmbed';
import UKBenefitsIframe from './slides/UKBenefitsIframe';
import UKTaxesIframe from './slides/UKTaxesIframe';
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
    InnovationsSlide,
    DataMethodologySlide,
    GoogleSlidesEmbed,
    UKTaxesIframe,
    UKBenefitsIframe,
    EndSlide,
  ],
};
