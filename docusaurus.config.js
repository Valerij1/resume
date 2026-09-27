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

  url: 'https://Valerij1.github.io',
  baseUrl: '/resume/',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '419E6191A7FA313E',
      },
    },
  ],

  organizationName: 'Valerij1', // замени на свой GitHub user/org
  projectName: 'resume', // замени на имя репозитория

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

    algolia: {
  appId: 'LS50FQ3M43',
  apiKey: 'd423cb27f7292e481c086aefa8cdf475',
  indexName: 'valerij1_github_io_ls50fq3m43_pages',
  contextualSearch: false,
}, 

    navbar: {
     
      items: [
    {
      type: 'search',
      position: 'right',
    },

      {
        type: 'localeDropdown',
        position: 'right', // можно 'left' или 'right'
      },
        // Украинская версия резюме
      {
        href: 'https://valerij1.github.io/resume/222.pdf',
        label: 'Резюме',
        position: 'right',
        target: '_blank',
      },
      {
        href: 'https://valerij1.github.io/resume/cv_en.pdf',
        label: 'Резюме (англ)',
        position: 'right',
        target: '_blank',
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
