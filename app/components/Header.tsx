'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const navLinkClasses = "text-lg hover:text-accent-color transition duration-300 text-shadow-sm";

  return (
    <header className="tropical-gradient text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-shadow-md">
          Kauai <span className="text-accent-color">Adventure</span>
        </Link>
        {isMobile ? (
          <>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 tropical-gradient p-4">
                <ul className="flex flex-col space-y-2">
                  <li><Link href="/" className={navLinkClasses}>Home</Link></li>
                  <li><Link href="/napali" className={navLinkClasses}>Na Pali Coast</Link></li>
                  <li><Link href="/airtour" className={navLinkClasses}>Air Tour</Link></li>
                  <li><Link href="/hanalei" className={navLinkClasses}>Hanalei Beach</Link></li>
                  <li><Link href="/waimea" className={navLinkClasses}>Waimea Canyon</Link></li>
                  <li><Link href="/food" className={navLinkClasses}>Local Cuisine</Link></li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className="flex space-x-6">
            <li><Link href="/" className={navLinkClasses}>Home</Link></li>
            <li><Link href="/napali" className={navLinkClasses}>Na Pali Coast</Link></li>
            <li><Link href="/airtour" className={navLinkClasses}>Air Tour</Link></li>
            <li><Link href="/hanalei" className={navLinkClasses}>Hanalei Beach</Link></li>
            <li><Link href="/waimea" className={navLinkClasses}>Waimea Canyon</Link></li>
            <li><Link href="/food" className={navLinkClasses}>Local Cuisine</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;