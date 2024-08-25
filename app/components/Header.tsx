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

  return (
    <header className="bg-teal-600 text-white p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Kauai Adventure
        </Link>
        {isMobile ? (
          <>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-teal-600 p-4">
                <ul className="flex flex-col space-y-2">
                  <li><Link href="/" className="hover:underline">Home</Link></li>
                  <li><Link href="/napali" className="hover:underline">Na Pali Coast</Link></li>
                  <li><Link href="/airtour" className="hover:underline">Air Tour</Link></li>
                  <li><Link href="/hanalei" className="hover:underline">Hanalei Beach</Link></li>
                  <li><Link href="/waimea" className="hover:underline">Waimea Canyon</Link></li>
                  <li><Link href="/food" className="hover:underline">Local Cuisine</Link></li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/napali" className="hover:underline">Na Pali Coast</Link></li>
            <li><Link href="/airtour" className="hover:underline">Air Tour</Link></li>
            <li><Link href="/hanalei" className="hover:underline">Hanalei Beach</Link></li>
            <li><Link href="/waimea" className="hover:underline">Waimea Canyon</Link></li>
            <li><Link href="/food" className="hover:underline">Local Cuisine</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;