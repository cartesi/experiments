import * as React from 'react';
import { cn } from '../../lib/utils';
import { Search } from 'lucide-react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

type Props = InputProps & {
  isSearch?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, Props>(({ className, type, isSearch, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={cn(
          'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
          isSearch && 'pr-10',
          className,
        )}
        ref={ref}
        {...props}
      />
      {isSearch && <Search className="absolute right-0 top-0 mr-3 h-full w-5 text-muted-foreground" />}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
