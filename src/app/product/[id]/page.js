'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { getProductById } from '../../../lib/products';
import AddToCartButton from '../../../components/AddToCartButton';
import styles from './product.module.css';

export default function ProductPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedSize, setSelectedSize] = useState('');

  if (!product) {
    return (
      <main style={{ padding: '10rem 4rem', textAlign: 'center' }}>
        <h1>Product not found</h1>
        <Link href="/">← Back to Shop</Link>
      </main>
    );
  }

  const productWithSize = selectedSize ? { ...product, selectedSize } : product;

  return (
    <main className={styles.main}>

      {/* Nav */}
      

      {/* Product Layout */}
      <div className={styles.productLayout}>

        {/* Image */}
        <div className={styles.imagePanel}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
        </div>

        {/* Details */}
        <div className={styles.detailsPanel}>
          <p className={styles.breadcrumb}>
            <Link href="/">Shop</Link> / {product.name}
          </p>
          <h1 className={styles.productName}>{product.name}</h1>
          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 1 && (
            <div className={styles.sizeSection}>
              <p className={styles.sizeLabel}>Size</p>
              <div className={styles.sizeGrid}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeBtnActive : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes[0] === 'One Size' && (
            <p className={styles.oneSize}>One Size Fits Most</p>
          )}

          {/* Add to Cart */}
          <AddToCartButton
            product={productWithSize}
            className={styles.addToCartBtn}
          />

          <Link href="/" className={styles.backLink}>← Continue Shopping</Link>

          {/* Description */}
          <div className={styles.descriptionSection}>
            <h3>Details</h3>
            <div className={styles.descriptionText}>
              {product.description.split('\n').map((line, i) => (
                <p key={i} style={{ marginBottom: line.startsWith('*') ? '0.5rem' : '1rem' }}>
                  {line.startsWith('* ') ? `• ${line.slice(2)}` : line}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
