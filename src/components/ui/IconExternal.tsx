import React from 'react';
import { cn } from '../../lib/utils';

function IconExternal({ className, ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block h-5 w-5 flex-shrink-0 fill-current', className)}
      {...rest}
    >
      <path
        id="arrow_outward_2"
        d="M13.4583 6.64901L5.82687 14.2644C5.69709 14.3884 5.54298 14.4503 5.36454 14.4503C5.18609 14.4503 5.03198 14.3884 4.9022 14.2644C4.77827 14.1346 4.71631 13.9805 4.71631 13.8021C4.71631 13.6236 4.77827 13.4695 4.9022 13.3398L12.5176 5.70832H5.86502C5.69456 5.70832 5.5425 5.64146 5.40883 5.50774C5.27515 5.374 5.20831 5.21856 5.20831 5.04141C5.20831 4.86424 5.27515 4.70889 5.40883 4.57534C5.5425 4.4418 5.69678 4.37503 5.87168 4.37503H14C14.2112 4.37503 14.396 4.45416 14.5542 4.61241C14.7125 4.77066 14.7916 4.9554 14.7916 5.16663V13.2949C14.7916 13.4699 14.7247 13.6241 14.591 13.7578C14.4573 13.8915 14.3018 13.9583 14.1247 13.9583C13.9475 13.9583 13.7922 13.8915 13.6586 13.7578C13.5251 13.6241 13.4583 13.4721 13.4583 13.3016V6.64901Z"
      />
    </svg>
  );
}

export default IconExternal;
