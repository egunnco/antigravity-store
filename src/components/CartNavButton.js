'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';

export default function CartNavButton({ color = '#FFF' }) {
  const { cartCount, isLoaded } = useCart();

  if (!isLoaded) {
    return (
      <Link href="/cart" style={{ color, position: 'relative', paddingBottom: '4px' }}>
        Cart (0)
      </Link>
    );
  }

  return (
    <Link href="/cart" style={{ color, position: 'relative', paddingBottom: '4px', fontWeight: cartCount > 0 ? '700' : 'normal' }}>
      Cart ({cartCount})
    </Link>
  );
}
