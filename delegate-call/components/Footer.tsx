"use client"
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScroll(window.scrollY > 200);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="text-gray-300 py-6 relative">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center space-x-4">
        <p className="text-sm select-none">
          Privacy Policy © 2023 - 2025 | <span className="font-semibold">DelegateCall</span> - the blockchain company
        </p>
        {showScroll && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="ml-4 p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition"
            title="Scroll to top"
          >
            ↑
          </button>
        )}
      </div>
    </footer>
  );
}
