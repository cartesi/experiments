import React from 'react';
import Logo from './Logo';
import Container from './ui/Container';
import FooterNavigation from './FooterNavigation';

const Footer = () => {
  // const d = new Date();
  // let year = d.getFullYear();
  const navItems = [
    {
      label: 'Developers',
      path: '#',
      isExternal: false,
    },
    {
      label: 'Documentation',
      path: 'https://docs.cartesi.io/',
      isExternal: true,
    },
    {
      label: 'Github',
      path: 'https://www.github.com/cartesi',
      isExternal: true,
    },
    {
      label: 'Examples',
      path: '#',
    },
  ];

  return (
    <div className='flex-shrink-0 bg-foreground py-12 text-sm text-background'>
      <Container>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-8 lg:flex-row lg:gap-32'>
            <div className='flex grow flex-col gap-8'>
              <Logo className='w-36' />
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
