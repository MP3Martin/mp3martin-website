import NextJSLink from 'next/link';
import React from 'react';
import { Link as HeroUILink } from '@heroui/react';

export default function Link ({
  href,
  isExternal,
  children,
  className,
  ...props
}) {
  return (
    <NextJSLink legacyBehavior passHref href={href}>
      <HeroUILink className={className} isExternal={isExternal} {...props}>{children}</HeroUILink>
    </NextJSLink>
  );
}
