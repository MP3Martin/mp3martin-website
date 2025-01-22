import React from 'react';
import { Divider } from '@heroui/react';
import clsx from 'clsx';

import Link from '@/components/Link';
import { useWindowSize } from '@/hooks/useWindowSize';

const FooterLink = ({
  text,
  link
}) => {
  return (
    <Link isExternal className="text-current" href={link}>
      <span className="text-primary">{text}</span>
    </Link>
  );
};

const FooterContent = ({
  isMobile
}) => {
  return (
    <>
      <div className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center`}
      ><p>Copyright © {new Date().getFullYear()} MP3Martin</p>
        <Divider
          className={clsx((isMobile ? 'my-1 w-[60%] max-[450px]:w-[80%]' : 'w-[2px] h-4 mx-2 rounded'), 'bg-default-500')}
          orientation={isMobile ? 'horizontal' : 'vertical'}
        />
        <p>
          Powered by
          <span>&nbsp;</span>
          <FooterLink link="https://www.heroui.com/" text="HeroUI" />
          <span>&nbsp;&&nbsp;</span>
          <FooterLink link="https://nextjs.org/" text="Next.JS" />
        </p>
      </div>
    </>
  );
};

export default function Footer () {
  const windowSize = useWindowSize();
  const isMobile = ['xxs', 'xs'].includes(windowSize.breakpoint);

  return (
    <footer
      className='w-full flex flex-col items-center justify-center pt-3 text-default-600'>
      <FooterContent isMobile={isMobile} />
    </footer>
  );
}
