import React, { useCallback } from 'react';

export type FilterDropdownProps = {
  selectedCategory: string;
  categories: string[];
  onChange: (next: string) => void;
};

export const FilterDropdown = React.memo(function FilterDropdown({
  selectedCategory,
  categories,
  onChange,
}: FilterDropdownProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <div className="w-full">
      <label className="mb-1 ml-1 block text-xs font-medium text-slate-700" htmlFor="category">
        Category
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
});

