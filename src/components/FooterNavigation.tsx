import Link from '@docusaurus/Link';
import React from 'react';

type navItem = {
  _id: string;
  label: string;
  path: string;
  isExternal?: boolean;
  icon?: any;
  attachment?: any;
  attachmentUrl?: string;
  iconUrl?: string;
};

type Props = {
  navItems: {
    navPanel1: navItem[];
    navPanel2: navItem[];
    navPanel3: navItem[];
    navPanel4: navItem[];
  };
};

const FooterNavigation = ({ navItems }: Props) => {
  return (
    <>
      <div className='grid grow grid-cols-2 gap-8'>
        <div className='flex flex-col gap-4'>
          {navItems.navPanel1 &&
            navItems.navPanel1.map(
              ({ _id, label, path, attachmentUrl, isExternal }) => (
                <Link
                  target={isExternal ? '_blank' : '_self'}
                  to={attachmentUrl ? attachmentUrl : path}
                  key={_id}
                  className={
                    'text-background hover:text-background hover:no-underline ctsi-' +
                    _id.replace('-', '')
                  }
                >
                  {label}
                </Link>
              )
            )}
        </div>
        <div className='flex flex-col gap-4'>
          {navItems.navPanel2 &&
            navItems.navPanel2.map(
              ({ _id, label, path, attachmentUrl, isExternal }) => (
                <Link
                  target={isExternal ? '_blank' : '_self'}
                  to={attachmentUrl ? attachmentUrl : path}
                  key={_id}
                  className={
                    'text-background hover:text-background hover:no-underline ctsi-' +
                    _id.replace('-', '')
                  }
                >
                  {label}
                </Link>
              )
            )}
        </div>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-row gap-4'>
          {navItems.navPanel3 &&
            navItems.navPanel3.map(
              ({ _id, label, path, isExternal, iconUrl }) => (
                <Link
                  target={isExternal ? '_blank' : '_self'}
                  to={path}
                  key={_id}
                  className={`mx-2 h-5 w-5 text-background hover:text-background hover:no-underline ${
                    'ctsi-' + _id.replace('-', '')
                  }`}
                >
                  <img src={iconUrl} alt={label} className='h-5 w-5' />
                </Link>
              )
            )}
        </div>
        <div className='flex flex-row gap-4'>
          {navItems.navPanel4 &&
            navItems.navPanel4.map(
              ({ _id, label, path, isExternal, iconUrl }) => (
                <Link
                  target={isExternal ? '_blank' : '_self'}
                  to={path}
                  key={_id}
                  className={`mx-2 h-5 w-5 text-background hover:text-background hover:no-underline ${
                    'ctsi-' + _id.replace('-', '')
                  }`}
                >
                  <img src={iconUrl} alt={label} className='h-5 w-5' />
                </Link>
              )
            )}
        </div>
      </div>
    </>
  );
};

export default FooterNavigation;
