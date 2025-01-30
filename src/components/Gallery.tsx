import React, { useRef } from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useMediaQuery } from 'usehooks-ts';
import IconChevron from './ui/IconChevron';
import IconArrowLeft from './ui/IconArrowLeft';
import IconArrowRight from './ui/IconArrowRight';

type Props = {
  thumbWidth?: string;
  images: {
    image: string;
    alt?: string;
  }[];
};

const Gallery = ({ images, thumbWidth = '15rem' }: Props) => {
  const [showLightbox, setShowLightbox] = React.useState(false);
  const [lightboxImage, setLightboxImage] = React.useState('');

  const { siteConfig } = useDocusaurusContext();

  const location = useLocation();

  const [scrollX, setScrollX] = React.useState(0);
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const handleImageClick = (image: string) => {
    setLightboxImage(image);
    setShowLightbox(true);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const containerWidth = scrollContainer.current.clientWidth;
      const scrollWidth = scrollContainer.current.scrollWidth;

      if (direction === 'left') {
        setScrollX(scrollX - containerWidth);
      } else {
        setScrollX(scrollX + containerWidth);
      }

      if (scrollX < 0) {
        setScrollX(0);
      } else if (scrollX + containerWidth > scrollWidth) {
        setScrollX(scrollWidth - containerWidth);
      }
    }
  };

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowLightbox(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  React.useEffect(() => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollTo({
        left: scrollX,
        behavior: 'smooth',
      });
    }
  }, [scrollX]);

  return (
    <div className='not-prose'>
      {showLightbox && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur p-2 cursor-zoom-out'
          style={{ zIndex: '100000' }}
          onClick={() => setShowLightbox(false)}
        >
          <div className='relative'>
            <img src={lightboxImage} alt={``} />
          </div>
        </div>
      )}

      <div className='flex gap-4 mb-4 justify-end -mt-6'>
        <button
          onClick={() => handleScroll('left')}
          className='p-1 text-primary/50 transition-colors hover:text-primary'
        >
          <IconArrowLeft />
        </button>
        <button
          onClick={() => handleScroll('right')}
          className='p-1 text-primary/50 transition-colors hover:text-primary'
        >
          <IconArrowRight />
        </button>
      </div>

      <div
        className='flex gap-4 snap-x overflow-x-auto scrollbar-hide'
        ref={scrollContainer}
      >
        {images.map((image, i) => (
          <div key={i} className='snap-start'>
            <img
              src={useBaseUrl(
                `${siteConfig.customFields.projectsImagesPath}${location.pathname}${image.image}`
              )}
              style={{ width: thumbWidth }}
              className='aspect-video object-cover shadow-sm cursor-zoom-in m-0 max-w-none'
              alt={image.alt}
              onClick={() =>
                handleImageClick(
                  require(`@site/static/projects${location.pathname}${image.image}`)
                    .default
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
