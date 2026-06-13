import React, { useMemo } from 'react';
import type { FakeStoreProduct } from '../../services/api';

export type ProductCardProps = {
  product: FakeStoreProduct;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(price);
}

export const ProductCard = React.memo(function ProductCard({ product }: ProductCardProps) {
  const priceText = useMemo(() => formatPrice(product.price), [product.price]);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="flex h-48 items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="space-y-2 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">{product.title}</h3>

        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-bold text-slate-900">{priceText}</div>
          <div className="rounded-xl bg-slate-100 px-2 py-1 text-xs text-slate-700">
            {product.category}
          </div>
        </div>

        <p className="line-clamp-2 text-xs text-slate-600">{product.description}</p>

        {product.rating ? (
          <div className="flex items-center justify-between text-xs text-slate-700">
            <span className="font-medium">★ {product.rating.rate.toFixed(1)}</span>
            <span className="text-slate-500">({product.rating.count})</span>
          </div>
        ) : null}
      </div>
    </article>
  );
});

