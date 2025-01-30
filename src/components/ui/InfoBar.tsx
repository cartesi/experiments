import React from 'react';
import Link from '@docusaurus/Link';
import { InfoBarType } from '@site/src/type/types';

type Props = {
  data: InfoBarType;
};
const InfoBar = ({ data }: Props) => {
  if (data.url && data.url !== '')
    return (
      <Link
        to={data.url}
        target='_blank'
        rel='noopener noreferrer'
        className='mb-0 flex w-full flex-col items-center justify-items-center bg-foreground p-3 !text-background lg:mb-[1.5rem] !no-underline'
      >
        <div className='flex flex-row items-center gap-2'>
          {data.badge !== '' && (
            <span className='inline-flex rounded-full bg-secondary px-3 py-1 font-heading text-sm uppercase tracking-wide text-primary'>
              {data.badge}
            </span>
          )}
          {data.text}
        </div>
      </Link>
    );
  else
    return (
      <div className='mb-0 flex w-full flex-col items-center justify-items-center bg-foreground p-3 text-background lg:mb-[1.5rem]'>
        <div className='flex flex-row items-center gap-2'>
          {data.badge !== '' && (
            <span className='inline-flex rounded-full bg-secondary px-3 py-1 font-heading text-sm uppercase tracking-wide text-primary'>
              {data.badge}
            </span>
          )}
          {data.text}
        </div>
      </div>
    );
};

export default InfoBar;
