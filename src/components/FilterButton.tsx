import React from "react";

type Props = {
  label: React.ReactNode;
  active?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const FilterButton = ({ onClick, label, active }: Props) => {
  return (
    <button
      className={active ? "btn w-full" : "btn-outline w-full"}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FilterButton;
