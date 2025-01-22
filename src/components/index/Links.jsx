import React from 'react';
import { IconAddressBook, IconArrowRight, IconDeviceGamepad2, IconPackages, IconExternalLink } from '@tabler/icons-react';
import clsx from 'clsx';
import { Button } from '@heroui/react';

import SectionTitle from '@/components/SectionTitle';
import ButtonableLink from '@/components/ButtonableLink';

const links = [
  {
    title: 'Projects',
    description: 'Want to see some of the projects I\'ve created?',
    buttonText: 'See my projects',
    buttonIcon: IconPackages,
    link: '/projects',
    color: 'bg-primary'
  },
  {
    title: 'Games',
    description: 'In my spare time, I like to immerse myself in games. Here is my tierlist of the ones I\'ve played.',
    buttonText: 'See game tierlist',
    buttonIcon: IconDeviceGamepad2,
    link: '/games',
    isExternal: true,
    color: 'bg-secondary'
  },
  {
    title: 'Contact',
    description: 'Want to get in touch? Whether you have a question, want to collaborate, or just chat, feel free to reach out.',
    buttonText: 'Contact me',
    buttonIcon: IconAddressBook,
    link: '/contact',
    color: 'bg-emerald-700'
  }
];

const LinkItem = ({
  title,
  description,
  buttonText,
  buttonIcon,
  link,
  isExternal,
  color
}) => {
  const ButtonIcon = buttonIcon;
  const ButtonEndIcon = isExternal ? IconExternalLink : IconArrowRight;

  return (<>
    <h3 className="text-2xl font-semibold mt-4">{title}</h3>
    <div className="ml-4">
      {description}<br />
        <Button as={ButtonableLink} className={clsx('text-lg hover:scale-105 group mt-1 h-11', color)} endContent={<ButtonEndIcon className={clsx('transition-transform group-hover:translate-x-1', !isExternal && 'group-hover:-rotate-180')} size={30} />}
              href={link} size="md"
              startContent={<ButtonIcon className="transition-transform group-hover:-translate-x-1" size={30} />}
              target={isExternal ? '_blank' : undefined}>
        <span className="transition-transform group-hover:scale-[102%]">{buttonText}</span>
      </Button>
    </div>
  </>);
};

export default function Links () {
  return (
    <div className="index-section">
      <SectionTitle>Links</SectionTitle>
      <div className="text-lg">
        Here are some resources that you might be interested in.
        {
          links.map((link) => (
            <LinkItem key={link.title} {...link} />
          ))
        }
      </div>
    </div>
  );
}
