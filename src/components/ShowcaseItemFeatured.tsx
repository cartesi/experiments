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

const ShowcaseItemFeatured = ({ page }: Props) => {
  const { title, description, foundedOn, tags, path, thumbnail } = page;
  const { siteConfig } = useDocusaurusContext();

  const languages_libraries_stacks = Array();
  if (tags.languages) languages_libraries_stacks.push(...tags.languages);
  if (tags.stacks_and_libraries)
    languages_libraries_stacks.push(...tags.stacks_and_libraries);

  return (
    <div className='flex flex-col gap-6 lg:gap-8 relative p-6 pb-4 rounded-3xl h-full bg-gradient-to-b from-white/5 to-transparent'>
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
        <p className='text-sm mb-2 text-background/50'>{description}</p>
        <div className='flex flex-wrap gap-1 mt-auto pt-2 relative z-20'>
          {languages_libraries_stacks &&
            languages_libraries_stacks.slice(0, tagsLimit).map((tag, i) => {
              return (
                <Tag
                  contentClass='border-muted/20 text-muted/30 bg-transparent'
                  type='languages'
                  tag={tag}
                  key={i}
                  isLink
                />
              );
            })}
          {languages_libraries_stacks &&
            languages_libraries_stacks.length > tagsLimit && (
              <Tag
                type='languages'
                contentClass='border-0 bg-transparent'
                tag={
                  '+' +
                  (languages_libraries_stacks.length - tagsLimit) +
                  ' more'
                }
              />
            )}
        </div>
        {foundedOn && foundedOn != '' && (
          <div className='pt-4 text-xs text-background/50 italic'>
            Project founded on: {foundedOn}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowcaseItemFeatured;
