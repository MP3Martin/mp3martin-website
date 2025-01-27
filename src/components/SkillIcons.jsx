import clsx from 'clsx';
import React from 'react';
import { Button, Card, CardBody } from '@heroui/react';

import MyTooltip from '@/components/MyTooltip';
import ButtonableLink from '@/components/ButtonableLink';
import { iconSize } from '@/layout/navbar/NavBar';

export default function SkillIcons ({
  windowSize,
  icons
}) {
  return <div
    className={clsx(
      (windowSize.width >= 360
        ? 'flex flex-row flex-wrap gap-5'
        : 'grid grid-cols-[repeat(3,auto)] min-[255px]:grid-cols-[repeat(4,auto)] justify-between gap-x-1 gap-y-3'),
      'my-3 w-full'
    )}
  >
    {icons.map(({
      icon,
      className,
      tooltip,
      link
    }, index) => {
      const Icon = icon;

      return (
        <MyTooltip key={index} content={tooltip} placement="bottom">
          <Button isIconOnly as={ButtonableLink} className="!size-[initial] hover:scale-110" href={link}
                  size="lg"
                  target="_blank">
            <Card className="aspect-square w-fit" classNames={{ body: 'p-2' }}>
              <CardBody>
                <Icon className={clsx(className, 'aspect-square')} size={iconSize * 1.15} />
              </CardBody>
            </Card>
          </Button>
        </MyTooltip>
      );
    })}
  </div>;
}
