import { Tab, Tabs } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import ButtonableLink from '@/components/ButtonableLink';

/**
 * @typedef {Object} Page
 * @property {string} name
 * @property {string} href
 */

/**
 * @type {Page[]}
 */
const pages = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
];

const changePage = (key, router) => {
  if (!key) return;
  const href = pages.find(page => page.name === key).href;

  if (!href) return;
  if (href === router.pathname) return;
  router.push(href);
};

export default function NavbarTabs ({
  mobile = false,
  closeMenu = null
}) {
  const [selected, setSelected] = useState(null);
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  // Handle user click
  // Changes the page, but doesn't visually change the selected tab
  const selectionChanged = (key) => {
    if (!loaded) return;
    changePage(key, router);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Listen to path change
  useEffect(() => {
    // Visual selected tab update on page change
    setSelected(pages.find(page => page.href === router.pathname).name);

    // Close the menu on mobile
    if (!loaded || !closeMenu) return;
    const timeoutId = setTimeout(() => closeMenu(), 220);

    return () => clearTimeout(timeoutId);
  }, [router.pathname]);

  return (
    <div className="flex flex-col items-center w-full">
      <Tabs fullWidth classNames={{
        cursor: 'bg-primary/60 border-1 border-foreground/35',
        wrapper: clsx(mobile && 'w-full min-[400px]:w-2/3 min-[500px]:w-1/2'),
        tabContent: clsx(mobile && 'text-lg')
      }} color="primary" isVertical={mobile} items={pages}
            selectedKey={selected}
            size="lg" variant="light" onSelectionChange={(k) => selectionChanged(k)}>
        {/**
         * @param {Page} page
         */
          (page) => (
          <Tab key={page.name} as={ButtonableLink} href={page.href} title={page.name}/>
          )}
      </Tabs>
    </div>
  );
}
