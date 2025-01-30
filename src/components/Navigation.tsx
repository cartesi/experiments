import React from 'react';
import { motion } from 'framer-motion';
import NavigationItem from './ui/NavigationItem';
import Container from './ui/Container';
import { NavLink } from '../type/types';
import Button from './ui/Button';
import Link from '@docusaurus/Link';
import useNavigation from '../hooks/sanity/useNavigation';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = {
  isOpen: boolean;
  isDesktop: boolean;
};

const Navigation = ({ isOpen, isDesktop }: Props) => {
  const variants = {
    open: { height: 'auto' },
    closed: { height: '0' },
  };

  const {
    siteConfig: {
      customFields: {
        sanity: { navigation },
      },
    },
  } = useDocusaurusContext();

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
            {navigation.navLinks.map((item: NavLink, i: number) => (
              <NavigationItem item={item} isDesktop={isDesktop} key={i} />
            ))}
          </nav>
          {navigation.cta && (
            <div className='lg:ml-auto lg:w-[var(--header-side-column-width)]'>
              <Button asChild className='w-full py-4 lg:py-2'>
                <Link
                  to={navigation.cta.link}
                  target={navigation.cta.isExternal ? '_blank' : '_self'}
                  className={'ctsi-' + navigation.cta._id.replaceAll('-', '')}
                >
                  {navigation.cta.label}
                </Link>
              </Button>
            </div>
          )}
        </Container>
      </motion.div>
    </>
  );
};

export default Navigation;
