import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { PageFrontMatter } from "../theme/MDXContent";
import Hero from "../components/Hero";
import ShowcaseItem from "../components/ShowcaseItem";
import Search from "../components/Search";
import debounce from "lodash.debounce";
import FilterButtonCheckbox from "../components/FilterButtonCheckbox";

import FilterGroup from "../components/FilterGroup";
import { useLocation } from "@docusaurus/router";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

type Tag = {
  label: keyof PageFrontMatter["tags"];
  options: PageFrontMatter["tags"][keyof PageFrontMatter["tags"]][];
};

export type TagsAvailable = Record<keyof PageFrontMatter["tags"], Tag>;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const location = useLocation();

  const { pageList, tagsAvailable } = siteConfig.customFields as {
    pageList: PageFrontMatter[];
    tagsAvailable: TagsAvailable;
  };

  const filteredPageList = React.useMemo(() => {
    // search
    if (searchTerm) {
      const filteredPageList = pageList.filter((page) => {
        const { title } = page;
        // console.log(title);
        return title.toLowerCase().includes(searchTerm.toLowerCase());
      });

      return filteredPageList;
    }

    // tags
    if (!selectedTags.length) return pageList;

    const filteredPageList = pageList.filter((page) => {
      const { tags } = page;
      // console.log(tags);

      return selectedTags.every((tag) => {
        const [key] = Object.keys(tag) as (keyof PageFrontMatter["tags"])[];
        const value = tag[key];

        // console.log(tags[key]);
        // console.log(value);
        if (Array.isArray(tags[key])) {
          // @ts-ignore
          return tags[key].includes(value);
        }
        return tags[key] === value;
      });
    });

    return filteredPageList;
  }, [pageList, selectedTags, searchTerm]);

  const handleTagClick = (
    type: keyof TagsAvailable,
    option: PageFrontMatter["tags"][keyof PageFrontMatter["tags"]]
  ) => {
    // set selected tags
    setSelectedTags((prev) => {
      const newSelectedTags = [...prev];
      const index = newSelectedTags.findIndex((tag) => tag[type] === option);

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
      window.history.replaceState({}, "", window.location.pathname);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
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
    const tags = searchParams.get("tag");
    // console.log(tags);

    if (tags) {
      const tagsArray = tags.split(":::");
      let value =
        tagsArray[1] as PageFrontMatter["tags"][keyof PageFrontMatter["tags"]];

      if (!isNaN(Number(value))) {
        value = Number(value);
      } else if (value === "true") {
        value = true;
      } else if (value === "false") {
        value = false;
      }

      handleTagClick(tagsArray[0] as keyof TagsAvailable, value);
    }
  }, [location.search]);

  return (
    <Layout
      title={`Hello ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero />
      <main className="py-8 sm:py-24 bg-yellow-100" id="dapps">
        <div className="container">
          <div className="flex md:items-center flex-col sm:flex-row justify-between gap-4 mb-6 sm:mb-8">
            {/*  */}
            <div className="flex gap-2 flex-col flex-wrap sm:flex-row">
              <FilterButtonCheckbox
                label="All"
                onChange={handleAllClick}
                checked={!selectedTags.length}
              />
              {/* TODO: make these dynamic */}
              <FilterButtonCheckbox
                label={tagsAvailable.hackathon.label}
                onChange={() => handleTagClick("hackathon", true)}
                checked={selectedTags.some((tag) => tag.hackathon === true)}
              />
              <FilterGroup
                tags={tagsAvailable.winner}
                filterTag="winner"
                handleClick={handleTagClick}
                selectedTags={selectedTags.filter((tag) => tag.winner)}
              />
              <FilterGroup
                tags={tagsAvailable.event}
                filterTag="event"
                handleClick={handleTagClick}
                selectedTags={selectedTags.filter((tag) => tag.event)}
              />
              <FilterGroup
                tags={tagsAvailable.projectStage}
                filterTag="projectStage"
                handleClick={handleTagClick}
                selectedTags={selectedTags.filter((tag) => tag.projectStage)}
              />
              <FilterGroup
                tags={tagsAvailable.technology}
                filterTag="technology"
                handleClick={handleTagClick}
                selectedTags={selectedTags.filter((tag) => tag.technology)}
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

          {/*  */}
          {filteredPageList.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPageList.map((page) => (
                <ShowcaseItem page={page} key={page.id} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-2 items-center justify-center py-24">
              <p className="text-gray-900 text-lg text-center m-0">
                No results found
              </p>
              <p>
                <button
                  className="bg-gray-900 border-0 text-white px-6 py-3 rounded-sm focus:outline-none hover:bg-gray-700"
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

          {/*  */}
        </div>
      </main>
    </Layout>
  );
}
