import React from 'react';

export type ErrorMessageProps = {
  message: string;
};

export const ErrorMessage = React.memo(function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
      {message}
    </div>
  );
});

