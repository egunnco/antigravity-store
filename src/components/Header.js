"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import CartNavButton from './CartNavButton';
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export default function Header() {
  const pathname = usePathname();
  const isTransparent = pathname === '/';

  return (
    <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
      {/* Top Banner (Arkansas Gold) */}
      <div className={styles.topBanner}></div>

      {/* Main Navigation Bar */}
      <div className={styles.mainNav}>
        {/* Left: Logo */}
        <div className={styles.logoContainer}>
          <Link href="/">
            <img 
              src="/Claude_egunn_logo.png" 
              alt="Elizabeth Gunn & Co." 
              className={styles.logo} 
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className={styles.navLinks}>
          <div className={styles.navGroup}>
            <span className={styles.navGroupTitle}>shop</span>
            <div className={styles.navGroupItems}>
              <Link href="/shop/women">women</Link>
              <Link href="/shop/men">men</Link>
              <Link href="/shop/kids">kids</Link>
              <Link href="/shop/babies">babies</Link>
              <Link href="/shop/hats">hats</Link>
            </div>
          </div>
          <div className={styles.navGroup}>
            <span className={styles.navGroupTitle}>featured</span>
            <div className={styles.navGroupItems}>
              <Link href="/shop/new">new arrivals</Link>
              <Link href="/shop/arkanhog">the arkanhog</Link>
            </div>
          </div>
        </nav>

        {/* Right: Controls */}
        <div className={styles.controls}>
          {/* Spyglass Search Icon */}
          <button className={styles.iconButton} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* Account Login / Profile */}
          <div className={styles.accountSection}>
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className={styles.textButton}>login</button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <UserButton afterSignOutUrl="/" />
            </Show>
          </div>

          {/* Cart */}
          <div className={styles.cartSection}>
            <CartNavButton color={isTransparent ? '#ffffff' : '#111111'} />
          </div>
        </div>
      </div>
    </header>
  );
}
