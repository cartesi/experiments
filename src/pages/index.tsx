import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { PageFrontMatter } from "../theme/MDXContent";
import Hero from "../components/Hero";
import ShowcaseItem from "../components/ShowcaseItem";
import Search from "../components/Search";
import debounce from "lodash.debounce";
type Tag = {
  label: string;
  options: PageFrontMatter["tags"][keyof PageFrontMatter["tags"]][];
};

export type TagsAvailable = Record<keyof PageFrontMatter["tags"], Tag>;

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

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

      return newSelectedTags;
    });
  };

  const handleAllClick = () => {
    setSelectedTags([]);
  };

  const dropdownWinner = React.useRef<HTMLDivElement>(null);
  const dropdownEvent = React.useRef<HTMLDivElement>(null);
  const dropdownProjectStage = React.useRef<HTMLDivElement>(null);

  const handleDropdownClick = (dropdownRef) => {
    dropdownRef.current.classList.toggle("hidden");
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

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero />
      <main className="py-8 sm:py-24 bg-yellow-100">
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            {/*  */}
            <ul className="flex gap-4">
              <li className="relative">
                <div className="text-gray-900 flex">
                  <input
                    type="checkbox"
                    id="all"
                    onChange={handleAllClick}
                    checked={!selectedTags.length}
                  />
                  <label htmlFor="all">All</label>
                </div>
              </li>
              <li className="relative">
                <div className="text-gray-900 flex">
                  <input
                    type="checkbox"
                    id="hackathon"
                    onChange={() => handleTagClick("hackathon", true)}
                    checked={selectedTags.some((tag) => tag.hackathon === true)}
                  />
                  <label htmlFor="hackathon">
                    {tagsAvailable.hackathon.label}
                  </label>
                </div>
              </li>
              <li className="relative">
                <button onClick={() => handleDropdownClick(dropdownWinner)}>
                  {tagsAvailable.winner.label}
                </button>
                <div
                  className="absolute bg-white p-4 rounded h-64 overflow-auto z-20 shadow-sm hidden"
                  ref={dropdownWinner}
                >
                  {tagsAvailable.winner["options"].map((option, i) => (
                    <div key={i} className="text-gray-900 flex">
                      <input
                        type="checkbox"
                        id={`winner-${i}`}
                        onChange={() => handleTagClick("winner", option)}
                        checked={selectedTags.some(
                          (tag) => tag.winner === option
                        )}
                      />
                      <label htmlFor={`winner-${i}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </li>
              <li className="relative">
                <button onClick={() => handleDropdownClick(dropdownEvent)}>
                  {tagsAvailable.event.label}
                </button>
                <div
                  className="absolute bg-white p-4 rounded h-64 overflow-auto z-20 shadow-sm hidden"
                  ref={dropdownEvent}
                >
                  {tagsAvailable.event["options"].map((option, i) => (
                    <div key={i} className="text-gray-900 flex">
                      <input
                        type="checkbox"
                        id={`event-${i}`}
                        onChange={() => handleTagClick("event", option)}
                        checked={selectedTags.some(
                          (tag) => tag.event === option
                        )}
                      />
                      <label htmlFor={`event-${i}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </li>
              <li className="relative">
                <button
                  onClick={() => handleDropdownClick(dropdownProjectStage)}
                >
                  {tagsAvailable.projectStage.label}
                </button>
                <div
                  className="absolute bg-white p-4 rounded h-64 overflow-auto z-20 shadow-sm hidden"
                  ref={dropdownProjectStage}
                >
                  {tagsAvailable.projectStage["options"].map((option, i) => (
                    <div key={i} className="text-gray-900 flex">
                      <input
                        type="checkbox"
                        id={`projectStage-${i}`}
                        onChange={() => handleTagClick("projectStage", option)}
                        checked={selectedTags.some(
                          (tag) => tag.projectStage === option
                        )}
                      />
                      <label htmlFor={`projectStage-${i}`}>{option}</label>
                    </div>
                  ))}
                </div>
              </li>

              {/* TODO - the filter is not working with these vecause it's an arr */}
              {/* <li className="relative">
              <button onClick={handleDropdownClick}>
                {tagsAvailable.technology.label}
              </button>
              <div className="absolute bg-white p-4 rounded h-64 overflow-auto z-20 shadow-sm hidden">
                {tagsAvailable.technology["options"].map((option, i) => (
                  <div key={i} className="text-gray-900 flex">
                    <input
                      type="checkbox"
                      id={`technology-${i}`}
                      onChange={() => handleTagClick("technology", option)}
                    />
                    <label htmlFor={`technology-${i}`}>{option}</label>
                  </div>
                ))}
              </div>
            </li> */}
            </ul>
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
            <p className="text-gray-900 text-lg text-center py-24">
              No results found
            </p>
          )}

          {/*  */}
        </div>
      </main>
    </Layout>
  );
}
