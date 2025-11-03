import { getAllSlideshowMetadata, getSlideshowById } from '@/lib/slideshows';
import { agenda } from '@/lib/agenda';
import SlideshowViewer from '@/components/SlideshowViewer';
import AutoSectionTitle from '@/components/AutoSectionTitle';
import QASlide from '@/components/QASlide';
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  // Include all agenda items with slideshowId, not just registered slideshows
  const agendaSlides = agenda
    .filter(item => item.slideshowId)
    .map(item => ({ slideshow: item.slideshowId! }));

  return agendaSlides;
}

export default function SlideshowPage({ params }: { params: { slideshow: string } }) {
  const slideshow = getSlideshowById(params.slideshow);
  const agendaItem = agenda.find(item => item.slideshowId === params.slideshow);

  // If no slideshow exists but it's in the agenda, show just the section title
  if (!slideshow && agendaItem) {
    return (
      <SlideshowViewer slideCount={1} slideshowId={params.slideshow}>
        <AutoSectionTitle />
      </SlideshowViewer>
    );
  }

  // If no slideshow and not in agenda, redirect home
  if (!slideshow) {
    redirect('/');
  }

  // Automatically inject section title at beginning and QA slide before end if needed
  const slides = [...slideshow.slides];

  // Add section title as first slide if not already present
  const firstSlide = slides[0];
  const isFirstSlideSection = firstSlide === AutoSectionTitle ||
                               firstSlide?.toString().includes('SectionTitle') ||
                               firstSlide?.displayName === 'SectionTitle';
  if (!isFirstSlideSection) {
    slides.unshift(AutoSectionTitle);
  }

  // Add QA slide before end slide if hasQA is true
  if (agendaItem?.hasQA) {
    // Insert QA slide before the last slide (which should be EndSlide)
    slides.splice(slides.length - 1, 0, QASlide);
  }

  // Normal slideshow render
  return (
    <SlideshowViewer slideCount={slides.length} slideshowId={params.slideshow}>
      {slides.map((SlideComponent, index) => (
        <SlideComponent key={index} />
      ))}
    </SlideshowViewer>
  );
}
