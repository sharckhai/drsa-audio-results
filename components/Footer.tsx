'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  showBackLinks?: boolean;
  parentLink?: string;
  parentLinkText?: string;
}

export default function Footer({ showBackLinks = false, parentLink, parentLinkText }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showBackLinks && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            {parentLink && parentLinkText && (
              <Link
                href={parentLink}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
              >
                ← {parentLinkText}
              </Link>
            )}
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
            >
              ← Back to Landing Page
            </Link>
          </div>
        )}
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} Samuel Harck</p>
        </div>
      </div>
    </footer>
  );
}
