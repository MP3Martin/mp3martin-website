import React from 'react';
import { Button, Link, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import { IconBrandGithub, IconBrandInstagram, IconBrandYoutube, IconCaretDown, IconSocial } from '@tabler/icons-react';

import MyTooltip from '@/components/MyTooltip';

const SocialsButton = ({
  text,
  link,
  icon,
  tooltipPlacement = 'bottom',
  iconSize
}) => {
  const Icon = icon;

  return (
    <MyTooltip content={text} placement={tooltipPlacement}>
      <Button isExternal isIconOnly as={Link} className='hover:scale-110'
              href={link} size='md' variant='light'>
        <Icon size={iconSize} />
      </Button>
    </MyTooltip>
  );
};
const socials = [
  ['GitHub', 'https://github.com/MP3Martin/', IconBrandGithub],
  ['LinkedIn', 'https://linkedin.com/in/martinpitas/', IconBrandYoutube],
  ['Instagram', 'https://www.instagram.com/mp3martin/', IconBrandInstagram]
];

export const NavbarButtons = ({
  tooltipPlacement = 'bottom',
  iconSize
}) => (
  socials.map(i => (
    <SocialsButton key={i[0]} icon={i[2]} iconSize={iconSize} link={i[1]} text={i[0]}
                   tooltipPlacement={tooltipPlacement} />
  ))
);
export const MobileNavbarButtons = ({
  iconSize
}) => {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button className="px-0 pl-1 gap-0 min-w-fit" size="md" variant="bordered">
            <IconSocial size={iconSize} />
            <IconCaretDown className="-ml-1 mt-[3px]" size={iconSize * 0.8} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='popover-fix-z-index'>
          <div className='flex flex-col gap-1.5 py-1'>
            <NavbarButtons iconSize={iconSize} tooltipPlacement="left" />
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};
