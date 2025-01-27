/* Original code thanks to Jak-Ch-ll @ https://gist.github.com/Jak-Ch-ll/12d3ac96c1562e85c508dd40d309be45 */

import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export const usePreserveScroll = () => {
  const router = useRouter();
  const isFirstRender = useRef(true);

  const storeScrollPosition = () => {
    const url = router.pathname;

    window.sessionStorage.setItem(`scrollPosition:${url}`, window.scrollY.toString());
  };

  const restoreScrollPosition = (url: string) => {
    const storedScrollPosition = window.sessionStorage.getItem(`scrollPosition:${url}`);

    if (storedScrollPosition) {
      const scrollPosition = parseInt(storedScrollPosition, 10);

      window.scroll({
        top: scrollPosition,
        behavior: 'instant'
      });
    }
  };

  useEffect(() => {
    // Disable normal browser scroll restoration behavior
    window.history.scrollRestoration = 'manual';

    // Restore scroll position on page reload
    if (isFirstRender.current) {
      restoreScrollPosition(router.pathname);
    }

    const onRouteChangeStart = () => {
      storeScrollPosition();
    };
    const onBeforeUnload = () => {
      storeScrollPosition();
    };

    const onRouteChangeComplete = (url: string) => {
      restoreScrollPosition(url);
    };

    window.addEventListener('beforeunload', onBeforeUnload);
    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    isFirstRender.current = false;

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload);
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);
};
