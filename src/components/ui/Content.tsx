import React from 'react';

type Props = {
  infobar?: boolean;
  children: React.ReactNode;
};

const Content = ({ infobar = false, children }: Props) => {
  return (
    <div
      className={`flex-grow ${
        infobar
          ? 'pt-headerMobileInfobar lg:pt-headerDesktopInfobar'
          : 'pt-headerMobile lg:pt-headerDesktop'
      }`}
    >
      {children}
    </div>
  );
};

export default Content;
