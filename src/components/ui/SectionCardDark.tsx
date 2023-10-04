import React from 'react';
import { cn } from '../../lib/utils';

type Props = {
  children: React.ReactNode;
};

const SectionCardDarkInner = ({ children, className, ...rest }: Props & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('rounded-2xl border border-background/10 bg-background/5 p-8', className)} {...rest}>
      {children}
    </div>
  );
};

const SectionCardDark = ({ children, className, ...rest }: Props & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('rounded-2xl bg-foreground p-section', className)} {...rest}>
      {children}
    </div>
  );
};

SectionCardDark.CardInner = SectionCardDarkInner;
export default SectionCardDark;
