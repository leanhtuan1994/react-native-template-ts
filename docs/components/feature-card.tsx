import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type FeatureCardProps = {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
};

/** A single feature card with an accent icon chip. */
export function FeatureCard({ title, icon: Icon, children }: FeatureCardProps) {
  return (
    <div className="group relative flex flex-col gap-3 rounded-2xl border border-fd-border bg-fd-card/60 p-5 transition-colors hover:border-fd-primary/60">
      {Icon ? (
        <div className="flex size-10 items-center justify-center rounded-xl bg-fd-primary/10 text-fd-primary">
          <Icon className="size-5" />
        </div>
      ) : null}
      <h3 className="text-base font-semibold text-fd-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-fd-muted-foreground">
        {children}
      </p>
    </div>
  );
}
