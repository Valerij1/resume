// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Резюме',
  tagline: 'Особистий сайт-резюме',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://your-site.example.com',
  baseUrl: '/',

  organizationName: 'yourname', // замени на свой GitHub user/org
  projectName: 'resume-docusaurus', // замени на имя репозитория

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk','en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // документация сразу на корне
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
     
      items: [
             
        {
        type: 'localeDropdown',
        position: 'right', // можно 'left' или 'right'
      },
             
        {
          href: 'https://github.com/valerij1/resume',
          label: 'GitHub',
          position: 'right',
        },
             ],
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
