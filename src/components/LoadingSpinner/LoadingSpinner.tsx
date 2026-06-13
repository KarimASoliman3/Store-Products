import React from 'react';

export const LoadingSpinner = React.memo(function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-16" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-700" />
    </div>
  );
});

