module.exports = {
  title: 'React Native Template TS',
  tagline:
    'Clean and minimalist React Native template for a quick start with TypeScript 🚀',
  url: 'https://leanhtuan1994.github.io',
  baseUrl: '/react-native-template-ts/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'leanhtuan1994',
  projectName: 'react-native-template-ts',
  favicon: 'img/favicon.ico',
  themeConfig: {
    image: 'img/icon.png',
    navbar: {
      title: 'React Native Template TS',
      hideOnScroll: false,
      items: [
        {
          href: 'https://github.com/leanhtuan1994/react-native-template-ts',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} <a rel="noreferrer" href="https://github.com/leanhtuan1994" target="_blank">Tuan Anh Le</a>. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/leanhtuan1994/react-native-template-ts/edit/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
