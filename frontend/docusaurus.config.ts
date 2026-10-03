import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const repoUrl = 'https://github.com/elizfab/portal-dev';
const baseUrl = '/portal-dev/';

const config: Config = {
  title: 'Portal Dev',
  tagline: 'Caderno de estudos: documentação técnica de frontend, backend, cloud, DevOps e muito mais.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    faster: true,
  },

  // GitHub Pages: https://elizfab.github.io/portal-dev/
  url: 'https://elizfab.github.io',
  baseUrl,
  organizationName: 'elizfab',
  projectName: 'portal-dev',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['pt', 'en'],
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'}},
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseUrl}img/favicon-32x32.png`}},
    {tagName: 'link', attributes: {rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseUrl}img/favicon-16x16.png`}},
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', sizes: '180x180', href: `${baseUrl}img/apple-touch-icon.png`}},
    {tagName: 'meta', attributes: {name: 'theme-color', content: '#F75F00'}},
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400..800;1,400..800&family=JetBrains+Mono:wght@400;600&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${repoUrl}/tree/main/frontend/`,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {name: 'keywords', content: 'documentação, estudos, devops, cloud, frontend, backend, linux, kubernetes'},
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    announcementBar: {
      id: 'em-construcao',
      content: '🚧 Portal em construção: novos conteúdos são adicionados continuamente.',
      isCloseable: true,
    },
    navbar: {
      title: 'Portal Dev',
      hideOnScroll: true,
      logo: {
        alt: 'Logo Portal Dev',
        src: 'img/logo.png',
        srcDark: 'img/logo-white.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Documentação'},
        {
          type: 'dropdown',
          label: 'Categorias',
          position: 'left',
          items: [
            {label: 'Frontend', to: '/docs/frontend'},
            {label: 'Backend', to: '/docs/backend'},
            {label: 'Cloud', to: '/docs/cloud'},
            {label: 'DevOps', to: '/docs/devops'},
            {label: 'Containers', to: '/docs/containers'},
            {label: 'Observabilidade', to: '/docs/observability'},
            {label: 'Sistemas Operacionais', to: '/docs/operatingsystems'},
            {label: 'Metodologias', to: '/docs/methodologies'},
          ],
        },
        {to: '/docs/guia-de-estilo', label: 'Guia de estilo', position: 'left'},
        {
          href: repoUrl,
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'Repositório no GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Logo Portal Dev',
        src: 'img/logo-white.png',
        width: 48,
        height: 48,
      },
      links: [
        {
          title: 'Desenvolvimento',
          items: [
            {label: 'Frontend', to: '/docs/frontend'},
            {label: 'Backend', to: '/docs/backend'},
            {label: 'Metodologias', to: '/docs/methodologies'},
          ],
        },
        {
          title: 'Infraestrutura',
          items: [
            {label: 'Cloud', to: '/docs/cloud'},
            {label: 'DevOps', to: '/docs/devops'},
            {label: 'Containers', to: '/docs/containers'},
            {label: 'Observabilidade', to: '/docs/observability'},
          ],
        },
        {
          title: 'Sistemas',
          items: [
            {label: 'Linux', to: '/docs/operatingsystems/linux'},
            {label: 'Windows', to: '/docs/operatingsystems/windows'},
            {label: 'macOS e WSL2', to: '/docs/operatingsystems/others'},
          ],
        },
        {
          title: 'Projeto',
          items: [
            {label: 'Guia de estilo', to: '/docs/guia-de-estilo'},
            {label: 'GitHub', href: repoUrl},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Portal Dev · Elizabete Fabri`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: [
        'bash',
        'powershell',
        'batch',
        'docker',
        'hcl',
        'yaml',
        'json',
        'java',
        'go',
        'python',
        'sql',
        'groovy',
        'ini',
        'toml',
        'nginx',
        'diff',
        'ruby',
      ],
      magicComments: [
        {className: 'theme-code-block-highlighted-line', line: 'highlight-next-line', block: {start: 'highlight-start', end: 'highlight-end'}},
        {className: 'code-block-error-line', line: 'error-next-line', block: {start: 'error-start', end: 'error-end'}},
        {className: 'code-block-success-line', line: 'success-next-line', block: {start: 'success-start', end: 'success-end'}},
      ],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
