import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';
import '@/styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import React, { useCallback, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

import DefaultLayout from '@/layout/DefaultLayout';
import { fontJetbrains, fontMono, fontSans } from '@/config/consts/fonts';
import { usePreserveScroll } from '@/hooks/usePreserveScroll';
import { useHandleScrollOrigin } from '@/hooks/useHandleScrollOrigin';
import PageFadeInAnimationWrapper from '@/layout/PageFadeInAnimationWrapper';
import LoadingScreen from '@/layout/LoadingScreen/LoadingScreen';

const DynamicParticlesSidebar = dynamic(() => import('../components/ParticlesSidebar'), {
  ssr: false
});

const Theme = ({
  children,
  router
}) => {
  return (
    <HeroUIProvider navigate={router.push} reducedMotion="never">
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
  const [startFadeIn, setStartFadeIn] = useState(false);

  useHandleScrollOrigin(motionDivRef, router);

  const loadingScreenFinished = useCallback(() => {
    setStartFadeIn(true);
  }, [setStartFadeIn]);

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
            <DynamicParticlesSidebar />
            <LoadingScreen loadingScreenFinished={loadingScreenFinished} />
            <PageFadeInAnimationWrapper motionDivRef={motionDivRef} router={router} startFadeIn={startFadeIn}>
              <Component {...pageProps} />
            </PageFadeInAnimationWrapper>
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
