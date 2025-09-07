import React from 'react';
import { Divider } from '@heroui/react';
import { motion } from 'framer-motion';

import PageInfo from '@/components/PageInfo';
import Heading from '@/components/index/Heading';
import Skills from '@/components/index/Skills';
import Links from '@/components/index/Links';

const MotionDivider = motion.create(Divider);

export default function IndexPage () {
  return (
    <>
      <PageInfo description="My personal website" title="MP3Martin - My Portfolio" />
      <div className="relative overflow-y-clip">
        <Heading />
        <div className="h-7" />
      </div>
      <MotionDivider
        animate={{
          width: '100%',
          left: '0%'
        }}
        className="absolute h-[2px] bg-default-300/90 md:bg-default-300/80"
        initial={{
          width: '0%',
          left: '50%'
        }}
        transition={{
          duration: 0.4,
          type: 'tween',
          ease: 'easeOut'
        }}
        viewport={{
          once: true
        }}
      />
      <div className="h-2" />
      <Skills />
      <Links />
      <div className="h-14" />
    </>
  );
}
