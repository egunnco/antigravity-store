"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Header.module.css';
import CartNavButton from './CartNavButton';
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isTransparent = pathname === '/';
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { isLoaded, isSignedIn } = useAuth();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

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
              <Link href="/">home</Link>
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
          {/* Search Functionality */}
          <div className={styles.searchSection}>
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                  autoFocus
                />
                <button type="button" onClick={() => setIsSearchOpen(false)} className={styles.closeSearchButton}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </form>
            ) : (
              <button 
                className={styles.iconButton} 
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            )}
          </div>

          {/* Account Login / Profile */}
          <div className={styles.accountSection}>
            {isLoaded && !isSignedIn && (
              <Link href="/sign-in" className={styles.textButton}>
                login
              </Link>
            )}
            {isLoaded && isSignedIn && (
              <UserButton afterSignOutUrl="/" />
            )}
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
