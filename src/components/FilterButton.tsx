import React from 'react';
import Button from './ui/Button';

type Props = {
  label: React.ReactNode;
  active?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const FilterButton = ({ onClick, label, active }: Props) => {
  return (
    <Button variant={'ghost'} type='button' onClick={onClick}>
      {label}
    </Button>
  );
};

export default FilterButton;
