import React, { type ReactNode } from 'react';
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

  return <Header infobar={infobar} />;
}
