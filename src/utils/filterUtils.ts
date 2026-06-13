import type { FakeStoreProduct } from '../services/api';

export function filterProducts(params: {
  products: FakeStoreProduct[];
  searchQuery: string;
  selectedCategory: string;
}): FakeStoreProduct[] {
  const { products, searchQuery, selectedCategory } = params;

  const query = searchQuery.trim().toLowerCase();
  const category = selectedCategory;

  return products.filter((p) => {
    const matchesCategory = category === 'All' ? true : p.category === category;
    if (!matchesCategory) return false;

    if (!query) return true;

    return p.title.toLowerCase().includes(query);
  });
}

export function getUniqueCategories(products: FakeStoreProduct[]): string[] {
  const set = new Set<string>();
  for (const p of products) set.add(p.category);
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

