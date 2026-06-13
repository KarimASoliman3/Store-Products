import { useEffect, useState } from 'react';
import type { FakeStoreProduct } from '../services/api';
import { fetchProducts } from '../services/api';

type UseProductsResult = {
  products: FakeStoreProduct[];
  loading: boolean;
  error: string | null;
};

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<FakeStoreProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function run() {
      setLoading(true);
      setError(null);
      try {
        const items = await fetchProducts(controller.signal);
        setProducts(items);
      } catch (e) {
        if (controller.signal.aborted) return;
        const message = e instanceof Error ? e.message : 'Failed to fetch products.';
        setError(message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void run();

    return () => controller.abort();
  }, []);

  return { products, loading, error };
}

