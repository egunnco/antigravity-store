import Link from 'next/link';
import styles from '../home.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <nav className={styles.topNav} style={{ position: 'sticky', background: 'var(--bg-dark)', top: 0 }}>
        <Link href="/">
          <img src="/Claude_egunn_logo.png" alt="Elizabeth Gunn & Co." className={styles.navLogo} />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/#services">Shop</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </nav>

      <section style={{ maxWidth: '800px', margin: '10rem auto', padding: '0 2rem', width: '100%' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '2rem' }}>Our Story</p>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3.5rem', fontWeight: 400, textTransform: 'none', marginBottom: '3rem', lineHeight: 1.2 }}>
          For the love of all things Arkansas.
        </h1>
        <div style={{ fontFamily: 'var(--font-inter)', fontSize: '1.1rem', lineHeight: 1.9, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>Elizabeth Gunn & Co. is a Fayetteville, Arkansas-based brand built on the intersection of heritage craft and modern design. Founded by artist Elizabeth Gunn, the brand produces premium custom apparel, embroidered accessories, and the ArkanHOG® lifestyle collection.</p>
          <p>The ArkanHOG® — a pork-powered ambassador of Arkansas pride — came to life through Elizabeth's artwork. Small in size but enormous in personality, the ArkanHOG® captures the spirit of a state that's easy to love and impossible to forget.</p>
          <p>Every product is thoughtfully sourced and designed to last. From premium ring-spun cotton tees to structured embroidered snapbacks, Elizabeth Gunn & Co. is committed to quality you can feel.</p>
        </div>
        <Link href="/#services" style={{ display: 'inline-block', marginTop: '4rem', padding: '1.25rem 3rem', background: 'var(--text-primary)', color: 'var(--bg-primary)', fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
          Shop the Collection
        </Link>
      </section>

      <footer className={styles.premiumFooter} style={{ marginTop: 'auto', width: '100%' }}>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Elizabeth Gunn & Co. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
