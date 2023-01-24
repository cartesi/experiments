import Link from "@docusaurus/Link";
import React from "react";
import { PageFrontMatter } from "../theme/MDXContent";

type Props = {
  tag: PageFrontMatter["tags"][keyof PageFrontMatter["tags"]];
  type: keyof PageFrontMatter["tags"];
  isLink?: boolean;
};

const TagContent = ({ tag, type }: Props) => {
  return (
    <span className="inline-flex py-2 px-4 text-yellow-50 bg-blue-500 rounded-full text-sm group-hover:bg-blue-600 transition-colors">
      {type === "hackathon" && "Hackathon"}
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
      to={`/?tag=${type}:::${tag}`}
      className="no-underline hover:no-underline group"
    >
      <TagContent tag={tag} type={type} />
    </Link>
  ) : (
    <TagContent tag={tag} type={type} />
  );
};

export default Tag;
