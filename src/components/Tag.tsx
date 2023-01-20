import React from "react";
import { PageFrontMatter } from "../theme/MDXContent";

type Props = {
  tag: PageFrontMatter["tags"][keyof PageFrontMatter["tags"]];
  type: keyof PageFrontMatter["tags"];
};

const Tag = ({ tag, type }: Props) => {
  return (
    <span className="inline-flex py-2 px-4 text-yellow-50 bg-blue-500 rounded-full text-sm">
      {type === "hackathon" && "Hackathon"}
      {type === "event" && tag}
      {type === "projectStage" && tag}
      {type === "winner" && `Winner ${tag} place`}
      {type === "technology" && tag}
    </span>
  );
};

export default Tag;
