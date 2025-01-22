import { Head, Html, Main, NextScript } from 'next/document';
import clsx from 'clsx';

import { fontJetbrains, fontMono, fontSans } from '@/config/consts/fonts';

export default function Document () {
  return (
    <Html lang="en">
      <Head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased flex-grow',
          fontSans.variable,
          fontMono.variable,
          fontJetbrains.variable
        )}
      >
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
