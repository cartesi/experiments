import Link from '@docusaurus/Link';
import React from 'react';
import { PageFrontMatter } from '../theme/MDXContent';
import Tag from './Tag';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = {
  page: PageFrontMatter;
};

const tagsLimit = 5;

const ShowcaseItem = ({ page }: Props) => {
  const { title, description, tags, path, thumbnail } = page;
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className='flex flex-col gap-6 lg:gap-8 relative p-6 bg-card text-card-foreground rounded-3xl'>
      <Link className='absolute inset-0 z-10' to={path} />
      <div className='flex gap-4 items-center'>
        <div className='overflow-hidden w-24 relative flex-shrink-0 rounded-2xl'>
          {thumbnail && (
            <img
              src={useBaseUrl(
                `${siteConfig.customFields.projectsImagesPath}${path}/${thumbnail}`
              )}
              alt={title}
              className='w-full object-cover block transition-transform aspect-square rounded-2xl'
              loading='lazy'
            />
          )}
        </div>
        <div>
          {/* {JSON.stringify(tags)} */}
          {tags.projectStage && (
            <Tag type='projectStage' tag={tags.projectStage} />
          )}
        </div>
      </div>
      <div className='flex flex-col grow'>
        <h3 className='text-lg mb-1 sm:text-xl font-bold'>{title}</h3>
        <p className='text-sm mb-2 text-muted-foreground'>{description}</p>
        <div className='flex flex-wrap gap-1 mt-auto pt-2 relative z-20'>
          {/*tags.event && <Tag type="event" tag={tags.event} />*/}
          {/*tags.winner && <Tag type="winner" tag={tags.winner} />*/}
          {tags.technology &&
            tags.technology.slice(0, tagsLimit).map((tag, i) => {
              return <Tag type='technology' tag={tag} key={i} isLink />;
            })}
          {tags.technology && tags.technology.length > tagsLimit && (
            <Tag
              type='technology'
              tag={'+' + (tags.technology.length - tagsLimit) + ' more'}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
