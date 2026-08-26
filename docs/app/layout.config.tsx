import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { CaracalMark } from '@/components/caracal-mark';

/**
 * Shared layout options for the docs + home layouts.
 * @see https://fumadocs.dev/docs/ui/layouts/docs
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="inline-flex items-center gap-2 font-semibold tracking-tight">
        <CaracalMark className="size-5" />
        Caracal <span className="text-fd-muted-foreground">Starter</span>
      </span>
    ),
  },
  githubUrl: 'https://github.com/leanhtuan1994/react-native-caracal',
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
