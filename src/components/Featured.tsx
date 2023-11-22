import React, { useMemo } from 'react';

import { PageFrontMatter } from '../theme/MDXContent';
import { TagsAvailable } from '../pages';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

import ShowcaseItemFeatured from './ShowcaseItemFeatured';

const Featured = ({
  title,
  projects,
}: {
  title: string;
  projects: PageFrontMatter['id'][];
}) => {
  const { siteConfig } = useDocusaurusContext();

  const { pageList, tagsAvailable } = siteConfig.customFields as {
    pageList: PageFrontMatter[];
    tagsAvailable: TagsAvailable;
  };

  const featuredList = useMemo(() => {
    const featuredProjects = pageList.filter(page =>
      projects.includes(page.id)
    );

    return featuredProjects;
  }, [projects, pageList]);

  return (
    <div className='bg-foreground rounded-3xl mb-12 text-background p-6 sm:p-12 pr-0 overflow-hidden'>
      <div className='flex items-center justify-between gap-4 pb-6 sm:pb-10'>
        <h2 className='text-h4 m-0'>{title}</h2>
        <div className='flex items-center gap-2'>
          <button className='swiper-prev hover:bg-white/5 rounded-xl block p-2 transition-opacity'>
            <ChevronLeft size={24} />
          </button>
          <button className='swiper-next hover:bg-white/5 rounded-xl block p-2 transition-opacity'>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={1.2}
        spaceBetween={24}
        autoHeight={false}
        className='mySwiper'
        // loop={true}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
      >
        {featuredList.map(page => (
          <SwiperSlide key={page.id}>
            <ShowcaseItemFeatured page={page} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Featured;
