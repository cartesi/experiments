import React from 'react';
import Button from './ui/Button';
import Carousel from './ui/Carousel';
import CarouselContainer from './ui/CarouselContainer';
import EntryContent from './ui/EntryContent';
import EscapeContainer from './ui/EscapeContainer';
import EyebrowTitle from './ui/EyebrowTitle';
import SectionCard from './ui/SectionCard';
import Container from './ui/Container';
import Link from '@docusaurus/Link';
import IconExternal from './ui/IconExternal';

/* @ts-ignore */
import Image1 from '@site/static/img/start-1.png';
/* @ts-ignore */
import Image2 from '@site/static/img/start-2.png';
/* @ts-ignore */
import Image3 from '@site/static/img/start-3.png';
/* @ts-ignore */
import Image4 from '@site/static/img/start-4.png';
/* @ts-ignore */
import Image5 from '@site/static/img/start-5.png';

const StartBuilding = () => {
  const data = {
    badge: '5 Simple steps',
    title: 'Start building with Cartesi Rollups',
    cta1: {
      label: 'Developer Docs',
      link: 'https://cartesi.io/#:~:text=with%20Cartesi%20Rollups-,DEVELOPER%20DOCS,-JOIN%20THE%20DISCORD',
      isExternal: true,
    },
    cta2: {
      label: 'Join the Discord',
      link: 'https://discord.com/invite/Pt2NrnS',
      isExternal: true,
    },
    buildingSteps: [
      {
        title: 'Learn',
        _rawContent: <p>Pick up the fundamentals of Cartesi Rollups</p>,
        number: '01',
        image: Image1,
        cta: {
          label: 'Read the basics',
          link: 'https://docs.cartesi.io/cartesi-rollups/',
          isExternal: true,
        },
      },
      {
        title: 'Install',
        _rawContent: (
          <p>
            Install <strong>Docker</strong> and <strong>Python 3</strong> which
            are needed for the provided DApp examples.
          </p>
        ),
        number: '02',
        image: Image2,
        cta: {
          label: 'Install Help',
          link: 'https://cartesi.io/#:~:text=provided%20DApp%20examples.-,INSTALL%20HELP,-03',
          isExternal: true,
        },
      },
      {
        title: 'Follow',
        _rawContent: (
          <p>
            Follow the short steps for the Echo DApp example in the Rollups
            repo.
          </p>
        ),
        number: '03',
        image: Image3,
        cta: {
          label: 'Rollups repo',
          link: 'https://github.com/cartesi/rollups-examples?_gl=1*1h8mt5f*_ga*MTAyODg1OTI1LjE2ODY5MDA3NjA.*_ga_HM92STPNFJ*MTY5NjQxNzQ0NS4zNC4wLjE2OTY0MTc0NDUuNjAuMC4w',
          isExternal: true,
        },
      },
      {
        title: 'Edit',
        _rawContent: (
          <p>
            Adjust the echo.py script in the repo and play around. Read the docs
            to get creative.
          </p>
        ),
        number: '04',
        image: Image4,
        cta: {
          label: 'Documentation',
          link: 'https://docs.cartesi.io/',
          isExternal: true,
        },
      },
      {
        title: 'Going Further',
        _rawContent: (
          <p>
            Feel like taking your code to the next level? Submit a proposal in
            the Community Grants Program.
          </p>
        ),
        number: '05',
        image: Image5,
        cta: {
          label: 'Submit a proposal',
          link: 'http://governance.cartesi.io/',
          isExternal: true,
        },
      },
    ],
  };
  const { badge, title, cta1, cta2, buildingSteps } = data;

  return (
    <SectionCard
      id='start-building'
      className='bg-primary lg:mr-0 lg:rounded-e-none'
    >
      <Container>
        <div className='mb-section flex flex-col justify-between gap-8 lg:flex-row lg:items-end lg:gap-16'>
          <div className='flex max-w-screen-sm flex-col items-start'>
            <EyebrowTitle label={badge} as='p' />
            <EntryContent inverted>
              <h2>{title}</h2>
            </EntryContent>
          </div>
          <div className='flex gap-3'>
            <Button asChild size={'lg'} variant={'white'}>
              <Link
                href={cta1.link}
                target={cta1.isExternal ? '_blank' : ''}
                className='group inline-flex items-center'
              >
                {cta1.label}
                {cta1.isExternal && <IconExternal />}
              </Link>
            </Button>
            <Button asChild variant={'outline-invert'} size={'lg'}>
              <Link
                href={cta2.link}
                target={cta2.isExternal ? '_blank' : ''}
                className='group inline-flex items-center'
              >
                {cta2.label}
                {cta2.isExternal && <IconExternal />}
              </Link>
            </Button>
          </div>
        </div>
        <EscapeContainer>
          <CarouselContainer showDrag>
            <Carousel className='mySwiper'>
              {buildingSteps.map(
                ({ title, _rawContent, number, image, cta }, idx: number) => (
                  <Carousel.Slide key={idx} className='flex h-full'>
                    <div className='j group flex h-full flex-col gap-8'>
                      <div className='aspect-video overflow-hidden rounded-2xl object-cover'>
                        <img
                          src={image}
                          alt={title}
                          loading='lazy'
                          className='aspect-video object-cover transition-transform duration-1000 group-hover:scale-105'
                        />
                      </div>
                      <div className='flex grow flex-col lg:pr-24'>
                        <p className='font-heading text-xs text-background/50 m-0'>
                          {number}
                        </p>
                        <EntryContent
                          inverted
                          className='flex grow flex-col prose-headings:mb-2 prose-headings:text-h4'
                        >
                          <h3>{title}</h3>
                          <div className='grow'>{_rawContent}</div>
                        </EntryContent>
                      </div>
                      <p className='mt-auto'>
                        <Button asChild variant={'link-invert'} size={'link'}>
                          <Link
                            href={cta.link}
                            target={cta.isExternal ? '_blank' : ''}
                            className='group inline-flex items-center'
                          >
                            {cta.label}
                            {cta.isExternal && <IconExternal />}
                          </Link>
                        </Button>
                      </p>
                    </div>
                  </Carousel.Slide>
                )
              )}
            </Carousel>
          </CarouselContainer>
        </EscapeContainer>
      </Container>
    </SectionCard>
  );
};

export default StartBuilding;
