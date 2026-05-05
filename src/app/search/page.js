import { searchProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import styles from '../shop/[category]/page.module.css';

export default function SearchPage({ searchParams }) {
  const query = searchParams.q || '';
  const products = searchProducts(query);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Search Results</h1>
        <p className={styles.subtitle}>
          {query ? `Showing results for "${query}"` : 'Enter a search term above'}
        </p>
      </div>

      {products.length === 0 ? (
        <div className={styles.emptyState}>
          <h2>No products found</h2>
          <p>We couldn't find anything matching your search. Try different keywords.</p>
        </div>
      ) : (
        <div className={styles.productGrid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
