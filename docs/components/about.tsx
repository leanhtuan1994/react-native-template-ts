import type { ReactNode } from 'react';

type AboutProps = {
  title: string;
  children: ReactNode;
};

/** Centered "about" block used at the bottom of the landing / overview. */
export function About({ title, children }: AboutProps) {
  return (
    <article className="not-prose mx-auto flex max-w-2xl flex-col items-center gap-2 py-20 text-center">
      <small className="text-fd-muted-foreground">{title}</small>
      <div className="prose-sm max-w-[54ch] text-fd-muted-foreground">
        {children}
      </div>
    </article>
  );
}
