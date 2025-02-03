import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import useIsFirstRender from '@/hooks/useIsFirstRender';

const variants = {
  initial: {
    opacity: 0,
    scale: 1.05
  },
  pageSwitchInitial: {
    opacity: 0,
    scale: 0.93
  },
  visible: {
    opacity: 1,
    scale: 1
  }
};

export default function PageFadeInAnimationWrapper ({
  children,
  router,
  motionDivRef,
  startFadeIn
}) {
  const isFirstRender = useIsFirstRender();
  const fadedIn = useRef(false);
  const firstFadeIn = useRef(true);

  const firstFadeInStarted = useCallback(() => {
    if (firstFadeIn.current) {
      firstFadeIn.current = false;
    }
  }, []);

  const [animationState, setAnimationState] = useState('initial');

  useEffect(() => {
    if (startFadeIn && !fadedIn.current) {
      fadedIn.current = true;

      setAnimationState('visible');
    }
  }, [startFadeIn]);

  return (
    <>
      <motion.div
        key={router.route}
        ref={motionDivRef}
        animate={animationState}
        exit={{
          opacity: 0,
          scale: 0.4
        }}
        initial={
          isFirstRender
            ? 'initial'
            : 'pageSwitchInitial'
        }
        transition={{
          type: 'spring',
          bounce: 0,
          duration: firstFadeIn.current ? 0.6 : 0.5
        }}
        variants={variants}
        onAnimationStart={firstFadeInStarted}
      >
        {children}
      </motion.div>
    </>
  );
}
