import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';
import '@/styles/globals.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import DefaultLayout from '@/layout/DefaultLayout';
import { fontJetbrains, fontMono, fontSans } from '@/config/consts/fonts';
import { usePreserveScroll } from '@/hooks/usePreserveScroll';

const Theme = ({
  children,
  router
}) => {
  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        forcedTheme="dark"
        scriptProps={{ 'data-cfasync': 'false' }}
        themes={['dark']}
      >
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
};

export default function App ({
  Component,
  pageProps
}) {
  usePreserveScroll();
  const router = useRouter();
  const motionDivRef = useRef(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    const setOrigin = (y) => {
      if (motionDivRef.current) {
        motionDivRef.current.style.transformOrigin = `center ${y}px`;
      }
    };

    const handleScroll = () => {
      setOrigin(window.scrollY);
    };

    const startListening = () => {
      window.addEventListener('scroll', handleScroll);
      timeoutIdRef.current = setTimeout(() => {
        stopListening();
      }, 2000);
      handleScroll();
    };

    const stopListening = () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutIdRef.current);
      setOrigin(0);
    };

    const handleRouteChangeComplete = () => {
      stopListening();
      startListening();
    };

    startListening();

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      stopListening();
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  if (router.pathname.endsWith('_error')) {
    return (
      <>
        <Theme router={router}>
          <Component {...pageProps} />
        </Theme>
      </>
    );
  }

  return (
    <>
      <Head>
        <GoogleAnalytics gaId="G-YQNSZ8R81R" />
      </Head>
      <Theme router={router}>
        <AnimatePresence initial>
          <DefaultLayout>
            <motion.div
              key={router.route}
              ref={motionDivRef}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.4
              }}
              initial={
                isFirstLoad
                  ? {
                      opacity: 0,
                      scale: 1.05
                    }
                  : {
                      opacity: 0,
                      scale: 0.93
                    }
              }
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
      </Theme>
    </>
  );
}

// noinspection JSUnusedGlobalSymbols
export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
  jetbrains: fontJetbrains.style.fontFamily
};
