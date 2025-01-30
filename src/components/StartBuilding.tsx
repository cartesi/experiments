import React from 'react';
import Button from './ui/Button';
import EntryContent from './ui/EntryContent';
import EyebrowTitle from './ui/EyebrowTitle';
import Section from './ui/Section';
import Container from './ui/Container';
import Link from '@docusaurus/Link';
import IconExternal from './ui/IconExternal';
import { PortableText } from '@portabletext/react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const StartBuilding = () => {
  const {
    siteConfig: {
      customFields: {
        sanity: { startBuilding: data },
      },
    },
  } = useDocusaurusContext();

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
              ({ title, content, number, imageUrl, cta }, idx: number) => (
                <div className='group flex flex-col gap-6' key={idx}>
                  <div className='aspect-video overflow-hidden rounded-2xl object-cover'>
                    <Link
                      href={cta.link}
                      target={cta.isExternal ? '_blank' : ''}
                      className='group inline-flex items-center'
                    >
                      <img
                        src={imageUrl}
                        alt={title}
                        loading='lazy'
                        className='aspect-video object-cover transition-transform duration-1000 group-hover:scale-105'
                      />
                    </Link>
                  </div>
                  <div className='flex grow flex-col'>
                    <p className='mb-0 font-heading text-sm text-foreground/50'>
                      {number}
                    </p>
                    <EntryContent className='prose-headings:mb-2 prose-headings:text-h5 prose-p:m-0 prose-p:leading-tight'>
                      <h3>{title}</h3>
                      <PortableText value={content} />
                    </EntryContent>
                  </div>
                  <p className='text-center xl:text-left'>
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
