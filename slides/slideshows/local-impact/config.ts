import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/1_CoverSlide';
import LocalAreaImportanceSlide from './slides/2_LocalAreaImportanceSlide';
import ReweightingSlide from './slides/3_ReweightingSlide';
import ApproachSlide from './slides/4_ApproachSlide';
import CalibrationSlide from './slides/5_CalibrationSlide';
import DataFormatSlide from './slides/5_5_DataFormatSlide';
import CalibrationDashboardSlide from './slides/5_6_CalibrationDashboardSlide';
import ConstituencyMapSlide from './slides/5_7_ConstituencyMapSlide';
import USImprovementsSlide from './slides/5_8_USImprovementsSlide';
import USFoodStampMapSlide from './slides/5_9_USFoodStampMapSlide';
import GeoStackingSlide from './slides/5_10_GeoStackingSlide';
import OptimizationSlide from './slides/5_11_OptimizationSlide';
import EndSlide from './slides/6_EndSlide';

export const localImpactConfig: SlideshowConfig = {
  id: 'local-impact',
  title: 'Localising policy impact',
  description: 'Modelling parliamentary constituencies and local authorities',
  date: '3 November 2025',
  location: 'Central Hall Westminster, London',
  slides: [
    CoverSlide,
    LocalAreaImportanceSlide,
    ReweightingSlide,
    ApproachSlide,
    CalibrationSlide,
    DataFormatSlide,
    CalibrationDashboardSlide,
    ConstituencyMapSlide,
    USImprovementsSlide,
    USFoodStampMapSlide,
    GeoStackingSlide,
    OptimizationSlide,
    EndSlide,
  ],
};
