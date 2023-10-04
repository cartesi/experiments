/* ! Note - there are small changes in the css - different from the marketing site */
/* ! Warning - running https://docusaurus.io/docs/swizzling and selecting the footer comp - will overried this file  */

import FooterSite from '@site/src/components/Footer';
import React from 'react';

function Footer() {
  return (
    <>
      <FooterSite />
    </>
  );
}

export default React.memo(Footer);
