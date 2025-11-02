import { SlideshowConfig, SlideshowMetadata } from './types';
import { event2025Config } from '@/slideshows/event-2025/config';
import { vatAnalysisConfig } from '@/slideshows/vat-analysis/config';
import { techAI2025Config } from '@/slideshows/tech-ai-2025/config';

// Register all slideshows here
export const slideshows: SlideshowConfig[] = [
  event2025Config,
  techAI2025Config,
  vatAnalysisConfig,
];

export function getSlideshowById(id: string): SlideshowConfig | undefined {
  return slideshows.find(s => s.id === id);
}

export function getAllSlideshowMetadata(): SlideshowMetadata[] {
  return slideshows.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    date: s.date,
    location: s.location,
    slideCount: s.slides.length,
  }));
}
