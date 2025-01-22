/* Original code thanks to Soumya Ranjan Padhy @ https://dev.to/soumyarian/usescreensize-a-custom-react-hook-for-dynamic-screen-size-detection-5e59 */

import { useLayoutEffect, useState } from 'react';

interface WindowSize {
  breakpoint: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '';
  width: number;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    breakpoint: '',
    width: 0
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      let breakpoint: WindowSize['breakpoint'] = '';
      const width = window.innerWidth;

      if (width < 340) {
        breakpoint = 'xxs';
      } else if (width >= 340 && width < 640) {
        breakpoint = 'xs';
      } else if (width >= 640 && width < 768) {
        breakpoint = 'sm';
      } else if (width >= 768 && width < 1024) {
        breakpoint = 'md';
      } else if (width >= 1024 && width < 1280) {
        breakpoint = 'lg';
      } else if (width >= 1280 && width < 1536) {
        breakpoint = 'xl';
      } else if (width >= 1536) {
        breakpoint = '2xl';
      }

      setWindowSize({
        breakpoint,
        width
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
