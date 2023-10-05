// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rollup Lab - Projects Powered by Cartesi',
  tagline:
    "Application-specific rollups with a Linux runtime and Ethereum's security guarantees.",
  url: 'https://showcase.cartesi.io',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cartesi', // Usually your GitHub org/user name.
  projectName: 'cartesi', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Plus+Jakarta+Sans:wght@500;600&display=swap',
  ],

  customFields: {
    projectsImagesPath: '/projects',
    pageList: (function () {
      const fs = require('fs');
      const path = require('path');

      const pages = fs.readdirSync(path.resolve(__dirname, `src/pages`));
      const fileType = '.md';
      const matter = require('gray-matter');

      const data = pages
        .filter(page => page.endsWith(fileType))
        .map(page => {
          const fileName = page.replace(fileType, '');
          const file = fs.readFileSync(
            path.resolve(__dirname, `src/pages/${page}`)
          );
          const { data } = matter(file);
          return {
            id: fileName,
            path: `/${fileName}`,
            title: data.title,
            description: data.description,
            thumbnail: data.thumbnail,
            tags: data.tags,
          };
        });

      return data;
    })(),
    tagsAvailable: {
      projectStage: {
        label: 'Project Stage',
        options: [
          'Stable release',
          'Release Candidate',
          'In progress - Beta',
          'In progress - Alpha',
          'In progress - Pre-Alpha',
          'Proof of concept',
          'Hackathon Project',
        ],
      },
      event: {
        label: 'Event',
        options: [
          'ETH San Francisco',
          'Hack Boston',
          'ETH India',
          'ETH Bogota',
          'ETH Sao Paulo',
          'ETHGlobal Lisbon',
          'ETHGlobal Paris',
          'Inteli Challenge',
        ],
      },
      winner: {
        label: 'Winner',
        options: ['1st Place', '2nd Place', '3rd Place', '4th Place'],
      },
      technology: {
        label: 'Technology',
        options: [
          'Covalent',
          'C++',
          'CSS',
          'DigitalOcean',
          'Docker',
          'ENPS',
          'Ethers.js',
          'Go',
          'Hardhat',
          'HCL',
          'HTML',
          'JavaScript',
          'Linux',
          'Lua',
          'MetaMask',
          'mc2gen',
          'MongoDB',
          'NextJS',
          //"NFTPort", // Ghar on Chain
          'Node.js',
          'Nix',
          'Polygon',
          //"Push", // Ghar on Chain
          'Python',
          'ReactJS',
          //"ReactBootstrap", // Ghar on Chain
          'Rust',
          'Sci-kit learn',
          'Solidity',
          'SQLite',
          'SCSS',
          'StackOS',
          'TailwindCSS',
          'TypeScript',
          'Unity',
          'Vue',
        ].sort(),
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        pages: {
          remarkPlugins: [],
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-PQH24DW',
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
