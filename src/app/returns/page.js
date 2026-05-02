import Link from 'next/link';
import homeStyles from '../home.module.css';
import CartNavButton from '../../components/CartNavButton';

export default function ReturnsPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--bg-primary)' }}>

      <nav style={{ position: 'sticky', top: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 4rem', zIndex: 999, background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
        <Link href="/"><img src="/Claude_egunn_logo.png" alt="Elizabeth Gunn & Co." style={{ height: '60px', width: 'auto' }} /></Link>
        <div style={{ display: 'flex', gap: '3rem', fontFamily: 'var(--font-inter)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          <Link href="/about">About</Link>
          <Link href="/#services">Shop</Link>
          <CartNavButton color="#111111" />
        </div>
      </nav>

      <div style={{ maxWidth: '800px', margin: '8rem auto', padding: '0 4rem', width: '100%' }}>
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', fontStyle: 'italic', textTransform: 'none', marginBottom: '3rem' }}>Shipping & Returns</h1>

        {[
          { title: 'Shipping', body: 'All orders are processed within 3–5 business days. Standard shipping typically arrives within 5–7 business days after processing. You will receive a tracking number once your order ships.' },
          { title: 'Returns', body: 'We accept returns on unworn, unwashed items within 14 days of delivery. Items must be in original condition with tags attached. Final sale items are not eligible for return.' },
          { title: 'Exchanges', body: 'Need a different size? Contact us within 14 days of delivery and we\'ll do our best to make it right. Reach out at hello@elizabethgunnco.com.' },
          { title: 'Damaged Items', body: 'If your item arrives damaged or defective, please contact us immediately with a photo and we will replace it at no charge.' },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border-color)' }}>
            <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-primary)', marginBottom: '1rem' }}>{section.title}</h3>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>{section.body}</p>
          </div>
        ))}
      </div>

      <footer className={homeStyles.premiumFooter} style={{ marginTop: 'auto' }}>
        <div className={homeStyles.footerBottom} style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <p>© {new Date().getFullYear()} Elizabeth Gunn & Co. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
