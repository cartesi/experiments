import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = {
  images: {
    image: string;
    alt?: string;
  }[];
};

const Gallery = ({ images }: Props) => {
  const [showLightbox, setShowLightbox] = React.useState(false);
  const [lightboxImage, setLightboxImage] = React.useState('');

  const { siteConfig } = useDocusaurusContext();

  const handleImageClick = (image: string) => {
    setLightboxImage(image);
    setShowLightbox(true);
  };

  const location = useLocation();

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

  return (
    <div>
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
      <div className='grid grid-cols-3 gap-4'>
        {images.map((image, i) => (
          <div key={i}>
            <img
              src={useBaseUrl(
                `${siteConfig.customFields.projectsImagesPath}${location.pathname}${image.image}`
              )}
              className='aspect-video object-cover shadow-sm cursor-zoom-in m-0'
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
