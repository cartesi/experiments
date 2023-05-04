import Link from "@docusaurus/Link";
import React from "react";
import { PageFrontMatter } from "../theme/MDXContent";
import Tag from "./Tag";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type Props = {
  page: PageFrontMatter;
};

const ShowcaseItem = ({ page }: Props) => {
  const { title, description, tags, path, thumbnail } = page;
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 relative p-6 sm:p-8 bg-white rounded-xl">
      <Link className="absolute inset-0 z-10" to={path} />
      <div className="overflow-hidden w-40 relative flex-shrink-0 rounded-lg mx-auto">
        {thumbnail && (
          <img
            src={useBaseUrl(
              `${siteConfig.customFields.projectsImagesPath}${path}/${thumbnail}`
            )}
            alt={title}
            className="w-full object-cover block transition-transform group-hover:scale-105 aspect-video rounded-lg"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex flex-col grow">
        <h3 className="text-lg mb-0 sm:text-xl lg:text-2xl font-bold">
          {title}
        </h3>
        <p className="text-sm mb-2">{description}</p>
        <div className="flex flex-wrap gap-1 mt-auto relative z-20">
          {/* {JSON.stringify(tags)} */}
          {tags.projectStage && (
            <Tag type="projectStage" tag={tags.projectStage} />
          )}
          {/*tags.event && <Tag type="event" tag={tags.event} />*/}
          {/*tags.winner && <Tag type="winner" tag={tags.winner} />*/}
          {tags.technology &&
            tags.technology.map((tag, i) => {
              return <Tag type="technology" tag={tag} key={i} isLink />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
