'use client';
import NextHead from 'next/head';
import React from 'react';

import NavBar from '@/layout/navbar/NavBar';
import { siteConfig } from '@/config/consts/site';
import Footer from '@/layout/Footer';

const Head = () => {
  return (
    <NextHead>
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0" name="viewport"
      />
      <meta name="darkreader-lock" />
      <meta content="dark" name="color-scheme" />
      <link href={siteConfig.basePath + '/favicon.ico'} rel="icon" />
    </NextHead>
  );
};

export default function DefaultLayout ({ children }) {
  return (
    <div className="relative flex flex-col h-full flex-grow overflow-x-clip">
      <Head />
      <NavBar />
      <main className="container mx-auto max-w-7xl px-6 max-[300px]:px-2 flex-grow pt-8 break-words">
        {children}
      </main>
      <Footer />
    </div>
  );
}
