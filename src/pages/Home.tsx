import { useCallback, useMemo, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { filterProducts, getUniqueCategories } from '../utils/filterUtils';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { FilterDropdown } from '../components/FilterDropdown/FilterDropdown';
import { LoadingSpinner } from '../components/LoadingSpinner/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { EmptyState } from '../components/EmptyState/EmptyState';
import { ProductList } from '../components/ProductList/ProductList';

function Header() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Store Products</h1>
        <p className="mt-1 text-sm text-slate-600">Search by title and filter by category.</p>
      </div>
      <div className="text-sm text-slate-500">Data source: fakestoreapi.com</div>
    </div>
  );
}

export default function Home() {
  const { products, loading, error } = useProducts();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = getUniqueCategories(products);
    return ['All', ...unique];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return filterProducts({
      products,
      searchQuery,
      selectedCategory,
    });
  }, [products, searchQuery, selectedCategory]);

  const handleSearchChange = useCallback((next: string) => {
    setSearchQuery(next);
  }, []);

  const handleCategoryChange = useCallback((next: string) => {
    setSelectedCategory(next);
  }, []);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 ">
      <Header />

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
        <FilterDropdown selectedCategory={selectedCategory} categories={categories} onChange={handleCategoryChange} />
      </section>

      <section className="mt-6">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : filteredProducts.length === 0 ? (
          <EmptyState />
        ) : (
          <ProductList products={filteredProducts} />
        )}

        {!loading && !error ? (
          <div className="mt-5 text-sm text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filteredProducts.length}</span> result(s)
          </div>
        ) : null}
      </section>
    </main>
  );
}

