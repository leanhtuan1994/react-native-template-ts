import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout options for the docs + home layouts.
 * @see https://fumadocs.dev/docs/ui/layouts/docs
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="font-semibold tracking-tight">
        Atlas <span className="text-fd-muted-foreground">Starter</span>
      </span>
    ),
  },
  githubUrl: 'https://github.com/leanhtuan1994/react-native-atlas',
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
