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
    <div className='grid grow grid-cols-2 gap-4 lg:grid-cols-4'>
      <div className='flex flex-col gap-4'>
        {navItems &&
          navItems.map(({ label, path, isExternal }, index) => (
            <Link
              target={isExternal ? '_blank' : '_self'}
              href={path}
              key={index}
            >
              {label}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default FooterNavigation;
