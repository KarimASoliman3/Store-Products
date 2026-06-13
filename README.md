# React SPA Assessment — Fake Store Products

Modern, responsive React Single Page Application that fetches and displays products from:
https://fakestoreapi.com/products

## Features

- API integration with loading + error states
- Real-time search (case-insensitive) by product title
- Category filtering with an **All** option
- Empty state when no results match
- Performance optimizations:
  - `useMemo` for derived filtered products
  - `useCallback` for stable event handlers
  - `React.memo` for presentational components

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Axios

## Setup

```bash
npm install
npm run dev
```

Then open the shown URL in your browser.

## Build

```bash
npm run build
```

## Notes on Architecture

- `src/services/api.ts`: API fetcher
- `src/hooks/useProducts.ts`: data fetching hook (loading/error/items)
- `src/utils/filterUtils.ts`: filtering logic + unique categories
- `src/pages/Home.tsx`: search + filter orchestration
- `src/components/*`: reusable UI components (SearchBar, FilterDropdown, ProductCard, etc.)
