import React, { useEffect, useState } from 'react';
import { Button, Divider as HeroUIDivider, Snippet } from '@heroui/react';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandReddit,
  IconBrandSteam,
  IconBrandYoutube,
  IconCheck,
  IconCopy,
  IconExternalLink,
  IconMailFilled
} from '@tabler/icons-react';
import { primaryInput } from 'detect-it';
import clsx from 'clsx';

import PageTitle from '@/components/PageTitle';
import PageInfo from '@/components/PageInfo';
import MyTooltip from '@/components/MyTooltip';
import EasterEgg from '@/components/contact/EasterEgg';
import ButtonableLink from '@/components/ButtonableLink';
import ButtonScaleEffect from '@/components/contact/ButtonScaleEffect';

const links = [
  {
    name: 'GitHub',
    link: 'https://github.com/MP3Martin/',
    icon: IconBrandGithub
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/@MP3Martin/',
    icon: IconBrandYoutube
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/mp3martin/',
    icon: IconBrandInstagram
  },
  {
    name: 'Reddit',
    link: 'https://www.reddit.com/user/MP3_MP3/',
    icon: IconBrandReddit
  },
  {
    name: 'Steam',
    link: 'https://steamcommunity.com/id/mp3martin/',
    icon: IconBrandSteam
  }
];

const iconSize = 30;

const Divider = () => <HeroUIDivider className="w-32 my-6 bg-gray-500 max-[400px]:mx-auto" />;

export default function Contact () {
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(primaryInput === 'touch');
  }, []);

  return (
    <>
      <PageInfo description="How to contact me" title="Contact - MP3Martin" />
      <PageTitle>Contact</PageTitle>
      {!isTouch && <ButtonScaleEffect />}

      <p className="text-lg mb-4 max-w-96">
        Here, you can find links to my social media and ways to contact me.
      </p>
      <div className="flex flex-col w-fit">
        <MyTooltip color="primary" content="Copy email" placement="top">
          <Snippet disableTooltip as={Button} checkIcon={<IconCheck />}
                   className="mb-4 hover:scale-105 transition-transform"
                   classNames={{
                     pre: 'flex flex-row items-center gap-2 text-sm min-[330px]:text-medium font-[inherit]',
                     copyButton: 'transition-shadow pointer-events-none'
                   }} color="primary" copyButtonProps={{
                     tabIndex: -1,
                     id: 'copy-email-button-inside',
                     as: 'div'
                   }}
                   copyIcon={<IconCopy />} id="copy-email-button" symbol={<IconMailFilled size={iconSize} />}
                   timeout={800}
                   variant="shadow"
                   onPress={() => {
                     window.document.getElementById('copy-email-button-inside').click();
                     window.document.getElementById('copy-email-button').focus({ preventScroll: true });
                   }}>
            business@mp3martin.xyz
          </Snippet>
        </MyTooltip>
        <MyTooltip color="secondary" content="Contact on discord" placement="bottom">
          <Button as={ButtonableLink} className="hover:scale-105 transition-transform text-medium px-3 h-fit"
                  color="secondary" endContent={<IconExternalLink />} href="https://discord.mp3martin.xyz/"
                  startContent={<IconBrandDiscord size={iconSize} />}
                  target="_blank" variant="shadow">
            <span className="py-[0.62rem] grow text-center">discord.mp3martin.xyz</span>
          </Button>
        </MyTooltip>
      </div>
      <Divider />
      <div
        className="button-container w-fit flex flex-col gap-3 max-[400px]:items-center max-[400px]:w-3/4 max-[400px]:mx-auto min-w-40">
        {links.map((link) => {
          const Icon = link.icon;

          return (<Button key={link.name} as={ButtonableLink}
                          className={clsx('border-[#DD6600] text-medium pl-2 pr-3 h-fit text-default-foreground w-full', isTouch ? 'hover:scale-105 transition-transform' : 'scale-button')}
                          href={link.link}
                          target="_blank" variant="bordered">
            <div className="w-full flex flex-row items-center">
              <Icon className="mr-1" size={iconSize} />
              <div className="flex flex-row justify-center grow">
                <span className="py-[0.62rem] mx-1">{link.name}</span>
              </div>
              <IconExternalLink className="ml-[6px]" />
            </div>
          </Button>);
        })}
      </div>
      <EasterEgg className="mt-1"/>
    </>
  );
}
