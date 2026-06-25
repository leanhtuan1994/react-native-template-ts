import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      // Required so getText('processed') works for the llms.txt routes.
      includeProcessedMarkdown: true,
    },
  },
});

export default defineConfig();
