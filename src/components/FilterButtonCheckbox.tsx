import React from 'react';

type Props = {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterButtonCheckbox = ({ label, checked, onChange }: Props) => {
  return (
    <div>
      <label
        className={
          checked ? 'btn-checkbox btn-checkbox--active' : 'btn-checkbox'
        }
      >
        <input
          type='checkbox'
          className='h-0 w-0 opacity-0 absolute'
          checked={checked}
          onChange={onChange}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

export default FilterButtonCheckbox;
