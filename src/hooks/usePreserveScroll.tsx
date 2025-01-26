// TODO: store scroll position before reload / periodically

/* Original code thanks to Jak-Ch-ll @ https://gist.github.com/Jak-Ch-ll/12d3ac96c1562e85c508dd40d309be45 */

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const usePreserveScroll = () => {
  const router = useRouter();

  const storeScrollPosition = () => {
    const url = router.pathname;
    window.sessionStorage.setItem(`scrollPosition:${url}`, window.scrollY.toString());
  };
  useEffect(() => {
    // Disable normal browser scroll restoration behavior
    window.history.scrollRestoration = 'manual';

    const onRouteChangeStart = () => {
      storeScrollPosition();
    };

    const onRouteChangeComplete = (url: string) => {
      const storedScrollPosition = window.sessionStorage.getItem(`scrollPosition:${url}`);

      if (storedScrollPosition) {
        const scrollPosition = parseInt(storedScrollPosition, 10);

        window.scroll({
          top: scrollPosition,
          behavior: 'instant'
        });
      }
    };

    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);
};
