import React, { useState } from 'react';
import { cubicBezier, motion } from 'framer-motion';
import { IconCursorText } from '@tabler/icons-react';
import Image from 'next/image';

import buildPassing from '@/../public/assets/build_passing.svg';

const easeOutCubic = (x) => {
  return 1 - Math.pow(1 - x, 3);
};

const BlinkingCursor = () => {
  return <motion.span
    animate={{ opacity: 1 }}
    className="inline-block select-none align-middle my-0 ml-[-0.85em] mr-[-10px]"
    initial={{ opacity: 0.05 }}

    transition={{
      type: 'tween',
      ease: 'easeOut',
      duration: 1.2,
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 0.1
    }}
  >
    <IconCursorText className="size-[1.4em] text-zinc-200 translate-y-[-0.09em]" />
  </motion.span>;
};

const BuildPassing = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      animate={{
        opacity: isLoaded ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
    >
      <Image alt="Build passing badge" className="animate-[levitate_4s_ease-in-out_infinite_alternate-reverse] pointer-events-none
            drop-shadow-xl aspect-square max-md:hidden w-[150px] min-[850px]:w-[200px] min-[1120px]:w-[300px] min-[1300px]:w-[350px] min-[1400px]:w-[400px]"
             src={buildPassing} width={300}
             onLoad={() => setIsLoaded(true)} />
    </motion.div>
  );
};

export default function Heading () {
  return (
    <>
      <div className="relative z-[1]">
        <div className="w-full -mt-5 md:mt-1 mb-7 flex flex-row">
          <div className="w-fit">
            <p className="text-5xl text-[12vw] sm:text-[11vw] md:text-[9vw] lg:text-8xl
      whitespace-nowrap text-left font-extrabold text-fade ">
              <span className="text-[0.5em]">Hi,</span><br />
              <span className="leading-tight">I&apos;m MP3Martin<br /></span>
              <span className="text-[0.5em] block text-right">and this is my portfolio</span>
            </p>
          </div>
          <div
            className="w-full flex flex-row justify-center items-center mr-[-2vw] min-[1300px]:mr-[-4vw] min-[1400px]:mr-[-6vw]">
            <motion.div
              animate={{
                opacity: 1,
                y: 0
              }}
              initial={{
                opacity: 0,
                y: 300
              }}
              transition={{
                delay: 0.1,
                duration: 2.4,
                type: 'tween',
                ease: cubicBezier(0.130, 0.250, 0.015, 0.990)
              }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col justify-center h-0 translate-y-12">
                <BuildPassing />
              </div>
            </motion.div>
          </div>
        </div>

        <p className="text-xl sm:text-2xl">
          I like&nbsp;
          <span
            className="font-jetbrains bg-gray-800 rounded-lg pl-[7px] pr-2 py-0.5 -ml-0.5 border-1 border-divider shadow-lg">
          programming;<span className="select-none">&nbsp;</span>
          <BlinkingCursor />
        </span>
        </p>
      </div>

      <motion.div
        animate={{
          opacity: 1,
          y: 0
        }}
        initial={{
          opacity: 0,
          y: 100
        }}
        transition={{
          duration: 1.8,
          type: 'tween',
          ease: easeOutCubic
        }}
        viewport={{ once: true }}
      >
        <div
          className="absolute left-0 right-0 z-0 m-auto h-16 bg-gradient-to-t from-purple-400 to-purple-600 blur-[100px] opacity-50" />
      </motion.div>
    </>
  );
}
