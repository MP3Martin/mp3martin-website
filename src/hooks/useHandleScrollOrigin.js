import { useEffect, useRef } from 'react';

export function useHandleScrollOrigin (motionDivRef, router) {
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
  }, [motionDivRef, router]);
}
