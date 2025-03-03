import React from 'react';

type Props = {
  className?: string;
  classNameSvg?: string;
  type?: string;
};

const Loading = ({ className, classNameSvg, type = 'default' }: Props) => {
  if (type == 'default')
    return (
      <span className={className}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          className={classNameSvg}
          stroke='currentColor'
        >
          <g className='loading stroke-current'>
            <circle cx='12' cy='12' r='9.5' fill='none' strokeWidth={2} />
          </g>
        </svg>
      </span>
    );
  else if (type == 'dots') {
    return (
      <svg height='24' width='24'>
        <circle className='dot fill-current' cx='10' cy='10' r='3' />
        <circle className='dot fill-current' cx='20' cy='10' r='3' />
        <circle className='dot fill-current' cx='30' cy='10' r='3' />
      </svg>
    );
  }
};

export default Loading;
