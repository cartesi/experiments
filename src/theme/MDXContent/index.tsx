import React from "react";
import MDXContent from "@theme-original/MDXContent";
import Link from "@docusaurus/Link";
import Tag from "@site/src/components/Tag";
import Gallery from "@site/src/components/Gallery";

import SocialShare from "@site/src/components/SocialShare";

export type PageFrontMatter = {
  id: string;
  path: string;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
  tags: {
    hackathon?: boolean;
    winner?: number;
    event?: string;
    projectStage?: string;
    technology?: string[];
  };
  links: {
    github: string;
    website?: string;
    twitter?: string;
    discord?: string;
  };
  team?: {
    name: string;
    linkedin: string;
    image: string;
  }[];
};

export default function MDXContentWrapper(props) {
  const { type } = props.children;
  const { frontMatter } = type;
  const { title, description, image, tags, gallery, links, team } =
    frontMatter as PageFrontMatter;

  return (
    <>
      {/*  */}
      <div className="flex flex-col justify-center py-12 lg:py-24 xl:min-h-[50vh]">
        <div className="container max-w-4xl">
          <div className="text-center text-yellow-50">
            <p className="mb-4">
              <img
                src={links.github + ".png"}
                width="100"
                alt={title}
                className="aspect-square w-24 h-24 object-cover rounded-full"
              />
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-8">
              {title}
            </h1>
            <div className="font-serif text-lg lg:text-xl">{description}</div>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16">
            <div className="flex flex-wrap gap-1 mt-auto">
              {Object.keys(tags)
                .filter((key) => key !== "technology")
                .map((key: keyof PageFrontMatter["tags"]) => {
                  if (tags[key]) {
                    return <Tag type={key} tag={tags[key]} isLink key={key} />;
                  }
                })}
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="bg-blue-500 py-4 lg:py-12">
        <div className="container">
          <div>
            <Gallery images={[image, ...(gallery || [])]} />
          </div>
        </div>
      </div>
      {/*  */}

      <div className="bg-yellow-50 py-12 lg:py-24 text-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 flex flex-col gap-4 order-last md:order-first">
              {/*  */}
              <div className="p-4 md:p-6 lg:p-8 bg-blue-100">
                <h3 className="lg:text-3xl mb-4">Links</h3>
                <div>
                  <div className="flex flex-col gap-2">
                    {links.github && (
                      <a
                        href={links.github}
                        className="text-gray-900 no-underline hover:no-underline flex gap-2 items-center hover:text-blue-500"
                      >
                        <span>
                          <svg
                            width="28"
                            height="27"
                            viewBox="0 0 28 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 fill-current"
                          >
                            <path d="M14 0.666687C6.63336 0.666687 0.666689 6.63335 0.666689 14C0.665177 16.7991 1.54511 19.5275 3.18164 21.7983C4.81818 24.069 7.12822 25.7668 9.78402 26.6507C10.4507 26.7667 10.7 26.3667 10.7 26.016C10.7 25.7 10.6827 24.6507 10.6827 23.5334C7.33336 24.1507 6.46669 22.7174 6.20002 21.9667C6.04936 21.5827 5.40002 20.4 4.83336 20.0827C4.36669 19.8334 3.70002 19.216 4.81602 19.2C5.86669 19.1827 6.61602 20.1667 6.86669 20.5667C8.06669 22.5827 9.98402 22.016 10.7494 21.6667C10.8667 20.8 11.216 20.2174 11.6 19.884C8.63336 19.5507 5.53336 18.4 5.53336 13.3C5.53336 11.8494 6.04936 10.6507 6.90002 9.71602C6.76669 9.38269 6.30002 8.01602 7.03336 6.18269C7.03336 6.18269 8.14936 5.83335 10.7 7.55069C11.7854 7.24943 12.9069 7.09781 14.0334 7.10002C15.1667 7.10002 16.3 7.24935 17.3667 7.54935C19.916 5.81602 21.0334 6.18402 21.0334 6.18402C21.7667 8.01735 21.3 9.38402 21.1667 9.71735C22.016 10.6507 22.5334 11.8334 22.5334 13.3C22.5334 18.4174 19.4174 19.5507 16.4507 19.884C16.9334 20.3 17.3507 21.1 17.3507 22.3507C17.3507 24.1334 17.3334 25.5667 17.3334 26.0174C17.3334 26.3667 17.584 26.7827 18.2507 26.6494C20.8974 25.7558 23.1972 24.0547 24.8266 21.7856C26.4559 19.5164 27.3326 16.7935 27.3334 14C27.3334 6.63335 21.3667 0.666687 14 0.666687Z" />
                          </svg>
                        </span>
                        <span className="truncate">{links.github}</span>
                      </a>
                    )}
                    {links.twitter && (
                      <a
                        href={links.twitter}
                        className="text-gray-900 no-underline hover:no-underline flex gap-2 items-center hover:text-blue-500"
                      >
                        <span>
                          <svg
                            width="27"
                            height="27"
                            viewBox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 fill-current"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M26.67 13.335C26.67 20.6997 20.6997 26.67 13.335 26.67C5.97028 26.67 0 20.6997 0 13.335C0 5.97028 5.97028 0 13.335 0C20.6997 0 26.67 5.97028 26.67 13.335ZM19.8703 8.58319C20.5806 8.49838 21.2562 8.30969 21.8852 8.03059C21.4136 8.73593 20.8201 9.35166 20.1326 9.84895C20.1399 9.99946 20.1432 10.1505 20.1432 10.3027C20.1432 14.9383 16.6145 20.2837 10.1622 20.2837C8.18109 20.2837 6.33751 19.7025 4.78481 18.7069C5.05938 18.74 5.33908 18.7569 5.62208 18.7569C7.26516 18.7569 8.77797 18.1958 9.97857 17.2547C8.44394 17.226 7.14838 16.2119 6.70197 14.8187C6.91646 14.859 7.13602 14.8804 7.36233 14.8804C7.68242 14.8804 7.99182 14.8382 8.28664 14.7574C6.68173 14.4351 5.4727 13.0177 5.4727 11.3179V11.2736C5.95984 11.5445 6.50475 11.6949 7.0619 11.7122C6.12075 11.0832 5.50136 10.0096 5.50136 8.79265C5.50136 8.14972 5.67429 7.54713 5.9764 7.02885C7.70655 9.15095 10.2914 10.5475 13.2069 10.6941C13.1475 10.4369 13.1165 10.169 13.1165 9.89441C13.1165 7.95651 14.6873 6.38642 16.624 6.38642C17.633 6.38642 18.5451 6.81205 19.1847 7.49379C19.9706 7.33943 20.7242 7.05149 21.4128 6.64248C21.1506 7.46119 20.5953 8.14909 19.8703 8.58319Z"
                            />
                          </svg>
                        </span>
                        <span className="truncate">{links.twitter}</span>
                      </a>
                    )}
                    {links.discord && (
                      <a
                        href={links.discord}
                        className="text-gray-900 no-underline hover:no-underline flex gap-2 items-center hover:text-blue-500"
                      >
                        <span>
                          <svg
                            width="24"
                            height="29"
                            viewBox="0 0 24 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 fill-current"
                          >
                            <path d="M9.43467 12.6666C10.2347 12.6666 10.8827 13.2666 10.868 14C10.868 14.7333 10.236 15.3333 9.43467 15.3333C8.648 15.3333 8 14.7333 8 14C8 13.2666 8.63333 12.6666 9.43467 12.6666ZM14.5653 12.6666C15.3667 12.6666 16 13.2666 16 14C16 14.7333 15.3667 15.3333 14.5653 15.3333C13.7787 15.3333 13.132 14.7333 13.132 14C13.132 13.2666 13.764 12.6666 14.5653 12.6666ZM21.188 0.666626C22.7387 0.666626 24 1.95463 24 3.55063V28.6666L21.052 26.0066L19.392 24.4386L17.636 22.772L18.364 25.3626H2.812C1.26133 25.3626 0 24.0746 0 22.4786V3.55063C0 1.95463 1.26133 0.666626 2.812 0.666626H21.1867H21.188ZM15.8947 18.9506C18.9253 18.8533 20.092 16.8226 20.092 16.8226C20.092 12.3146 18.116 8.65996 18.116 8.65996C16.1427 7.14929 14.2627 7.19063 14.2627 7.19063L14.0707 7.41463C16.4027 8.14263 17.4853 9.19329 17.4853 9.19329C16.2121 8.47594 14.8089 8.01908 13.3573 7.84929C12.4366 7.7453 11.5066 7.75425 10.588 7.87596C10.5053 7.87596 10.436 7.89063 10.3547 7.90396C9.87467 7.94663 8.708 8.12796 7.24133 8.78663C6.73467 9.02396 6.432 9.19329 6.432 9.19329C6.432 9.19329 7.57067 8.08663 10.0387 7.35863L9.90133 7.19063C9.90133 7.19063 8.02267 7.14929 6.048 8.66129C6.048 8.66129 4.07333 12.3146 4.07333 16.8226C4.07333 16.8226 5.22533 18.852 8.256 18.9506C8.256 18.9506 8.76267 18.3213 9.176 17.7893C7.43333 17.256 6.776 16.136 6.776 16.136C6.776 16.136 6.912 16.2346 7.15867 16.3746C7.172 16.388 7.18533 16.4026 7.21333 16.416C7.25467 16.4453 7.296 16.4586 7.33733 16.4866C7.68 16.6826 8.02267 16.836 8.33733 16.9626C8.9 17.1866 9.572 17.4106 10.3547 17.5653C11.5271 17.7951 12.7325 17.7996 13.9067 17.5786C14.5906 17.4566 15.2578 17.2547 15.8947 16.9773C16.3747 16.7946 16.9093 16.528 17.472 16.1506C17.472 16.1506 16.7867 17.2986 14.9893 17.8173C15.4013 18.3493 15.896 18.9506 15.896 18.9506H15.8947Z" />
                          </svg>
                        </span>
                        <span className="truncate">{links.discord}</span>
                      </a>
                    )}
                  </div>
                </div>
                {links.website && (
                  <div className="mt-6">
                    <a
                      href={links.website}
                      rel="noreferrer"
                      target="_blank"
                      className="btn no-underline hover:no-underline py-3  hover:text-white hover:bg-blue-600 transition-colors justify-center"
                    >
                      Give it a try
                    </a>
                  </div>
                )}
              </div>
              {/*  */}
              {/*  */}
              <div className="p-4 md:p-6 lg:p-8 bg-blue-100">
                <h3 className="lg:text-3xl mb-4">Team</h3>
                <div>
                  <div className="flex flex-col gap-2">
                    {team.map((member, i) => {
                      return (
                        <a
                          href={member.linkedin}
                          rel="noreferrer"
                          target="_blank"
                          className="hover:no-underline no-underline text-gray-900 hover:text-blue-500"
                          key={i}
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0">
                              <img
                                src={member.image}
                                width="100"
                                alt={member.name}
                                className="aspect-square w-12 h-12 object-cover rounded-full"
                              />
                            </div>
                            <div className="flex gap-2 items-center">
                              <div className="font-bold">{member.name}</div>
                              <div className="flex-shrink-0">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 17 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 block"
                                >
                                  <path
                                    d="M9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM9.70523 7.96747H9.71762V7.948L9.70523 7.96747ZM8.90006 0.818237C4.43659 0.818237 0.818237 4.43659 0.818237 8.90006C0.818237 13.3635 4.43659 16.9819 8.90006 16.9819C13.3635 16.9819 16.9819 13.3635 16.9819 8.90006C16.977 4.43861 13.3615 0.823114 8.90006 0.818237ZM6.87916 12.5384C6.87819 12.6129 6.81747 12.6729 6.7429 12.6729H5.18564C5.11136 12.6729 5.05114 12.6127 5.05114 12.5384V7.30564C5.05068 7.26966 5.06464 7.235 5.08991 7.20939C5.11518 7.18378 5.14966 7.16938 5.18564 7.16938H6.7429C6.77904 7.16938 6.8137 7.18373 6.83925 7.20928C6.8648 7.23484 6.87916 7.2695 6.87916 7.30564V12.5384ZM5.90941 6.47038C5.36895 6.47038 4.93082 6.03225 4.93082 5.49178C4.93082 4.95132 5.36895 4.51319 5.90941 4.51319C6.44987 4.51319 6.88801 4.95132 6.88801 5.49178C6.88848 5.75147 6.78553 6.00065 6.6019 6.18427C6.41828 6.3679 6.1691 6.47085 5.90941 6.47038ZM13.4692 12.5384C13.4682 12.6129 13.4075 12.6729 13.3329 12.6729H11.7757C11.74 12.6729 11.7058 12.6587 11.6806 12.6335C11.6554 12.6083 11.6412 12.574 11.6412 12.5384V9.72647C11.6412 8.98677 11.3775 8.48774 10.7157 8.48774C10.2931 8.4901 9.91764 8.75788 9.77778 9.15665C9.73113 9.30048 9.71075 9.45154 9.71762 9.60259V12.5384C9.71762 12.6136 9.65661 12.6746 9.58136 12.6746H8.0241C7.98812 12.6746 7.95364 12.6602 7.92837 12.6346C7.90309 12.609 7.88913 12.5744 7.8896 12.5384C7.8896 11.7916 7.90907 8.16567 7.8896 7.31271C7.88913 7.27674 7.90309 7.24207 7.92837 7.21647C7.95364 7.19086 7.98812 7.17645 8.0241 7.17645H9.57782C9.6141 7.17597 9.64904 7.19017 9.6747 7.21583C9.70036 7.24149 9.71456 7.27643 9.71408 7.31271V7.95508C10.0515 7.36941 10.6863 7.01963 11.3616 7.04727C12.5632 7.04727 13.4657 7.83298 13.4657 9.52473L13.4692 12.5384ZM9.71762 7.97278V7.95331L9.70523 7.97278H9.71762ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278ZM9.70523 7.97278H9.71762V7.95331L9.70523 7.97278Z"
                                    fill="#2D5ABE"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="p-4 md:p-6 lg:p-8 bg-blue-100">
                <h3 className="lg:text-3xl mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-1">
                  {tags.technology.map((tag, i) => {
                    return <Tag type="technology" tag={tag} key={i} isLink />;
                  })}
                </div>
              </div>
              {/*  */}

              {/*  */}
              <SocialShare title={title} />
              {/*  */}
            </div>
            <div className="md:col-span-8">
              <MDXContent {...props} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
