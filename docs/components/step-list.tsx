import type { ReactNode } from 'react';

type StepListProps = {
  children: ReactNode;
};

/** Ordered list of steps with numbered badges. Wrap <li> items. */
export function StepList({ children }: StepListProps) {
  return (
    <ol className="not-prose my-6 ml-0 list-none space-y-4 border-l border-fd-border pl-6 [counter-reset:step]">
      {children}
    </ol>
  );
}

type StepProps = {
  title?: string;
  children: ReactNode;
};

export function Step({ title, children }: StepProps) {
  return (
    <li className="relative [counter-increment:step]">
      <span className="absolute -left-[2.1rem] flex size-6 items-center justify-center rounded-full bg-fd-primary text-xs font-semibold text-fd-primary-foreground before:content-[counter(step)]" />
      {title ? (
        <h4 className="mb-1 font-semibold text-fd-foreground">{title}</h4>
      ) : null}
      <div className="text-sm text-fd-muted-foreground">{children}</div>
    </li>
  );
}
