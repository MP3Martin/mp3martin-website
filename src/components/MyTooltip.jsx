import React from 'react';
import { Tooltip } from '@heroui/react';

export default function MyTooltip ({
  children,
  content,
  placement = 'bottom',
  ...props
}) {
  return (
    <Tooltip showArrow closeDelay={10} content={content} placement={placement} {...props}>
      {children}
    </Tooltip>
  );
}
