// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DApps Showcase - Cartesi",
  tagline: "The Blockchain OS",
  url: "https://showcase.cartesi.io",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cartesi", // Usually your GitHub org/user name.
  projectName: "cartesi", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  customFields: {
    pageList: (function () {
      const fs = require("fs");
      const path = require("path");

      const SHOWCASES_PATH = "showcase";
      const pages = fs.readdirSync(
        path.resolve(__dirname, `src/pages/${SHOWCASES_PATH}`)
      );
      const fileType = ".md";
      const matter = require("gray-matter");

      const data = pages
        .filter((page) => page.endsWith(fileType))
        .map((page) => {
          const fileName = page.replace(fileType, "");

          const file = fs.readFileSync(
            path.resolve(__dirname, `src/pages/${SHOWCASES_PATH}/${page}`)
          );

          const { data } = matter(file);
          // console.log(data);
          return {
            id: fileName,
            path: `/${SHOWCASES_PATH}/${fileName}`,
            title: data.title,
            description: data.description,
            thumbnail: data.thumbnail,
            tags: data.tags,
          };
        });

      return data;
    })(),
    tagsAvailable: {
      hackathon: {
        label: "Hackathon",
        options: [0, 1],
      },
      winner: {
        label: "Winner",
        options: [
          "1st Place",
          "2nd Place",
          "3rd Place",
          "4th Place",
          "5th Place",
        ],
      },
      event: {
        label: "Event",
        options: [
          "ETH San Francisco",
          "Hack Boston",
          "ETH India",
          "ETH Bogota",
          "ETH Sao Paulo",
        ],
      },
      projectStage: {
        label: "Project Stage",
        options: [
          "Hackathon Project",
          "One time project",
          "In progress - Pre-Alpha",
          "In progress - Alpha",
          "In progress - Beta",
          "Release Candidate",
          "Stable release",
        ],
      },
      technology: {
        label: "Technology",
        options: [
          "Cartesi Rollups",
          "Covalent",
          "Ethers.js",
          "ENPS",
          "Python",
          "ReactJS",
          "ReactBootstrap",
          "NextJS",
          "Node.js",
          "MongoDB",
          "DigitalOcean",
          "Go",
          "Lua",
          "Linux",
          "MetaMask",
          "Polygon",
          "Push",
          "Rust",
          "StackOS",
          "Solidity",
          "TailwindCSS",
          "Tellor",
          "TypeScript",
          "NFTPort",
          "Hardhat",
          "XMTP",
        ].sort(),
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        pages: {
          remarkPlugins: [],
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: "Cartesi Logo",
          src: "img/logo.svg",
          srcDark: "img/logo_dark.svg",
          height: "52px",
        },
        items: [
          {
            to: "https://cartesi.io/",
            label: "Go to Cartesi.io",
            position: "right",
          },
          {
            to: "https://docs.cartesi.io/",
            label: "Developers",
            position: "right",
          },
          {
            to: "https://discord.gg/Pt2NrnS",
            position: "right",
            className: "header-discord-link",
            "aria-label": "Discord",
          },
          {
            to: "https://github.com/cartesi",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Ecosystem",
            items: [
              {
                label: "The Blockchain OS",
                to: "https://cartesi.io/",
              },
              {
                label: "Our Whitepaper",
                to: "https://cartesi.io/cartesi_whitepaper.pdf",
              },
              {
                label: "Foundation Notice",
                to: "https://cartesi.io/foundation_notice.pdf",
              },
            ],
          },
          {
            title: "Developers",
            items: [
              {
                label: "Template DApp",
                to: "https://github.com/cartesi/rollups-examples/tree/main/custom-dapps",
              },
              {
                label: "Tech Articles",
                to: "https://medium.com/cartesi/tagged/tech",
              },
              {
                label: "Bug Bounty",
                to: "https://immunefi.com/bounty/cartesi/",
              },
              {
                label: "Run a Node",
                to: "https://explorer.cartesi.io/staking",
              },
              {
                label: "CIP Process",
                to: "https://github.com/cartesi/cips",
              },
            ],
          },
          {
            title: "Github",
            items: [
              {
                label: "Rollups Examples",
                to: "https://github.com/cartesi/rollups-examples",
              },
              {
                label: "Machine Emulator",
                to: "https://github.com/cartesi/machine-emulator-tools",
              },
              {
                label: "Noether Node",
                to: "https://github.com/cartesi/noether",
              },
              {
                label: "Cartesi Compute Tutorials",
                to: "https://github.com/cartesi/descartes-tutorials",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Youtube",
                to: "https://www.youtube.com/c/Cartesiproject/videos",
              },
              {
                label: "Discord",
                to: "https://discord.gg/Pt2NrnS",
              },
              {
                label: "Medium",
                to: "https://www.medium.com/cartesi",
              },
              {
                label: "Twitter",
                to: "https://www.twitter.com/cartesiproject",
              },
              {
                label: "Telegram",
                to: "https://t.me/cartesiannouncements",
              },
              {
                label: "Reddit",
                to: "https://www.reddit.com/r/cartesi/",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
