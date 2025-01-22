import React, { forwardRef } from 'react';
import NextJSLink from 'next/link';

const ButtonableLink = forwardRef(({
  children,
  ...props
}, ref) => {
  return (
    <NextJSLink {...props} ref={ref}>
      {children}
    </NextJSLink>
  );
});

ButtonableLink.displayName = 'CustomTab';

export default ButtonableLink;
