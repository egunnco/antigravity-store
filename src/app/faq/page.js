import Link from 'next/link';
import homeStyles from '../home.module.css';

const faqs = [
  { q: 'Where are your products made?', a: 'All ArkanHOG® products are designed by artist Elizabeth Gunn in Fayetteville, Arkansas. We use US-grown ring-spun cotton and premium blanks for all apparel.' },
  { q: 'How do I care for my ArkanHOG® tee?', a: 'Wash in cold water with like colors. Hang dry. Do not bleach or iron the decoration. Garment-dyed items may have slight color variation — this is part of their charm.' },
  { q: 'Do you offer wholesale or bulk orders?', a: 'Yes! We work with boutiques and businesses on wholesale and custom orders. Contact us at hello@elizabethgunnco.com to discuss your needs.' },
  { q: 'What sizes do your t-shirts come in?', a: 'Our tees are available in XS through XXL. The snapback hat is one size fits most with an adjustable closure.' },
  { q: 'How long does shipping take?', a: 'Orders are processed within 3–5 business days. Standard shipping arrives within 5–7 business days after that. You\'ll receive a tracking number when your order ships.' },
  { q: 'Can I return or exchange my order?', a: 'Yes — we accept returns on unworn, unwashed items within 14 days of delivery. Contact us at hello@elizabethgunnco.com to start the process.' },
];

export default function FAQPage() {
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
        <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', fontStyle: 'italic', textTransform: 'none', marginBottom: '4rem' }}>Frequently Asked Questions</h1>

        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border-color)' }}>
            <h3 style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', color: 'var(--text-primary)' }}>{faq.q}</h3>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>{faq.a}</p>
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
