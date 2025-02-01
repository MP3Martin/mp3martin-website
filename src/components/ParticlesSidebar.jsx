import { memo, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { router } from 'next/client';

import { useWindowSize } from '@/hooks/useWindowSize';

const MyParticles = () => {
  return (<>
    <Particles
      className="absolute z-[-1] right-0 top-0 max-[700px]:w-[35vw] max-[900px]:w-[40vw] w-[55vw] opacity-70 transition-width h-full max-w-4xl [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0)_0px,_rgba(0,_0,_0,_1)_300px)]"
      options={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'circle',
            options: {
              polygon: {
                sides: 5
              }
            }
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.7
            },
            animation: {
              enable: false,
              speed: 10,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: {
              min: 1.8,
              max: 2.5
            },
            animation: {
              enable: false,
              speed: 40,
              minimumValue: 0.1,
              sync: false
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'out'
            },
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detectsOn: 'window',
          events: {
            onHover: {
              enable: true,
              mode: 'grab'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 300,
              links: {
                opacity: 0.7
              }
            }
          }
        },
        detectRetina: true,
        fullScreen: {
          enable: false
        }
      }}
    /></>);
};

const AnimatedWrapper = memo(({ isVisible }) => {
  return (
    <>
      <AnimatePresence>
        {isVisible && <motion.div
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.1 }
          }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4 }}>
          <MyParticles />
        </motion.div>}
      </AnimatePresence>
    </>
  );
});

AnimatedWrapper.displayName = 'AnimatedWrapper';

export default function ParticlesSidebar () {
  const [init, setInit] = useState(false);
  const [correctPage, setCorrectPage] = useState(false);
  const [correctWindowSize, setCorrectWindowSize] = useState(false);
  const visible = init && correctPage && correctWindowSize;

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const routeChangeComplete = () => {
      if (router.pathname === '/contact') {
        setCorrectPage(true);
      } else {
        setCorrectPage(false);
      }
    };
    const routeChangeStart = () => {
      setCorrectPage(false);
    };

    router.events.on('routeChangeComplete', routeChangeComplete);
    router.events.on('routeChangeStart', routeChangeStart);

    routeChangeComplete();

    return () => {
      router.events.off('routeChangeComplete', routeChangeComplete);
      router.events.off('routeChangeStart', routeChangeStart);
    };
  }, [router]);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > 600) {
      setCorrectWindowSize(true);
    } else {
      setCorrectWindowSize(false);
    }
  }, [windowSize]);

  return (
    <AnimatedWrapper isVisible={visible} />
  );
}
