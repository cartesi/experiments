import React from 'react';
import { cn } from '../../lib/utils';

const IconCalendar = ({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn('relative shrink-0 overflow-visible', className)}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <mask
        id='mask0_576_3439'
        style={{ maskType: 'alpha' }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='20'
        height='20'
      >
        <rect width='20' height='20' fill='currentColor' />
      </mask>
      <g mask='url(#mask0_576_3439)'>
        <path
          d='M12.0047 15C11.446 15 10.9722 14.8071 10.5833 14.4214C10.1944 14.0356 10 13.5634 10 13.0047C10 12.446 10.1929 11.9722 10.5786 11.5833C10.9644 11.1944 11.4366 11 11.9953 11C12.554 11 13.0278 11.1929 13.4167 11.5786C13.8056 11.9644 14 12.4366 14 12.9953C14 13.554 13.8071 14.0278 13.4214 14.4167C13.0356 14.8056 12.5634 15 12.0047 15ZM4.5 18C4.0875 18 3.73437 17.8507 3.44062 17.5521C3.14687 17.2535 3 16.9028 3 16.5V5.5C3 5.09722 3.14687 4.74653 3.44062 4.44792C3.73437 4.14931 4.0875 4 4.5 4H6V2H7.5V4H12.5V2H14V4H15.5C15.9125 4 16.2656 4.14931 16.5594 4.44792C16.8531 4.74653 17 5.09722 17 5.5V16.5C17 16.9028 16.8531 17.2535 16.5594 17.5521C16.2656 17.8507 15.9125 18 15.5 18H4.5ZM4.5 16.5H15.5V9H4.5V16.5ZM4.5 7.5H15.5V5.5H4.5V7.5Z'
          fill='currentColor'
        />
      </g>
    </svg>
  );
};

export default IconCalendar;
