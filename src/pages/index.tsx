import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { PageFrontMatter } from '../theme/MDXContent';
import Hero from '../components/Hero';
import ShowcaseItem from '../components/ShowcaseItem';
import Search from '../components/Search';
import debounce from 'lodash.debounce';
import FilterButtonCheckbox from '../components/FilterButtonCheckbox';

import FilterGroup from '../components/FilterGroup';
import { useLocation } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import StartBuilding from '../components/StartBuilding';
import Container from '../components/ui/Container';

type Tag = {
  label: keyof PageFrontMatter['tags'];
  options: PageFrontMatter['tags'][keyof PageFrontMatter['tags']][];
};

export type TagsAvailable = Record<keyof PageFrontMatter['tags'], Tag>;

export enum TagPathSeperator {
  value = '|',
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

  const location = useLocation();

  const { pageList, tagsAvailable } = siteConfig.customFields as {
    pageList: PageFrontMatter[];
    tagsAvailable: TagsAvailable;
  };

  const sortList = (list: PageFrontMatter[]) => {
    const sortIndexes = tagsAvailable.projectStage.options.reduce(
      (acc, option: number, index) => {
        acc[option] = index;
        return acc;
      },
      {}
    );

    // console.log(sortIndexes);

    list.sort((a, b) => {
      const aIndex = sortIndexes[a.tags.projectStage];
      const bIndex = sortIndexes[b.tags.projectStage];

      return aIndex - bIndex;
    });

    return list;
  };

  const filteredPageList = React.useMemo(() => {
    // search
    if (searchTerm) {
      const filteredPageList = pageList.filter(page => {
        const { title } = page;
        // console.log(title);
        return title.toLowerCase().includes(searchTerm.toLowerCase());
      });

      return filteredPageList;
    }

    // tags
    if (!selectedTags.length) return sortList(pageList);

    // AND logic
    //   const filteredPageList = pageList.filter((page) => {
    //     const { tags } = page;

    //     return selectedTags.every((tag) => {
    //       const [key] = Object.keys(tag) as (keyof PageFrontMatter["tags"])[];
    //       const value = tag[key];

    //       // console.log(tags[key]);
    //       // console.log(value);
    //       if (Array.isArray(tags[key])) {
    //         // @ts-ignore
    //         return tags[key].includes(value);
    //       }
    //       return tags[key] === value;
    //     });
    //   });
    //   return filteredPageList;
    // }, [pageList, selectedTags, searchTerm]);

    // OR logic
    const filteredPageList = pageList.filter(page => {
      const { tags } = page;

      return selectedTags.some(tag => {
        const [key] = Object.keys(tag) as (keyof PageFrontMatter['tags'])[];
        const value = tag[key];

        if (Array.isArray(tags[key])) {
          // @ts-ignore
          return tags[key].includes(value);
        }
        return tags[key] === value;
      });
    });

    return sortList(filteredPageList);
  }, [pageList, selectedTags, searchTerm]);

  const handleTagClick = (
    type: keyof TagsAvailable,
    option: PageFrontMatter['tags'][keyof PageFrontMatter['tags']]
  ) => {
    // set selected tags
    setSelectedTags(prev => {
      const newSelectedTags = [...prev];
      const index = newSelectedTags.findIndex(tag => tag[type] === option);

      if (index === -1) {
        newSelectedTags.push({ [type]: option });
      } else {
        newSelectedTags.splice(index, 1);
      }

      // console.log(newSelectedTags);

      return newSelectedTags;
    });
  };

  const handleAllClick = () => {
    setSelectedTags([]);
    if (ExecutionEnvironment.canUseDOM) {
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const debouncedSearchResults = React.useMemo(() => {
    return debounce(handleSearch, 300);
  }, []);

  React.useEffect(() => {
    return () => {
      debouncedSearchResults.cancel();
    };
  });

  // handle ?tag=...

  React.useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;
    const searchParams = new URLSearchParams(location.search);
    const tags = searchParams.get('tag');
    // console.log(tags);

    if (tags) {
      const tagsArray = tags.split(TagPathSeperator.value);
      let value =
        tagsArray[1] as PageFrontMatter['tags'][keyof PageFrontMatter['tags']];

      if (!isNaN(Number(value))) {
        value = Number(value);
      }

      handleTagClick(tagsArray[0] as keyof TagsAvailable, value);
    }
  }, [location.search]);

  return (
    <Layout
      title={``}
      description='Cartesi Rollups offer a modular scaling solution, deployable as L2, L3, or sovereign rollups, while maintaining strong base layer security guarantees.'
    >
      <Hero />
      <main className='pb-8 sm:pb-24' id='dapps'>
        <div className=' bg-card text-card-foreground py-8'>
          <Container>
            <div className='flex md:items-center flex-col sm:flex-row justify-between gap-4'>
              {/*  */}
              <div className='flex gap-2 flex-col flex-wrap sm:flex-row'>
                <FilterButtonCheckbox
                  label='View All'
                  onChange={handleAllClick}
                  checked={!selectedTags.length}
                />
                {/* TODO: make these dynamic */}
                <FilterGroup
                  tags={tagsAvailable.projectStage}
                  filterTag='projectStage'
                  handleClick={handleTagClick}
                  selectedTags={selectedTags.filter(tag => tag.projectStage)}
                />
                <FilterGroup
                  tags={tagsAvailable.event}
                  filterTag='event'
                  handleClick={handleTagClick}
                  selectedTags={selectedTags.filter(tag => tag.event)}
                />
                <FilterGroup
                  tags={tagsAvailable.winner}
                  filterTag='winner'
                  handleClick={handleTagClick}
                  selectedTags={selectedTags.filter(tag => tag.winner)}
                />
                <FilterGroup
                  tags={tagsAvailable.technology}
                  filterTag='technology'
                  handleClick={handleTagClick}
                  selectedTags={selectedTags.filter(tag => tag.technology)}
                />
              </div>
              {/*  */}

              {/*  */}
              <Search
                handleSearch={debouncedSearchResults}
                clearSearch={clearSearch}
                searchTerm={searchTerm}
              />
            </div>
          </Container>
        </div>
        <div className='pt-12 pb-24'>
          <Container>
            {/*  */}
            {filteredPageList.length ? (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {filteredPageList.map(page => (
                  <ShowcaseItem page={page} key={page.id} />
                ))}
              </div>
            ) : (
              <div className='flex flex-col gap-2 items-center justify-center py-24'>
                <p className='text-gray-600 text-center m-0'>
                  No results found
                </p>
                <p>
                  <button
                    className='bg-gray-700 border-0 rounded-md text-white text-base px-6 py-3 focus:outline-none hover:bg-gray-700 cursor-pointer'
                    onClick={() => {
                      clearSearch();
                      handleAllClick();
                    }}
                  >
                    Clear search
                  </button>
                </p>
              </div>
            )}
          </Container>
        </div>

        <StartBuilding />
      </main>
    </Layout>
  );
}
