type LastUpdatedProps = {
  date?: string | Date;
};

/** Renders a right-aligned "last updated" line for a doc page. */
export function LastUpdated({ date }: LastUpdatedProps) {
  if (!date) return null;
  const value = typeof date === 'string' ? new Date(date) : date;

  return (
    <div className="mt-8 w-full text-right text-sm text-fd-muted-foreground">
      Last updated:{' '}
      {value.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </div>
  );
}
