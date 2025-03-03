import React, { type ReactNode, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Header from '@site/src/components/Header';

export default function Navbar(): ReactNode {
  const {
    siteConfig: {
      customFields: {
        sanity: { infobar },
      },
    },
  } = useDocusaurusContext();

  const [headerHeight, setHeaderHeight] = useState(0);

  return <Header infobar={infobar} setHeaderHeight={setHeaderHeight} />;
}
