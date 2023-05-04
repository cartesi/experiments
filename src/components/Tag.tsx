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
      className={`inline-flex py-1 px-3 font-semibold border border-solid items-center ${
        isLink ? "cursor-pointer" : "cursor-default"
      } ${
        (type === "technology" &&
          "bg-slate-300/20 hover:bg-slate-200 text-slate-900 border-slate-100") ||
        "bg-white/80  border-slate-300"
      } rounded-full text-sm font-semibold transition-colors`}
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
      className="no-underline hover:no-underline group cursor-pointer leading-none text-gray-800 hover:text-gray-800"
    >
      <TagContent tag={tag} type={type} isLink={isLink} />
    </Link>
  ) : (
    <TagContent tag={tag} type={type} isLink={isLink} />
  );
};

export default Tag;
