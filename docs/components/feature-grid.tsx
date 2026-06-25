import type { ReactNode } from 'react';

type FeatureGridProps = {
  children: ReactNode;
};

/** Responsive grid wrapper for FeatureCard items. */
export function FeatureGrid({ children }: FeatureGridProps) {
  return (
    <div className="not-prose grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
