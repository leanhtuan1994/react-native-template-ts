import { source, getLLMText } from '@/lib/source';

export const revalidate = false;

// Concatenated full markdown of every docs page (AI-doc parity with the old
// starlight-llms-txt llms-full.txt output).
export async function GET() {
  const pages = source.getPages();
  const scan = pages.map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join('\n\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
