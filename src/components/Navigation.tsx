import React from 'react';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import NavigationItem from './ui/NavigationItem';
import Container from './ui/Container';
import { NavLink } from '../type/types';
import Link from '@docusaurus/Link';
import { RiDiscordFill, RiGithubFill } from 'react-icons/ri';

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
          label: 'Developer Advocacy Seed Grants',
          link: 'https://cartesi-devad.notion.site/DevAd-Seed-Grants-508924fb3cbb4e67a6a1c03a7fc48292',
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
      label: 'Community',
      isExternal: false,
      Children: [
        {
          label: 'Twitter',
          link: 'https://twitter.com/cartesiproject',
          isExternal: true,
        },
        {
          label: 'Discord',
          link: 'https://discord.gg/eZ6HehDzYK',
          isExternal: true,
        },
        {
          label: 'Reddit',
          link: 'https://www.reddit.com/r/cartesi/',
          isExternal: true,
        },
        {
          label: 'YouTube',
          link: 'https://www.youtube.com/cartesiproject',
          isExternal: true,
        },
        {
          label: 'Telegram',
          link: 'https://t.me/cartesiproject',
          isExternal: true,
        },
        {
          label: 'LinkedIn',
          link: 'https://www.linkedin.com/company/cartesiproject',
          isExternal: true,
        },
        {
          label: 'Instagram',
          link: 'https://www.instagram.com/cartesiproject/',
          isExternal: true,
        },
      ],
    },
    {
      label: 'Cartesi',
      path: 'https://cartesi.io',
      isExternal: true,
    },
  ] as NavLink[];

  const cta = {
    label: 'Submit Your Project',
    link: 'https://forms.gle/C2gHiwVCvgKkJM1c9',
    isExternal: true,
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
          <div className='lg:ml-auto flex flex-col lg:flex-row items-center gap-4'>
            <div className='flex items-center gap-2 order-last lg:order-first shrink-0'>
              <Link
                href='https://github.com/cartesi?_gl=1*xk7dkb*_ga*MTAyODg1OTI1LjE2ODY5MDA3NjA.*_ga_HM92STPNFJ*MTY5NjQyOTY5Mi4zNy4xLjE2OTY0MzA4MTMuNDUuMC4w'
                target='_blank'
                rel='noreferrer'
                className={'shrink-0 p-1 rounded-full bg-foreground'}
              >
                <RiGithubFill className='w-5 h-5 fill-current text-background' />
              </Link>
              <Link
                href='https://discord.gg/eZ6HehDzYK'
                target='_blank'
                rel='noreferrer'
                className={'shrink-0 p-1 rounded-full bg-foreground'}
              >
                <RiDiscordFill className='w-5 h-5 fill-current text-background' />
              </Link>
            </div>
            <Button asChild className='w-full py-4 lg:py-2'>
              <Link href={cta.link}>{cta.label}</Link>
            </Button>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default Navigation;
