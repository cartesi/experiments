import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import Tag from '@site/src/components/Tag';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import { RiDiscordFill } from 'react-icons/ri';
import Gallery from '@site/src/components/Gallery';

import SocialShare from '@site/src/components/SocialShare';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import Container from '@site/src/components/ui/Container';
import Button from '@site/src/components/ui/Button';
import Alert from '@site/src/components/ui/Alert';
import ShowcaseItem from '@site/src/components/ShowcaseItem';

export type PageFrontMatter = {
  id: string;
  path: string;
  title: string;
  description: string;
  lastUpdated?: string;
  logo?: string;
  thumbnail: string;
  gallery?: {
    image: string;
    alt?: string;
  }[];
  tags: {
    projectStage?: string;
    projectTypes?: string[];
    languages?: string[];
    stacks_and_libraries?: string[];
    other_tags?: string[];
  };
  links: {
    github?: string[];
    website?: string[];
    twitter?: string[];
    discord?: string[];
    demo?: string;
  };
  team?: {
    name: string;
    linkedin?: string;
    twitter?: string;
    discord?: string;
    image?: string;
  }[];
};

export default function MDXContentWrapper(props) {
  const { type } = props.children;
  const { frontMatter } = type;
  const { title, description, lastUpdated, logo, tags, gallery, links, team } =
    frontMatter as PageFrontMatter;

  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();

  const { pageList } = siteConfig.customFields as {
    pageList: PageFrontMatter[];
  };

  const relatedPosts = React.useMemo(() => {
    const related = frontMatter.related;
    if (!related) return [];

    const relatedPosts = pageList.filter(page => {
      const { id } = page;
      return frontMatter.related.includes(id);
    });

    return relatedPosts;
  }, [frontMatter.related]);

  console.log(tags);

  return (
    <>
      {/*  */}
      <div className='flex flex-col justify-center pb-12 pt-[calc(3rem+var(--current-header-height))] bg-foreground text-background min-h-[60vh]'>
        <Container>
          <div className='text-center'>
            {logo && (
              <p className='mb-4'>
                <img
                  src={useBaseUrl(
                    `${siteConfig.customFields.projectsImagesPath}${location.pathname}${logo}`
                  )}
                  width='100'
                  alt={title}
                  className='aspect-square w-28 h-28 object-cover rounded-full mx-auto'
                />
              </p>
            )}
            <h1 className='text-5xl inline-block mx-auto sm:text-6xl lg:text-7xl mb-6'>
              {title}
            </h1>
            <div className='text-lg sm:text-xl lg:text-2xl font-light mx-auto max-w-screen-lg'>
              {description}
            </div>
          </div>
          <div className='mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-10'>
            <div className='flex flex-wrap gap-2 mt-auto'>
              {tags.projectStage && (
                <Tag type='projectStage' tag={tags.projectStage} />
              )}
              {tags.projectTypes &&
                tags.projectTypes.map((tag, i) => {
                  return <Tag type='projectTypes' tag={tag} key={i} isLink />;
                })}
              {tags.other_tags &&
                tags.other_tags.map((tag, i) => {
                  return <Tag type='other_tags' tag={tag} key={i} isLink />;
                })}
            </div>
          </div>
        </Container>
      </div>
      {/*  */}

      <div className='py-12 lg:py-24'>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24'>
            <div className='md:col-span-4 flex flex-col gap-4 order-last md:order-first'>
              {/*  */}
              {links && (
                <div className='p-4 md:p-6 lg:p-8 bg-card text-card-foreground rounded-xl'>
                  <h3 className='lg:text-2xl mb-6'>Links</h3>
                  <div>
                    <div className='flex flex-col gap-2'>
                      {links.website &&
                        links.website.map((url, i) => {
                          return (
                            <a
                              href={url}
                              key={i}
                              className='text-foreground hover:text-foreground no-underline hover:no-underline flex gap-2 items-center'
                            >
                              <span className='flex items-center shrink-0'>
                                <BiLink className='w-6 h-6 fill-current' />
                              </span>
                              <span className='truncate'>{url}</span>
                            </a>
                          );
                        })}
                      {links.github &&
                        links.github.map((url, i) => {
                          return (
                            <a
                              href={url}
                              key={i}
                              className='text-foreground hover:text-foreground no-underline hover:no-underline flex gap-2 items-center'
                            >
                              <span className='flex items-center shrink-0'>
                                <AiFillGithub className='w-6 h-6 fill-current' />
                              </span>
                              <span className='truncate'>{url}</span>
                            </a>
                          );
                        })}
                      {links.twitter &&
                        links.twitter.map((url, i) => {
                          return (
                            <a
                              href={url}
                              key={i}
                              className='text-foreground hover:text-foreground no-underline hover:no-underline flex gap-2 items-center'
                            >
                              <span className='flex items-center shrink-0'>
                                <AiFillTwitterCircle className='w-6 h-6 fill-current' />
                              </span>
                              <span className='truncate'>{url}</span>
                            </a>
                          );
                        })}
                      {links.discord &&
                        links.discord.map((url, i) => {
                          return (
                            <a
                              href={url}
                              key={i}
                              className='text-foreground hover:text-foreground no-underline hover:no-underline flex gap-2 items-center'
                            >
                              <span className='flex items-center shrink-0'>
                                <RiDiscordFill className='w-6 h-6 fill-current' />
                              </span>
                              <span className='truncate'>{url}</span>
                            </a>
                          );
                        })}
                    </div>
                  </div>
                  {links.demo && (
                    <div className='mt-6'>
                      <Button asChild className='w-full'>
                        <a
                          href={links.demo}
                          rel='noreferrer'
                          target='_blank'
                          className='btn no-underline hover:no-underline py-3  hover:text-white transition-colors justify-center'
                        >
                          Give it a try
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              )}
              {/*  */}
              {/*  */}
              {team && (
                <div className='p-4 md:p-6 lg:p-8 bg-card text-card-foreground rounded-xl'>
                  <h3 className='lg:text-2xl mb-6'>Team</h3>
                  <div>
                    <div className='flex flex-col gap-2'>
                      {team.map((member, i) => {
                        return (
                          <div className='flex items-center gap-4' key={i}>
                            {member.image && (
                              <div className='flex-shrink-0'>
                                <img
                                  src={member.image}
                                  width='100'
                                  alt={member.name}
                                  className='aspect-square w-12 h-12 object-cover rounded-full'
                                />
                              </div>
                            )}
                            <div className='flex flex-wrap gap-1 items-center'>
                              <div className='font-bold'>{member.name}</div>
                              {member.linkedin && (
                                <div className='flex-shrink-0'>
                                  <a
                                    href={member.linkedin}
                                    rel='noreferrer'
                                    target='_blank'
                                    className='flex hover:no-underline no-underline text-foreground hover:text-foreground   align-middle'
                                    key={i}
                                  >
                                    <AiFillLinkedin className='w-6 h-6 fill-current' />
                                  </a>
                                </div>
                              )}
                              {member.twitter && (
                                <div className='flex-shrink-0'>
                                  <a
                                    href={member.twitter}
                                    rel='noreferrer'
                                    target='_blank'
                                    className='flex hover:no-underline no-underline text-foreground hover:text-foreground align-middle'
                                    key={i}
                                  >
                                    <AiFillTwitterCircle className='w-6 h-6 fill-current' />
                                  </a>
                                </div>
                              )}
                              {member.discord && (
                                <div className='flex flex-shrink-0 items-center text-foreground py-1 text-sm rounded-lg gap-2'>
                                  <RiDiscordFill className='w-6 h-6 fill-current' />
                                  {member.discord}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              {/*  */}
              {/*  */}
              {(tags.languages || tags.stacks_and_libraries) && (
                <div className='p-4 md:p-6 lg:p-8 bg-card text-card-foreground rounded-xl'>
                  <h3 className='lg:text-2xl mb-6'>
                    Languages, Libraries & Stacks
                  </h3>
                  <div className='flex flex-wrap gap-1'>
                    {tags.languages &&
                      tags.languages.map((tag, i) => {
                        return (
                          <Tag type='languages' tag={tag} key={i} isLink />
                        );
                      })}

                    {tags.stacks_and_libraries &&
                      tags.stacks_and_libraries.map((tag, i) => {
                        return (
                          <Tag
                            type='stacks_and_libraries'
                            tag={tag}
                            key={i}
                            isLink
                          />
                        );
                      })}
                  </div>
                </div>
              )}
              {/*  */}

              {/*  */}
              <SocialShare title={title} />
              {/*  */}
            </div>
            <div className='md:col-span-8 prose'>
              {/*  */}
              {gallery && (
                <>
                  <h2>Gallery</h2>
                  <Gallery images={[...(gallery || [])]} />
                </>
              )}

              <MDXContent {...props} />

              <div className='mt-8 not-prose'>
                {lastUpdated && lastUpdated !== '' && (
                  <span className='mb-6 inline-block border-foreground-text pt-2 border-solid border-0 border-t text-xs muted-foreground italic'>
                    Last updated: {lastUpdated}
                  </span>
                )}
                <Alert text='Anyone is free to submit information about their project. Do your own research and use your best judgment when using or interacting with any of the projects listed in this directory. Being listed in this directory is not an endorsement from the Cartesi Foundation or any other related entity.' />
              </div>
            </div>
          </div>

          {relatedPosts && relatedPosts.length > 0 && (
            <div className='py-section'>
              <h2 className='lg:text-h2 mb-8 lg:mb-12'>
                Explore similar projects
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {relatedPosts.map(page => (
                  <ShowcaseItem page={page} key={page.id} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
