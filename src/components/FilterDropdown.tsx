import React from "react";

type Props = {
  children: React.ReactNode;
};

const FilterDropdown = React.forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => {
    return <div ref={ref}>{children}</div>;
  }
);

export default FilterDropdown;
