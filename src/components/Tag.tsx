import Link from '@docusaurus/Link';
import React from 'react';
import { TagPathSeperator } from '../pages';
import { PageFrontMatter } from '../theme/MDXContent';

type Props = {
  tag: PageFrontMatter['tags'][keyof PageFrontMatter['tags']];
  type: keyof PageFrontMatter['tags'];
  isLink?: boolean;
};

type TagColours = {
  option: string;
  styles: string;
};

type Tag = {
  label: keyof PageFrontMatter['tags'];
  options: PageFrontMatter['tags'][keyof PageFrontMatter['tags']][];
  colours: TagColours[];
};

export const projectStageColours = [
  {
    option: 'Stable release',
    styles:
      'cursor-pointer bg-secondary border-secondary text-secondary-foreground',
  },
  {
    option: 'Release Candidate',
    styles: 'cursor-pointer bg-tag1 border-tag1 text-secondary-foreground',
  },
  {
    option: 'In progress - Beta',
    styles: 'cursor-pointer bg-tag2 border-tag2 text-secondary-foreground',
  },
  {
    option: 'In progress - Alpha',
    styles: 'cursor-pointer bg-tag2 border-tag2 text-secondary-foreground',
  },
  {
    option: 'In progress - Pre-Alpha',
    styles: 'cursor-pointer bg-tag2 border-tag2 text-secondary-foreground',
  },
  {
    option: 'Proof of concept',
    styles: 'cursor-pointer bg-tag3 border-tag3 text-secondary-foreground',
  },
  {
    option: 'Hackathon Project',
    styles: 'cursor-pointer bg-tag4 border-tag4 text-secondary-foreground',
  },
];

const TagContent = ({ tag, type }: Props) => {
  return (
    <span
      className={`inline-flex text-center py-[.5em] px-[1em] border border-solid items-center rounded-full text-xs transition-colors uppercase tracking-wide font-heading
        ${
          type === 'projectStage'
            ? projectStageColours.find(item => item.option === tag).styles
            : 'cursor-default bg-card text-card-foreground border-[rgba(0,0,0,.2)]'
        }`}
    >
      {tag}
    </span>
  );
};

const Tag = ({ tag, type, isLink }: Props) => {
  return isLink ? (
    <Link
      to={`/?tag=${type}${TagPathSeperator.value}${tag}`}
      className='no-underline hover:no-underline group cursor-pointer leading-none text-foreground hover:text-foreground transition-colors'
    >
      <TagContent tag={tag} type={type} />
    </Link>
  ) : (
    <span className='no-underline hover:no-underline group cursor-pointer leading-none text-foreground hover:text-foreground transition-colors'>
      <TagContent tag={tag} type={type} />
    </span>
  );
};

export default Tag;
