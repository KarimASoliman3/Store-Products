import React from 'react';

export type EmptyStateProps = {
  title?: string;
  description?: string;
};

export const EmptyState = React.memo(function EmptyState({
  title = 'No results found.',
  description = 'Try adjusting your search or filters.',
}: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-5 py-10 text-center">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{description}</div>
    </div>
  );
});

