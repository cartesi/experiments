import Link from '@docusaurus/Link';
import React from 'react';
import Button from './ui/Button';

import Container from './ui/Container';

/* @ts-ignore */
import HeroBg from '@site/static/img/hero.png';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center pb-12 min-h-[70vh] bg-foreground text-background pt-headerDesktop relative'>
      <div className='absolute inset-0'>
        <img
          src={HeroBg}
          alt='Cartesi Rollup Lab'
          className='object-cover w-full h-full z-0'
        />
        <div className='absolute inset-0 bg-black/70' />
      </div>
      <Container className='relative z-20'>
        <div className='text-center flex flex-col'>
          <h1 className='text-5xl inline-block mx-auto sm:text-6xl lg:text-7xl mb-6'>
            Rollup Lab
          </h1>
          <p className='text-lg sm:text-xl lg:text-2xl font-light'>
            Welcome to the Cartesi community’s repository of proof of concepts,
            hackathon projects, and experimental DApps developed with Cartesi
            Rollups. Get inspired to push the boundaries of Web3 tech together!
          </p>
        </div>
        <div className='mt-4 grid grid-cols-1 max-w-md mx-auto sm:grid-cols-2 justify-center gap-4 text-center sm:flex-row sm:items-center'>
          <Button asChild variant='white' size={'lg'}>
            <Link
              to='https://docs.cartesi.io/cartesi-rollups/build-dapps/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Start Building
            </Link>
          </Button>
          <Button asChild variant={'outline-invert'} size={'lg'}>
            <Link
              href='https://github.com/cartesi/experiments/discussions/17'
              target='_blank'
              rel='noopener noreferrer'
            >
              Submit your project
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
