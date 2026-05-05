import styles from './home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>



      {/* Hero */}
      <section className={styles.hero}>
        <img className={styles.heroImage} src="/Claude_vibe_coffeehouse.png" alt="ArkanHOG lifestyle" />
        <div className={styles.heroContent}>
          <h1 className={styles.headlineSerif}>
            The architecture of a perfect morning.
          </h1>
          <p className={styles.subheadline}>
            Crafted with uncompromising classic elegance.
          </p>
          <div className={styles.actionButtons}>
            <Link href="#services" className={styles.primaryBtn}>Shop The Collection</Link>
            <Link href="/about" className={styles.secondaryBtn}>Our Story</Link>
          </div>
        </div>
      </section>


      {/* Product Collection */}
      <section id="services" className={styles.collectionSection}>
        <div className={styles.collectionHeader}>
          <h2>The ArkanHOG Collection</h2>
          <p>Premium cuts. Heritage aesthetics. For the love of all things Arkansas.</p>
        </div>

        <div className={styles.collectionGrid}>

          {/* Hat — Featured First */}
          <div className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <Link href="/product/arkanhog-snapback">
                <img src="/Claude_product_snapback.png" alt="ArkanHOG Snapback Hat" style={{ cursor: 'pointer' }} />
              </Link>
            </div>
            <div className={styles.productInfo}>
              <h3>ArkanHOG Snapback Hat</h3>
              <p className={styles.price}>$35.00</p>
              <Link href="/product/arkanhog-snapback" className={styles.darkBtn} style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                View Options
              </Link>
            </div>
          </div>

          {/* Red Ringer */}
          <div className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <Link href="/product/red-ringer">
                <img src="/Claude_product_red_ringer.png" alt="Red Ringer T-Shirt" style={{ cursor: 'pointer' }} />
              </Link>
            </div>
            <div className={styles.productInfo}>
              <h3>Red Ringer T-Shirt</h3>
              <p className={styles.price}>$40.00</p>
              <Link href="/product/red-ringer" className={styles.darkBtn} style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                View Options
              </Link>
            </div>
          </div>

          {/* Cowboy Little Rock */}
          <div className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <Link href="/product/little-rock">
                <img src="/Claude_product_cowboy_littlerock.png" alt="Cowboy — Little Rock" style={{ cursor: 'pointer' }} />
              </Link>
            </div>
            <div className={styles.productInfo}>
              <h3>Cowboy — Little Rock</h3>
              <p className={styles.price}>$48.00</p>
              <Link href="/product/little-rock" className={styles.darkBtn} style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                View Options
              </Link>
            </div>
          </div>

          {/* Cowboy Fayetteville */}
          <div className={styles.productCard}>
            <div className={styles.productImageWrapper}>
              <Link href="/product/fayetteville">
                <img src="/Claude_product_cowboy_fayetteville.png" alt="Cowboy — Fayetteville" style={{ cursor: 'pointer' }} />
              </Link>
            </div>
            <div className={styles.productInfo}>
              <h3>Cowboy — Fayetteville</h3>
              <p className={styles.price}>$48.00</p>
              <Link href="/product/fayetteville" className={styles.darkBtn} style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                View Options
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Lifestyle Image */}
      <section className={styles.interactiveContainer}>
        <img src="/Claude_vibe_easy_tiger.png" alt="ArkanHOG lifestyle" />
      </section>

      {/* Services Overview */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <div className={styles.sectionHeader}>
            <h2>Explore Our Products</h2>
            <p>From embroidered hats to premium tees. Expertly sourced.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span>01</span>
                <span>From $35</span>
              </div>
              <h3>Embroidered Hats</h3>
              <p>The ArkanHOG® Snapback — structured, adjustable, and built to last. One size fits most.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span>02</span>
                <span>From $40</span>
              </div>
              <h3>Premium T-Shirts</h3>
              <p>Featuring Comfort Colors and 100% ring-spun cotton in classic heritage cuts.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span>03</span>
                <span>Custom Quote</span>
              </div>
              <h3>Bespoke & Custom</h3>
              <p>Corporate swag, bulk orders, and custom apparel runs guided by Elizabeth Gunn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.premiumFooter}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <h2>Elizabeth Gunn & Co.</h2>
            <p>Designed for denim days. Fayetteville, Arkansas.</p>
          </div>
          <div className={styles.footerNewsletter}>
            <h3>Join the List</h3>
            <div className={styles.newsletterInputContainer}>
              <input type="email" placeholder="Email Address" className={styles.newsletterInput} />
              <button className={styles.newsletterSubmit}>→</button>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>Explore</h4>
              <Link href="#services" className={styles.footerLinkHover}>Shop</Link>
              <Link href="/about" className={styles.footerLinkHover}>About</Link>
            </div>
            <div className={styles.footerColumn}>
              <h4>Support</h4>
              <Link href="/faq" className={styles.footerLinkHover}>FAQ</Link>
              <Link href="/returns" className={styles.footerLinkHover}>Shipping & Returns</Link>
              <Link href="/contact" className={styles.footerLinkHover}>Contact</Link>
            </div>
            <div className={styles.footerColumn}>
              <h4>Social</h4>
              <a href="https://www.facebook.com/elizabethgunnco" target="_blank" rel="noopener" className={styles.footerLinkHover}>Facebook</a>
              <a href="https://www.instagram.com/egunnco/" target="_blank" rel="noopener" className={styles.footerLinkHover}>Instagram</a>
              <a href="https://www.tiktok.com/@elizabethgunnco" target="_blank" rel="noopener" className={styles.footerLinkHover}>TikTok</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener" className={styles.footerLinkHover}>Pinterest</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Elizabeth Gunn & Co. All rights reserved.</p>
          <div className={styles.footerLegal}>
            <Link href="/privacy" className={styles.footerLinkHover}>Privacy</Link>
            <Link href="/terms" className={styles.footerLinkHover}>Terms</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
