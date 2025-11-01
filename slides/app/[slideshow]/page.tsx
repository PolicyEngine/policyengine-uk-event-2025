import { getAllSlideshowMetadata, getSlideshowById } from '@/lib/slideshows';
import { agenda } from '@/lib/agenda';
import SlideshowViewer from '@/components/SlideshowViewer';
import AutoSectionTitle from '@/components/AutoSectionTitle';
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

  // Normal slideshow render
  return (
    <SlideshowViewer slideCount={slideshow.slides.length} slideshowId={params.slideshow}>
      {slideshow.slides.map((SlideComponent, index) => (
        <SlideComponent key={index} />
      ))}
    </SlideshowViewer>
  );
}
