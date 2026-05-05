import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`} className={styles.imageLink}>
        <div className={styles.imageContainer}>
          <img 
            src={product.image} 
            alt={product.name}
            className={styles.image}
          />
          <div className={styles.overlay}>
            <span className={styles.viewDetailsText}>View Details</span>
          </div>
        </div>
      </Link>
      
      <div className={styles.details}>
        <Link href={`/product/${product.id}`} className={styles.nameLink}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
