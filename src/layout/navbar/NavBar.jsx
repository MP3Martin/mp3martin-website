import {
  Button,
  Navbar as HeroUINavbar,
  NavbarBrand as HeroUINavbarBrand,
  NavbarContent,
  NavbarMenu
} from '@heroui/react';
import NextLink from 'next/link';
import React, { memo, useState } from 'react';
import clsx from 'clsx';

import { useWindowSize } from '@/hooks/useWindowSize';
import { MobileNavbarButtons, NavbarButtons } from '@/layout/navbar/NavbarButtons';
import ToggleIcon from '@/components/icons/ToggleIcon';
import NavbarTabs from '@/layout/navbar/NavbarTabs';

export const iconSize = 35;

const NavbarBrand = () => {
  return (<HeroUINavbarBrand className="gap-3 max-w-fit">
    <NextLink className="flex justify-start items-center gap-1" href="/">
      <p className="font-bold">MP3Martin</p>
    </NextLink>
  </HeroUINavbarBrand>);
};

const NavBarImpl = memo(({
  isMobile,
  showMobileNavbarButtons
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu (state) {
    if (typeof state === 'boolean') {
      setIsMenuOpen(state);

      return;
    }
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <HeroUINavbar isBordered className="backdrop-blur-[6px] bg-background/45" classNames={{ wrapper: 'max-sm:gap-0' }}
                  height={isMobile ? '3.7rem' : '3.2rem'}
                  isMenuOpen={isMenuOpen} maxWidth="full" position="sticky" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="max-sm:-ml-2" justify="start">
        <Button isIconOnly className={clsx('hover:scale-110', !isMobile && 'hidden')}
                data-open={isMenuOpen} size="md"
                style={{
                  width: iconSize + 10,
                  height: iconSize + 10,
                  marginRight: '-5px'
                }} variant="light" onPress={toggleMenu}
        >
          <ToggleIcon />
        </Button>
        <NavbarBrand />

      </NavbarContent>

      {
        !isMobile && <>
          <NavbarContent justify="center">
            <NavbarTabs />
          </NavbarContent>
        </>
      }

      <NavbarContent
        className="flex gap-2 max-sm:-mr-3"
        justify="end"
      >
        {showMobileNavbarButtons ? <MobileNavbarButtons iconSize={iconSize} /> : <NavbarButtons iconSize={iconSize} />}
      </NavbarContent>
      {isMobile &&
        <NavbarMenu className="pt-0">
          <div className="h-3" />
          <NavbarTabs mobile closeMenu={() => toggleMenu(false)} />
        </NavbarMenu>
      }
    </HeroUINavbar>
  );
});

NavBarImpl.displayName = 'NavBarImpl';

export default function NavBar () {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 590;
  const showMobileNavbarButtons = windowSize.width < 330;

  return (
    <NavBarImpl isMobile={isMobile} showMobileNavbarButtons={showMobileNavbarButtons} />
  );
}
