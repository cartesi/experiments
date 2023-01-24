import React from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

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
} from "react-share";

type Props = {
  title: string;
};

const SocialShare = ({ title }: Props) => {
  const url = ExecutionEnvironment.canUseDOM ? window.location.href : "";
  return (
    <>
      <h4 className="mb-0 mt-4">Share project</h4>
      <div className="flex gap-2 flex-wrap items-center">
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <EmailShareButton url={url}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </>
  );
};

export default SocialShare;
