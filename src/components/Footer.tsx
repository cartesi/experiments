import React from 'react';
import Logo from './Logo';
import Container from './ui/Container';
import FooterNavigation from './FooterNavigation';

const Footer = () => {
  // const d = new Date();
  // let year = d.getFullYear();
  const navItems = [
    {
      label: 'Discord',
      path: 'https://discord.gg/eZ6HehDzYK',
      isExternal: false,
    },
    {
      label: 'Telegram',
      path: 'https://t.me/cartesiproject',
      isExternal: true,
    },
    {
      label: 'Medium',
      path: 'https://medium.com/cartesi',
      isExternal: true,
    },
    {
      label: 'Reddit',
      path: 'https://www.reddit.com/r/cartesi/',
      isExternal: true,
    },
    {
      label: 'Instagram',
      path: 'https://www.instagram.com/cartesiproject/',
      isExternal: true,
    },
    {
      label: 'Github',
      path: 'https://github.com/cartesi?_gl=1*xk7dkb*_ga*MTAyODg1OTI1LjE2ODY5MDA3NjA.*_ga_HM92STPNFJ*MTY5NjQyOTY5Mi4zNy4xLjE2OTY0MzA4MTMuNDUuMC4w',
      isExternal: true,
    },
    {
      label: 'Twitter',
      path: 'https://twitter.com/cartesiproject',
      isExternal: true,
    },
    {
      label: 'Youtube',
      path: 'https://www.youtube.com/cartesiproject',
      isExternal: true,
    },
    {
      label: 'Linkedin',
      path: 'https://www.linkedin.com/company/cartesiproject',
      isExternal: true,
    },
  ];

  return (
    <div className='flex-shrink-0 bg-foreground py-16 text-background'>
      <Container>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-32'>
            <div className='flex shrink-0 flex-col gap-8'>
              <Logo className='w-40' />
            </div>
            <FooterNavigation navItems={navItems} />
          </div>
          {/* <div className="flex items-center justify-between gap-4 text-xs text-background/50">
            <p>
              © {year} {data.copyright.copyright}
            </p>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
