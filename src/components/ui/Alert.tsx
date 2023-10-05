import { Info } from 'lucide-react';
import React from 'react';

type Props = {
  text: string;
};

const Alert = ({ text }: Props) => {
  return (
    <div className='bg-card text-card-foreground text-sm flex gap-2 p-4 rounded-2xl mb-8'>
      <span className='p-1 shrink-0'>
        <Info className='w-4 h-4 text-primary stroke-current' />
      </span>
      <span>{text}</span>
    </div>
  );
};

export default Alert;
