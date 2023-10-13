import Link from '@docusaurus/Link';
import React from 'react';
import { TagPathSeperator } from '../pages';
import { PageFrontMatter } from '../theme/MDXContent';
import { cn } from '../lib/utils';

type Props = {
  tag: PageFrontMatter['tags'][keyof PageFrontMatter['tags']];
  type: keyof PageFrontMatter['tags'];
  isLink?: boolean;
};

const TagContent = ({ tag, type }: Props) => {
  return (
    <span
      className={cn(
        'inline-flex text-center py-[.5em] px-[1em] bg-card text-card-foreground border border-solid border-[rgba(0,0,0,.2)] items-center rounded-full text-xs transition-colors font-heading uppercase tracking-wide',
        type === 'projectStage'
          ? 'cursor-pointer bg-secondary border-secondary text-secondary-foreground font-bold'
          : 'cursor-default'
      )}
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
