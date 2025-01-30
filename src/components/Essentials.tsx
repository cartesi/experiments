import Link from '@docusaurus/Link';
import React from 'react';
import Button from './ui/Button';

import Container from './ui/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import IconArrowLeft from './ui/IconArrowLeft';
import IconArrowRight from './ui/IconArrowRight';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { PageFrontMatter } from '../theme/MDXContent';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useMediaQuery } from 'usehooks-ts';
import Tag from './Tag';

const Essentials = () => {
  const { siteConfig } = useDocusaurusContext();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { pageList } = siteConfig.customFields as {
    pageList: PageFrontMatter[];
  };

  const data = [
    {
      id: 1,
      title: 'Powering the future of composable',
      text: `Cartesi apps now leverage Espresso for fast confirmations, low-cost DA, and decentralized sequencing. Comet, DCA Monster, and Drawing Canvas are actively working to bring their dApps to mainnet. These dApps are already available for testing, so try them out and share your feedback with the team!`,
      image: '/img/essentials1.png',
      cta: {
        label: 'Learn more',
        url: 'https://cartesi.io/blog/cartesi_espresso_integration/',
      },
      projects: ['dca-monster', 'drawing-dapp', 'bugbuster'],
    },
    {
      id: 2,
      title: 'Farcaster Frame for Cartesi dApps: A simple "meta-apps"',
      text: `Frames are mini-app experiences in the Farcaster client feed. Frames allow devs to create transactions on-chain which could be used to send inputs to the Cartesi dApp backend and read outputs form the Cartesi node. Frames do no intend to create a full-fledged web app but rather expose a social feature of your dApp to Farcaster users.`,
      image: '/img/essentials2.png',
      cta: {
        label: 'Learn more',
        url: 'https://cartesi.io/blog/cartesi_espresso_integration/',
      },
      projects: ['cartesian-battleship'],
      notes: [
        {
          id: 1,
          text: 'You can build applications like NFT mining, simple voting, sign-ups and subscriptions, simple games, etc.',
          image: '/img/essentials_note.png',
        },
      ],
    },
  ];

  return (
    <Container>
      <div className='flex flex-col py-8 sm:py-12 lg:py-16 xl:py-20 no-prose'>
        <h2 className='text-3xl inline-block mx-auto sm:text-4xl lg:text-5xl mb-6 sm:mb-12'>
          Modularity Essentials
        </h2>
        <div className='bg-card text-card-foreground rounded-2xl p-8 lg:p-12 relative'>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoHeight={false}
            className='mySwiper'
            navigation={{
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
          >
            {data.map(item => {
              const columnCount =
                item.projects.length + (item.notes ? item.notes.length : 0);

              return (
                <SwiperSlide key={item.id}>
                  <div className='grid lg:grid-cols-3 gap-8'>
                    <div className='flex justify-center items-start'>
                      <img src={item.image} alt={item.title} width={220} />
                    </div>
                    <div className='col-span-2'>
                      <div className='prose'>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                        <Button
                          asChild
                          variant='link'
                          className='p-0 text-foreground'
                        >
                          <Link to={item.cta.url}>{item.cta.label}</Link>
                        </Button>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-8'>
                    <h3 className='text-lg'>Example Projects</h3>
                    <div
                      className='grid gap-4 grid-cols-1'
                      style={{
                        gridTemplateColumns: isDesktop
                          ? `repeat(${
                              item.projects.length +
                              (item.notes ? item.notes.length : 0)
                            }, 1fr)`
                          : '',
                      }}
                    >
                      {/* projects */}
                      {pageList &&
                        pageList
                          .filter(page => item.projects.includes(page.id))
                          .sort(
                            (a, b) =>
                              item.projects.indexOf(a.id) -
                              item.projects.indexOf(b.id)
                          )
                          .map(page => (
                            <Link
                              to={page.path}
                              key={page.id}
                              className='bg-background rounded-xl p-4 flex gap-4 border border-solid border-foreground/10 text-foreground no-underline hover:no-underline lg:items-center'
                            >
                              {page.thumbnail && (
                                <img
                                  src={useBaseUrl(
                                    `${siteConfig.customFields.projectsImagesPath}${page.path}/${page.thumbnail}`
                                  )}
                                  alt={page.title}
                                  className='object-cover block transition-transform aspect-square rounded-2xl shrink-0 size-16'
                                  loading='lazy'
                                />
                              )}

                              <div>
                                <div className='flex gap-2 items-center mb-1'>
                                  <h3 className='m-0 text-base'>
                                    {page.title}
                                  </h3>
                                  <div className='shrink-0'>
                                    <Tag
                                      type='projectTypes'
                                      tag={page.tags.projectTypes}
                                      contentClass='bg-transparent text-[10px]'
                                    />
                                  </div>
                                </div>
                                <p className='line-clamp-2 leading-tight text-sm text-foreground/60 mb-0'>
                                  {page.description}
                                </p>
                              </div>
                            </Link>
                          ))}

                      {/* notes */}
                      {item.notes &&
                        item.notes.map(note => (
                          <div
                            className='bg-background rounded-xl p-4 flex gap-4 border border-solid border-foreground/10 text-foreground no-underline hover:no-underline lg:items-center'
                            key={note.id}
                          >
                            <img
                              src={note.image}
                              alt={note.text}
                              className='object-cover block transition-transform aspect-square rounded-2xl shrink-0 size-16'
                              loading='lazy'
                            />
                            <div>
                              <p className='leading-tight text-sm text-foreground/60 mb-0'>
                                {note.text}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className='text-center mt-8'>
                      <Button asChild size={'lg'}>
                        <Link
                          to='https://docs.cartesi.io/cartesi-rollups/build-dapps/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Start Building
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button className='swiper-prev hover:bg-white/5 rounded-xl p-2 transition-opacity absolute top-1/2 -left-12 transform -translate-y-1/2 hidden xl:block'>
            <IconArrowLeft />
          </button>
          <button className='swiper-next hover:bg-white/5 rounded-xl p-2 transition-opacity absolute top-1/2 -right-12 transform -translate-y-1/2 hidden xl:block'>
            <IconArrowRight />
          </button>
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </Container>
  );
};

export default Essentials;
