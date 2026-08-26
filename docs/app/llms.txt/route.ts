import { source } from '@/lib/source';

export const revalidate = false;

// llms.txt index per https://llmstxt.org — a titled list of all docs pages
// with links, so AI tools can discover the documentation structure.
export async function GET() {
  const pages = source.getPages();

  const lines = [
    '# Caracal Starter — React Native / Expo Template',
    '',
    "> Your All-in-One Solution for Building Outstanding React Native/Expo Apps. From editor setup to store submission, we've got you covered.",
    '',
    '## Docs',
    '',
    ...pages.map((page) => {
      const description = page.data.description
        ? `: ${page.data.description}`
        : '';
      return `- [${page.data.title}](${page.url})${description}`;
    }),
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
