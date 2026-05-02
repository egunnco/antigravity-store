'use client';

import { useState } from 'react';
import { useCart } from './CartProvider';

export default function AddToCartButton({ product, className }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className={className}
      disabled={added}
      style={{
        transition: 'all 0.3s ease',
        backgroundColor: added ? '#2E8B57' : undefined,
        color: added ? '#FFF' : undefined,
      }}
    >
      {added ? 'Added to Cart ✓' : `Add to Cart — $${product.price}`}
    </button>
  );
}
