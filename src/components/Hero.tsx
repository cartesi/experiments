import Link from '@docusaurus/Link';
import React from 'react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center pb-12 min-h-[60vh] bg-foreground text-background pt-headerDesktop'>
      <div className='container max-w-screen-lg'>
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
            <Link to='https://docs.cartesi.io/cartesi-rollups/build-dapps/'>
              Start Building
            </Link>
          </Button>
          <Button asChild variant={'outline-invert'} size={'lg'}>
            <Link href='https://github.com/cartesi/experiments/discussions/17'>
              Submit your project
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
