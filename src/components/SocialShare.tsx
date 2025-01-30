import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  EmailIcon,
} from 'react-share';

type Props = {
  title: string;
};

const SocialShare = ({ title }: Props) => {
  const url = ExecutionEnvironment.canUseDOM ? window.location.href : '';
  return (
    <div className='flex gap-4 items-center'>
      <h4 className='m-0 uppercase text-sm font-bold tracking-wide shrink-0'>
        Share project
      </h4>
      <div className='flex gap-2 flex-wrap items-center'>
        {/* <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton> */}
        <EmailShareButton url={url}>
          <img src='/img/share-link.svg' alt='email' />
        </EmailShareButton>
        <TwitterShareButton url={url}>
          <img src='/img/share-x.svg' alt='twitter' />
        </TwitterShareButton>
        {/* <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton> */}
        <TelegramShareButton url={url}>
          <img src='/img/share-telegram.svg' alt='telegram' />
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default SocialShare;
