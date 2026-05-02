import Link from 'next/link';
import styles from '../home.module.css';

export default function Contact() {
  return (
    <main className={styles.main}>
      <nav className={styles.topNav} style={{ position: 'sticky', background: 'var(--bg-dark)', top: 0 }}>
        <Link href="/"><img src="/Claude_egunn_logo.png" alt="Elizabeth Gunn & Co." className={styles.navLogo} /></Link>
        <div className={styles.navLinks}><Link href="/#services">Shop</Link><Link href="/cart">Cart</Link></div>
      </nav>
      <section style={{ maxWidth: '600px', margin: '10rem auto', padding: '0 2rem', width: '100%' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '2rem' }}>Get In Touch</p>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', fontWeight: 400, textTransform: 'none', marginBottom: '3rem' }}>Contact Us</h1>
        <p style={{ fontFamily: 'var(--font-inter)', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.8 }}>
          Questions about an order, wholesale inquiries, or custom work? We would love to hear from you.
        </p>
        <a href="mailto:hello@elizabethgunnco.com" style={{ display: 'inline-block', padding: '1.25rem 3rem', background: 'var(--text-primary)', color: 'var(--bg-primary)', fontFamily: 'var(--font-inter)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
          Email Us
        </a>
      </section>
      <footer className={styles.premiumFooter} style={{ marginTop: 'auto', width: '100%' }}>
        <div className={styles.footerBottom}><p>© {new Date().getFullYear()} Elizabeth Gunn & Co. All rights reserved.</p></div>
      </footer>
    </main>
  );
}
