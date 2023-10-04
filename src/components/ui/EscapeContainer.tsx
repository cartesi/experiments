import React from 'react';

type Props = {
  children: React.ReactNode;
};

const EscapeContainer = ({ children }: Props) => {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        marginLeft: '0',
        marginRight: 'calc(-50vw + 50% + 0.5rem)',
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default EscapeContainer;
