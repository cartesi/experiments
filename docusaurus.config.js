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
      projectTypes: {
        label: 'Type',
        options: [
          'Games',
          'AI/ML',
          'DeFi',
          'Autonomous World',
          'Dev-Tool',
          'Social Identity',
          'Art',
          'IoT',
          'Others',
        ],
      },
      languages: {
        label: 'Languages',
        options: [
          'C++',
          'Go',
          'GoDot',
          'JavaScript',
          'Python',
          'Rust',
          'Typescript',
        ].sort(),
      },
      stacks_and_libraries: {
        label: 'Stacks & Libraries',
        options: [
          'Alpaca',
          'Chainlink',
          'Covalent',
          'Graph',
          'Ikemen-GO',
          'IPFS',
          'Jupyter Notebook',
          'KNN',
          'LLM',
          'mc2gen',
          'Nix',
          'NumPu',
          'OpenCV',
          'Polygon',
          'Push',
          'rainbowkit',
          'Sci-kit learn',
          'Stack OS',
          'Stockfish Chess Engine',
          'SQLite',
          'Unity',
          'Vie',
          'wagmi.sh',
          'Wallet Connect',
          'web3.py',
          'web3.storage',
          'Worldcoin',
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
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'img/socialLogo2023.png',
    }),
};

module.exports = config;
