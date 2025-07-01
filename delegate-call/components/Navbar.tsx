'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-transparent backdrop-blur-sm text-white border-b border-neutral-800 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-white">Delegate</span>
          <span className="text-blue-500">Call</span>
        </Link>

        {/* Center/Right: Desktop links */}
        <div className="hidden lg:flex gap-10 text-lg justify-end w-full">
          {routes.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`hover:text-blue-500 transition ${
                pathname === href ? 'text-blue-500' : 'text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 px-2">
          <div className="flex flex-col gap-2">
            {routes.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`py-2 px-4 rounded hover:bg-[#222] transition ${
                  pathname === href ? 'bg-[#222]' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
