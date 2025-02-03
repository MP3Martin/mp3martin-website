import { useEffect, useRef } from 'react';

export default function useIsFirstRender () {
  const isFirstLoad = useRef(true);

  useEffect(() => {
    isFirstLoad.current = false;
  }, []);

  return isFirstLoad.current;
}
