import React, { useRef } from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useMediaQuery } from 'usehooks-ts';
import IconChevron from './ui/IconChevron';
import IconArrowLeft from './ui/IconArrowLeft';
import IconArrowRight from './ui/IconArrowRight';
import IconClose from './ui/IconClose';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  thumbWidth?: string;
  images: {
    image: string;
    alt?: string;
  }[];
};

const Gallery = ({ images, thumbWidth = '15rem' }: Props) => {
  const [showLightbox, setShowLightbox] = React.useState(false);
  const [swiper, setSwiper] = React.useState(null);

  const { siteConfig } = useDocusaurusContext();

  const location = useLocation();

  const handleImageClick = (index: number) => {
    setShowLightbox(true);
    swiper.slideTo(index);
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

  return (
    <div className='not-prose pt-2'>
      <div
        className='fixed inset-0 z-50 p-2 bg-black bg-opacity-70 backdrop-blur'
        style={{ zIndex: '100000', display: showLightbox ? 'block' : 'none' }}
      >
        <button
          className='z-20 text-white hover:bg-black/50 hover:text-white rounded-xl p-2 transition-opacity absolute right-4 top-4'
          onClick={() => setShowLightbox(false)}
        >
          <IconClose />
        </button>

        <div className='relative w-full h-full flex justify-center items-center'>
          <button className='z-20 swiper-prev swiper-prev--lightbox text-white hover:bg-black/50 hover:text-white rounded-xl p-2 transition-opacity absolute left-4 top-1/2 transform -translate-y-1/2'>
            <IconArrowLeft />
          </button>
          <button className='z-20 swiper-next swiper-next--lightbox text-white hover:bg-black/50 hover:text-white rounded-xl p-2 transition-opacity absolute right-4 top-1/2 transform -translate-y-1/2'>
            <IconArrowRight />
          </button>

          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoHeight={false}
            className='mySwiper'
            onSwiper={setSwiper}
            navigation={{
              nextEl: '.swiper-next--lightbox',
              prevEl: '.swiper-prev--lightbox',
            }}
            modules={[Navigation]}
          >
            {images.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={useBaseUrl(
                    `${siteConfig.customFields.projectsImagesPath}${location.pathname}${image.image}`
                  )}
                  style={{ width: '100%' }}
                  className='aspect-video object-cover shadow-sm m-0 max-w-none max-h-[90vh]'
                  alt={image.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className='flex gap-4 mb-4 justify-end -mt-6'>
        <button className='swiper-prev swiper-prev--default hover:bg-white/5 rounded-xl p-2 transition-opacity'>
          <IconArrowLeft />
        </button>
        <button className='swiper-next swiper-next--default hover:bg-white/5 rounded-xl p-2 transition-opacity'>
          <IconArrowRight />
        </button>
      </div>

      <Swiper
        slidesPerView={1.5}
        spaceBetween={16}
        autoHeight={false}
        className='mySwiper'
        navigation={{
          nextEl: '.swiper-next--default',
          prevEl: '.swiper-prev--default',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
        modules={[Navigation, Pagination]}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              src={useBaseUrl(
                `${siteConfig.customFields.projectsImagesPath}${location.pathname}${image.image}`
              )}
              style={{ width: '100%' }}
              className='aspect-video object-cover shadow-sm cursor-zoom-in m-0 max-w-none'
              alt={image.alt}
              onClick={() => handleImageClick(i)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
