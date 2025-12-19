'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Explainable Audio AI
              </span>
              <span className="text-xs sm:text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-200">
                Disentangled Neural Network Explanations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/gtzan"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Music Showcase
            </Link>
            <Link
              href="/synthetic"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Synthetic Toy Case
            </Link>
            <a
              href="/assets/pdfs/masterthesis_SamuelHarck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-blue-900 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
            >
              View Report
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/gtzan"
                className="px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Music Showcase
              </Link>
              <Link
                href="/synthetic"
                className="px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Synthetic Toy Case
              </Link>
              <a
                href="/assets/pdfs/masterthesis_SamuelHarck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 transition-all duration-200 font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                View Report
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
