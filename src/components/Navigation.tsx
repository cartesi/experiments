import React from 'react';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import NavigationItem from './ui/NavigationItem';
import Container from './ui/Container';
import { NavLink } from '../type/types';

type Props = {
  isOpen: boolean;
  isDesktop: boolean;
};

const Navigation = ({ isOpen, isDesktop }: Props) => {
  const variants = {
    open: { height: 'auto' },
    closed: { height: '0' },
  };

  const _rawNavLinks = [
    {
      label: 'Developers',
      isExternal: false,
      Children: [
        {
          label: 'Documentation',
          link: '//docs.cartesi.io/',
          isExternal: true,
        },
        {
          label: 'Github',
          link: 'https://www.github.com/cartesi?_gl=1*1iug9qt*_ga*MTAyODg1OTI1LjE2ODY5MDA3NjA.*_ga_HM92STPNFJ*MTY5NjQxNTE4Mi4zMy4xLjE2OTY0MTUxODIuNjAuMC4w',
          isExternal: true,
        },
        {
          label: 'Examples',
          link: 'https://github.com/cartesi/rollups-examples?_gl=1*1iug9qt*_ga*MTAyODg1OTI1LjE2ODY5MDA3NjA.*_ga_HM92STPNFJ*MTY5NjQxNTE4Mi4zMy4xLjE2OTY0MTUxODIuNjAuMC4w',
          isExternal: true,
        },
        {
          label: 'Big Bounty',
          link: 'https://immunefi.com/bounty/cartesi/?_gl=1*1iug9qt*_ga*MTAyODg1OTI1LjE2ODY5MDA3NjA.*_ga_HM92STPNFJ*MTY5NjQxNTE4Mi4zMy4xLjE2OTY0MTUxODIuNjAuMC4w',
          isExternal: true,
        },
        {
          label: 'Crack the Honeypot',
          link: 'https://honeypot.cartesi.io/',
          isExternal: true,
        },
      ],
    },
    {
      label: 'Governance',
      path: 'https://cartesi.io/governance/',
      isExternal: true,
    },
    {
      label: 'Cartesi',
      path: 'https://cartesi.io',
      isExternal: true,
    },
  ] as NavLink[];

  const cta = {
    label: 'Get Started',
    link: '/contact',
    isExternal: false,
  };

  return (
    <>
      <motion.div
        className='relative left-0 top-0 grow overflow-hidden lg:left-auto lg:!h-auto lg:flex-row lg:overflow-visible'
        variants={variants}
        initial={isDesktop ? 'open' : 'closed'}
        animate={isOpen ? 'open' : isDesktop ? 'open' : 'closed'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Container className='mx-auto flex grow flex-col gap-8 py-4 sm:py-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:p-0'>
          <nav className='flex h-full grow flex-col justify-center font-heading lg:mx-auto lg:flex-row lg:items-center'>
            {_rawNavLinks.map((item: NavLink, i: number) => (
              <NavigationItem item={item} isDesktop={isDesktop} key={i} />
            ))}
          </nav>
          <div className='lg:ml-auto lg:w-[var(--header-side-column-width)]'>
            <Button asChild className='w-full py-4 lg:py-2'>
              <a href={cta.link}>{cta.label}</a>
            </Button>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default Navigation;
