'use client';

import Link from 'next/link';
import { useCart } from '../../components/CartProvider';
import styles from './cart.module.css';
import homeStyles from '../home.module.css';
import CartNavButton from '../../components/CartNavButton';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, isLoaded } = useCart();

  if (!isLoaded) return null;

  return (
    <main className={styles.main}>
      <nav className={styles.topNav}>
        <Link href="/">
          <img src="/Claude_egunn_logo.png" alt="Elizabeth Gunn & Co." className={styles.navLogo} />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/#services">Shop</Link>
          <CartNavButton color="#111111" />
        </div>
      </nav>

      <div className={styles.cartWrapper}>
        <div className={styles.cartHeader}>
          <h1>Your Cart</h1>
          <Link href="/#services" className={styles.backLink}>← Back to Shop</Link>
        </div>

        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <p>Your cart is currently empty.</p>
            <Link href="/#services" className={styles.continueShoppingBtn}>Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className={styles.cartList}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.itemImage} />
                  <div className={styles.itemDetails}>
                    <h3>{item.name}</h3>
                    {item.selectedSize && <p className={styles.itemSize}>Size: {item.selectedSize}</p>}
                    <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                    <div className={styles.quantityControls}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className={styles.qtyBtn}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className={styles.qtyBtn}>+</button>
                      <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>Remove</button>
                    </div>
                  </div>
                  <div className={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className={styles.cartSummary}>
              <div className={styles.subtotal}>
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '-1rem' }}>
                Taxes and shipping calculated at checkout
              </p>
              <button className={styles.checkoutBtn}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>

      <footer className={homeStyles.premiumFooter} style={{ marginTop: 'auto', width: '100%' }}>
        <div className={homeStyles.footerBottom}>
          <p>© {new Date().getFullYear()} Elizabeth Gunn & Co. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
