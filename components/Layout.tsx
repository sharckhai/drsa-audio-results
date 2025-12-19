import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showBackLinks?: boolean;
  parentLink?: string;
  parentLinkText?: string;
}

export default function Layout({ children, showBackLinks = false, parentLink, parentLinkText }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer showBackLinks={showBackLinks} parentLink={parentLink} parentLinkText={parentLinkText} />
    </div>
  );
}
