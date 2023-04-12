import Link from "@docusaurus/Link";
import React from "react";
import { TagPathSeperator } from "../pages";
import { PageFrontMatter } from "../theme/MDXContent";

type Props = {
  tag: PageFrontMatter["tags"][keyof PageFrontMatter["tags"]];
  type: keyof PageFrontMatter["tags"];
  isLink?: boolean;
};

const TagContent = ({ tag, type, isLink }: Props) => {
  return (
    <span
      className={`inline-flex py-2 px-4 text-yellow-50 ${
        isLink ? "cursor-pointer" : "cursor-default"
      } ${
        (type === "technology" && "bg-blue-300 hover:bg-blue-400") ||
        "bg-blue-500 hover:bg-blue-600"
      } rounded-full text-sm transition-colors`}
    >
      {type === "event" && tag}
      {type === "projectStage" && tag}
      {type === "winner" && `Winner ${tag}`}
      {type === "technology" && tag}
    </span>
  );
};

const Tag = ({ tag, type, isLink }: Props) => {
  return isLink ? (
    <Link
      to={`/?tag=${type}${TagPathSeperator.value}${tag}`}
      className="no-underline hover:no-underline group cursor-pointer"
    >
      <TagContent tag={tag} type={type} isLink={isLink} />
    </Link>
  ) : (
    <TagContent tag={tag} type={type} isLink={isLink} />
  );
};

export default Tag;
