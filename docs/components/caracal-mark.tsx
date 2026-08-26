/**
 * The Caracal mark, compact variant — silhouette + eyes, no orbit.
 *
 * Mirrors `assets/brand/caracal-mark-compact.svg`. The orbit is omitted because
 * this renders at nav scale (<48px), where it collapses into the silhouette.
 * Colors come from the brand tokens so the mark follows the active theme.
 */
export function CaracalMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M24 14 C26 34 30 46 33 56 C33 80 46 98 64 98 C82 98 95 80 95 56 C98 46 102 34 104 14 C100 26 92 38 78 44 C72 47 70 48 64 48 C58 48 56 47 50 44 C36 38 28 26 24 14 Z"
        stroke="var(--brand-caracal)"
        strokeWidth={8}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="51" cy="64" r="5" fill="currentColor" />
      <circle cx="77" cy="64" r="5" fill="currentColor" />
    </svg>
  );
}
