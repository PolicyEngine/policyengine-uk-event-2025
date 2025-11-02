import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/1_CoverSlide';
import LocalAreaImportanceSlide from './slides/2_LocalAreaImportanceSlide';
import ReweightingSlide from './slides/3_ReweightingSlide';
import ApproachSlide from './slides/4_ApproachSlide';
import CalibrationSlide from './slides/5_CalibrationSlide';
import CalibrationDashboardSlide from './slides/5_6_CalibrationDashboardSlide';
import ConstituencyMapSlide from './slides/5_7_ConstituencyMapSlide';
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
    CalibrationDashboardSlide,
    ConstituencyMapSlide,
    EndSlide,
  ],
};
