import React from 'react';
import Logo from './Logo';
import Container from './ui/Container';
import FooterNavigation from './FooterNavigation';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  const {
    siteConfig: {
      customFields: {
        sanity: { footer },
      },
    },
  } = useDocusaurusContext();

  return (
    <div className='flex-shrink-0 bg-foreground pb-8 pt-24 text-sm text-background'>
      <Container>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-8 lg:flex-row lg:gap-32'>
            <div className='flex grow flex-col gap-8'>
              <Logo isWhiteMobile />
              {/* TODO: <JoinNewsletter /> */}
            </div>
            <FooterNavigation navItems={footer.navItems} />
          </div>
          <div className='flex items-center justify-between gap-4 text-xs text-background/50'>
            <p>
              © {year} {footer.copyright}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
