import { getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function ShopCategoryPage({ params }) {
  const category = params.category;
  const products = getProductsByCategory(category);

  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Shop {formattedCategory}</h1>
        <p className={styles.subtitle}>Explore our curated collection</p>
      </div>

      {products.length === 0 ? (
        <div className={styles.emptyState}>
          <h2>No products found</h2>
          <p>We're currently restocking this category. Check back soon!</p>
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
