import React, { useCallback } from 'react';

export type SearchBarProps = {
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
};

export const SearchBar = React.memo(function SearchBar({
  value,
  onChange,
  placeholder = 'Search by title...',
}: SearchBarProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <div className="w-full">
      <label className="sr-only" htmlFor="search">
        Search
      </label>
      <div className="relative">
        <input
          id="search"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 sm:mt-5 pr-10 text-sm shadow-sm outline-none placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
          type="text"
        />
        {value.trim().length > 0 ? (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => onChange('')}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-slate-600 hover:bg-slate-100"
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
});

