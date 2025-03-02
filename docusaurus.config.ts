// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import { fetchSanityContent } from './sanity';
import 'dotenv/config';

const config: Config = {
  title: 'Rollup Lab - Projects Powered by Cartesi',
  tagline:
    "Application-specific rollups with a Linux runtime and Ethereum's security guarantees.",
  url: 'https://rolluplab.io/',
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
    supabase_url: process.env.SUPABASE_URL,
    supabase_key: process.env.SUPABASE_KEY,
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
            foundedOn: data.foundedOn,
            featured: data.featured,
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
          'C',
          'CSS',
          'Go',
          'GoDot',
          'HTML',
          'JavaScript',
          'Nelua',
          'Python',
          'Rust',
          'Solidity',
          'Typescript',
          'Bash',
        ].sort(),
      },
      stacks_and_libraries: {
        label: 'Stacks & Libraries',
        options: [
          'Alpaca',
          'Chainlink',
          'Covalent',
          'Graph',
          'Ethers.js',
          'Espresso Sequencer',
          'EigenLayer',
          'Ikemen-GO',
          'IPFS',
          'Fabric.js',
          'Hardhat',
          'Jupyter Notebook',
          'KNN',
          'Kubernetes',
          'LLM',
          'Linux',
          'mc2gen',
          'MetaMask',
          'Nix',
          'Node.js',
          'Node-canvas',
          'Next.js',
          'NumPu',
          'OpenCV',
          'Polygon',
          'Push',
          'rainbowkit',
          'React.js',
          'Redis',
          'RIV',
          'Sci-kit learn',
          'Stack OS',
          'Stockfish Chess Engine',
          'SQLite',
          'Svelte',
          'TailwindCSS',
          'Unity',
          'Vie',
          'wagmi.sh',
          'Wallet Connect',
          'web3.py',
          'web3.storage',
          'Worldcoin',
        ].sort(),
      },
      other_tags: {
        label: 'Tags',
        options: ['Cartesi Experiment Week'],
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: false,
        pages: {
          remarkPlugins: [],
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
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

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    image: 'img/socialLogo2023.png',
  },
};

export default async function createConfigAsync() {
  const sanityContent = await fetchSanityContent();
  return {
    ...config,
    customFields: {
      ...config.customFields,
      sanity: sanityContent,
    },
  };
}
