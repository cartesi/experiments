import Link from '@docusaurus/Link';
import React from 'react';
import Button from './ui/Button';

import Container from './ui/Container';

/* @ts-ignore */
import HeroBg from '@site/static/img/hero.png';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center min-h-[70vh] bg-foreground text-background pt-[var(--current-header-height)] relative'>
      <div className='absolute inset-0'>
        <img
          src={HeroBg}
          alt='Cartesi Rollup Lab'
          className='object-cover w-full h-full z-0'
        />
        <div className='absolute inset-0 bg-black/70' />
      </div>
      <Container className='relative z-20 pt-8 pb-12 sm:pt-12'>
        <div className='text-center flex flex-col'>
          <h1 className='text-5xl inline-block mx-auto sm:text-6xl lg:text-7xl mb-6'>
            Discover Cartesi
            <br /> Rollup Lab
          </h1>
          <p className='text-lg sm:text-xl lg:text-2xl font-light mx-auto max-w-screen-lg'>
            Welcome to the Cartesi community’s repository of proof of concepts,
            hackathon projects, and experimental dApps developed with Cartesi
            Rollups and the Cartesi Coprocessor. Get inspired to push the
            boundaries of Web3 tech together!
          </p>
        </div>
        <div className='mt-4 sm:mt-8 flex max-w-md mx-auto justify-center gap-4 text-center sm:flex-row sm:items-center'>
          <Button asChild variant='white' size={'lg'}>
            <Link
              href='https://forms.gle/bAySRe16nQTXnnnW6'
              target='_blank'
              rel='noopener noreferrer'
            >
              Submit your project
            </Link>
          </Button>
          {/* <Button asChild variant={'outline-invert'} size={'lg'}>
            <Link
              to='https://docs.cartesi.io/cartesi-rollups/build-dapps/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Start Building
            </Link>
          </Button> */}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
