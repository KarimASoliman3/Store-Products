import React, { useMemo } from 'react';
import type { FakeStoreProduct } from '../../services/api';
import { ProductCard } from '../Card/ProductCard';

export type ProductListProps = {
  products: FakeStoreProduct[];
};

export const ProductList = React.memo(function ProductList({ products }: ProductListProps) {
  const content = useMemo(() => {
    return products.map((p) => <ProductCard key={p.id} product={p} />);
  }, [products]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {content}
    </div>
  );
});

