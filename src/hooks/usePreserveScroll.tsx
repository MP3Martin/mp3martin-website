/* Original code thanks to Jak-Ch-ll @ https://gist.github.com/Jak-Ch-ll/12d3ac96c1562e85c508dd40d309be45 */

import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export const usePreserveScroll = () => {
  const router = useRouter();

  const scrollPositions = useRef<{ [url: string]: number }>({});

  useEffect(() => {
    // Disable normal browser scroll restoration behavior
    window.history.scrollRestoration = 'manual';

    const onRouteChangeStart = () => {
      const url = router.pathname;

      scrollPositions.current[url] = window.scrollY;
    };

    const onRouteChangeComplete = (url: any) => {
      if (scrollPositions.current[url]) {
        window.scroll({
          top: scrollPositions.current[url],
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
