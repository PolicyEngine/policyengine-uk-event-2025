import { getAllSlideshowMetadata } from '@/lib/slideshows';
import SlideshowViewer from '@/components/SlideshowViewer';
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  const slideshows = getAllSlideshowMetadata();
  return slideshows.map((slideshow) => ({
    slideshow: slideshow.id,
  }));
}

export default function SlideshowPage({ params }: { params: { slideshow: string } }) {
  const slideshows = getAllSlideshowMetadata();
  const slideshowExists = slideshows.some(s => s.id === params.slideshow);

  if (!slideshowExists) {
    redirect('/');
  }

  return <SlideshowViewer slideshowId={params.slideshow} />;
}
