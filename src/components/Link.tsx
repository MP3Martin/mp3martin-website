/* global HTMLAnchorElement */

import { forwardRef } from 'react';
import { LinkIcon } from '@heroui/shared-icons';
import { linkAnchorClasses } from '@heroui/theme';
import { LinkProps as UIProps, useLink } from '@heroui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

/**
 * Thanks to [tetslee](https://github.com/tetslee) @ https://github.com/heroui-inc/heroui/discussions/2001#discussioncomment-7614996
 */
const Link = forwardRef<HTMLAnchorElement, UIProps & NextLinkProps>(
  (props, ref) => {
    const {
      children,
      showAnchorIcon,
      anchorIcon = <LinkIcon className={linkAnchorClasses} />,
      getLinkProps
    } = useLink({
      ...props,
      // @ts-expect-error
      size: null,
      ref
    });

    // noinspection JSValidateTypes
    return (
      // @ts-expect-error
      <NextLink {...getLinkProps()}>
        <>
          {children}
          {showAnchorIcon && anchorIcon}
        </>
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;
