import Link from '@docusaurus/Link';
import React from 'react';

type navItem = {
  label: string;
  path: string;
  isExternal?: boolean;
};

type Props = {
  navItems: navItem[];
};

const FooterNavigation = ({ navItems }: Props) => {
  return (
    <div className='grid grid-cols-3 sm:grid-cols-5 gap-4'>
      {navItems &&
        navItems.map(({ label, path, isExternal }, index) => (
          <Link
            target={isExternal ? '_blank' : '_self'}
            href={path}
            key={index}
            className={`text-background hover:text-background/80 no-underline hover:no-underline transition-colors duration-200`}
          >
            {label}
          </Link>
        ))}
    </div>
  );
};

export default FooterNavigation;
