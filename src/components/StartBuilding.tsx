import React from 'react';
import Button from './ui/Button';
import EntryContent from './ui/EntryContent';
import EyebrowTitle from './ui/EyebrowTitle';
import Section from './ui/Section';
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
    badge: 'Get Started',
    title: 'Three steps to getting started on Cartesi',
    buildingSteps: [
      {
        title: 'Say Hello',
        _rawContent: (
          <p className='my-0'>
            Talk through your ideas and get inspired. New? Chat with core
            contributors in #beginner-friendly.
          </p>
        ),
        number: '01',
        image: Image1,
        cta: {
          label: 'Join Discord',
          link: 'https://discord.gg/pfXMwXDDfW',
          isExternal: true,
        },
      },
      {
        title: 'Build with Quickstart',
        _rawContent: (
          <p className='my-0'>
            A step-by-step guide to getting started and building a decentralized
            application quickly.
          </p>
        ),
        number: '02',
        image: Image2,
        cta: {
          label: 'Read Guide',
          link: 'https://docs.cartesi.io/cartesi-rollups/1.5/quickstart/',
          isExternal: true,
        },
      },
      {
        title: 'Read the Docs',
        _rawContent: (
          <p className='my-0'>
            Dive into Cartesi developer docs to learn key concepts, find
            tutorials, and get building.
          </p>
        ),
        number: '03',
        image: Image3,
        cta: {
          label: 'Go to Docs',
          link: 'https://docs.cartesi.io/',
          isExternal: true,
        },
      },
    ],
  };
  const { badge, title, buildingSteps } = data;

  return (
    <Section
      id='start-building'
      className='lg:pb-42 bg-card pb-16 xl:pb-32 mb-[-3rem]'
    >
      <Container>
        <div className='mb-8 lg:mb-16'>
          <div className='flex max-w-screen-sm flex-col items-start'>
            <EyebrowTitle label={badge} as='p' center={false} />
            <EntryContent>
              <h2 className='text-h2'>{title}</h2>
            </EntryContent>
          </div>
        </div>
        <div className='grid-row-3 grid gap-14 lg:grid-cols-3 lg:gap-6'>
          {buildingSteps &&
            buildingSteps.map(
              ({ title, _rawContent, number, image, cta }, idx: number) => (
                <div className='group flex flex-col gap-6' key={idx}>
                  <div className='aspect-video overflow-hidden rounded-2xl object-cover'>
                    <Link
                      href={cta.link}
                      target={cta.isExternal ? '_blank' : ''}
                      className='group inline-flex items-center'
                    >
                      <img
                        src={image}
                        alt={title}
                        loading='lazy'
                        className='aspect-video object-cover transition-transform duration-1000 group-hover:scale-105'
                      />
                    </Link>
                  </div>
                  <div className='flex grow flex-col'>
                    <p className='mb-3 font-heading text-sm text-foreground/50'>
                      {number}
                    </p>
                    <EntryContent className='prose-headings:mb-2 prose-headings:text-h4'>
                      <h3>{title}</h3>
                      <div>{_rawContent}</div>
                    </EntryContent>
                  </div>
                  <p className='mt-4 text-center xl:text-left'>
                    <Button asChild size={'lg'}>
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
              )
            )}
        </div>
      </Container>
    </Section>
  );
};

export default StartBuilding;
