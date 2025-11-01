import { getAllSlideshowMetadata, getSlideshowById } from '@/lib/slideshows';
import SlideshowViewer from '@/components/SlideshowViewer';
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  const slideshows = getAllSlideshowMetadata();
  return slideshows.map((slideshow) => ({
    slideshow: slideshow.id,
  }));
}

export default function SlideshowPage({ params }: { params: { slideshow: string } }) {
  const slideshow = getSlideshowById(params.slideshow);

  if (!slideshow) {
    redirect('/');
  }

  return (
    <SlideshowViewer slideCount={slideshow.slides.length} initialSlide={0}>
      {slideshow.slides.map((SlideComponent, index) => (
        <SlideComponent key={index} />
      ))}
    </SlideshowViewer>
  );
}
