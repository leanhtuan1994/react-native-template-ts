'use client';

import { useEffect, useState } from 'react';
import { Star, ChevronRight } from 'lucide-react';

const REPO = 'leanhtuan1994/react-native-caracal';

/** Small pill that fetches and displays the GitHub star count. */
export function GithubStar() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    fetch(`https://api.github.com/repos/${REPO}`)
      .then((res) => res.json())
      .then((data) => {
        if (active && typeof data.stargazers_count === 'number') {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <a
      href={`https://github.com/${REPO}`}
      target="_blank"
      rel="noreferrer noopener"
      className="not-prose inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card/60 px-4 py-1.5 text-sm font-medium text-fd-foreground no-underline transition-colors hover:border-fd-primary"
    >
      <Star className="size-4 fill-amber-400 text-amber-400" />
      <span className="min-w-5 font-semibold">
        {stars === null ? '—' : stars.toLocaleString()}
      </span>
      <span className="text-fd-muted-foreground">·</span>
      <span>Give us a star on GitHub</span>
      <ChevronRight className="size-4 text-fd-muted-foreground" />
    </a>
  );
}
