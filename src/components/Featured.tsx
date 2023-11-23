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
import Button from './ui/Button';
import Link from '@docusaurus/Link';
import IconExternal from './ui/IconExternal';

const Featured = ({ projects }: { projects: PageFrontMatter['id'][] }) => {
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
      <div className='flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 pb-6 sm:pb-10'>
        <div>
          <h2 className='text-h4'>Cartesi Experiment Week</h2>
          <p className='text-white/70'>
            A week-long online hackathon hosted by the Cartesi Foundation for
            grantees and the broader community with the aim to bring several
            tangible dApp ideas, use cases, improvements, and tooling to life.
          </p>
        </div>
        <div>
          <Button asChild variant={'outline-invert'}>
            <Link
              href={`https://cartesi.io/blog/cartesi-experiment-week-recap/`}
              target={'_blank'}
              className='group inline-flex items-center whitespace-nowrap gap-2 px-6 pl-8'
            >
              Learn more
              <IconExternal />
            </Link>
          </Button>
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
            slidesPerView: 3,
          },
        }}
      >
        {featuredList.map(page => (
          <SwiperSlide key={page.id}>
            <ShowcaseItemFeatured page={page} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex items-center gap-2 mt-4 justify-end'>
        <button className='swiper-prev hover:bg-white/5 rounded-xl block p-2 transition-opacity'>
          <ChevronLeft size={24} />
        </button>
        <button className='swiper-next hover:bg-white/5 rounded-xl block p-2 transition-opacity'>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Featured;
