import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from '@/layout/LoadingScreen/LoadingScreen.module.scss';

const variants = {
  initial: {
    opacity: 1
  },

  hidden: {
    opacity: 0
  }
};

export default function LoadingScreen ({ loadingScreenFinished }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFinished, setIsLoadingFinished] = useState(false);

  useEffect(() => {
    if (isLoadingFinished) {
      loadingScreenFinished();
    }
  }, [isLoadingFinished]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {!isLoadingFinished && <style>
        {`
        body {
          overflow: hidden;
        }
        `}
      </style>}
      <AnimatePresence onExitComplete={() => { setIsLoadingFinished(true); }}>
        {isLoading && <motion.div
          className="fixed z-[999] inset-0 bg-background"
          exit="hidden"
          initial="initial"
          transition={{
            duration: 0.3
          }}
          variants={variants}
        >
          <div className="flex flex-col justify-center items-center size-full relative">
            <div className="size-0">
              <div className="absolute -translate-y-1/2 -translate-x-1/2">
                <span className={styles.loader} />
              </div>
            </div>
            <div className="size-0">
              <div className="absolute -translate-y-1/2 -translate-x-1/2">
                <span className={styles.loader2} />
              </div>
            </div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </>
  )
  ;
}
