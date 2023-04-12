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
    <Link
      className="text-yellow-50 hover:text-yellow-50 hover:no-underline no-underline group h-full flex flex-col bg-gray-900 shadow-2xl"
      style={{ boxShadow: "0 0 10px rgba(14, 14, 41, 0.5)" }}
      to={path}
    >
      <div className="overflow-hidden">
        {thumbnail && (
          <img
            src={useBaseUrl(
              `${siteConfig.customFields.projectsImagesPath}${path}/${thumbnail}`
            )}
            alt={title}
            className="w-full object-cover block transition-transform group-hover:scale-105 aspect-video"
            loading="lazy"
          />
        )}
      </div>
      <div className="flex flex-col gap-3 p-6 sm:p-8 grow">
        <h3 className="font-serif text-lg sm:text-xl lg:text-2xl">{title}</h3>
        <p className="text-yellow-50/75">{description}</p>
        <div className="flex flex-wrap gap-1 mt-auto">
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
    </Link>
  );
};

export default ShowcaseItem;
