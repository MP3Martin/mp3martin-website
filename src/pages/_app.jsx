import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';
import '@/styles/globals.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import DefaultLayout from '@/layout/DefaultLayout';
import { fontJetbrains, fontMono, fontSans } from '@/config/consts/fonts';
import { usePreserveScroll } from '@/hooks/usePreserveScroll';

export default function App ({
  Component,
  pageProps
}) {
  usePreserveScroll();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  if (router.pathname.endsWith('_error')) {
    return (
      <>
        <HeroUIProvider navigate={router.push}>
          <NextThemesProvider attribute="class" forcedTheme="dark" scriptProps={{ 'data-cfasync': 'false' }}>
            <Component {...pageProps} />
          </NextThemesProvider>
        </HeroUIProvider>
      </>
    );
  }

  return (
    <>
      <Head>
        <GoogleAnalytics gaId="G-YQNSZ8R81R" />
      </Head>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider forcedTheme="dark">
          <AnimatePresence initial>
            <DefaultLayout>
              <motion.div
                key={router.route}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                className="origin-top"
                exit={{
                  opacity: 0,
                  scale: 0.4
                }}
                initial={isFirstLoad
                  ? {
                      opacity: 0,
                      scale: 1.05
                    }
                  : {
                      opacity: 0,
                      scale: 0.93
                    }}
                transition={{
                  type: 'spring',
                  bounce: 0,
                  duration: 0.5
                }}
              >
                <Component {...pageProps} />
              </motion.div>
            </DefaultLayout>
          </AnimatePresence>
        </NextThemesProvider>
      </HeroUIProvider>
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
  jetbrains: fontJetbrains.style.fontFamily
};
