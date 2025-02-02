import React from 'react';

import PageInfo from '@/components/PageInfo';
import ProjectCard from '@/components/ProjectCard';
import PageTitle from '@/components/PageTitle';
import Link from '@/components/Link';
import realDivision from '@/../public/images/projects/real_division.webp';
import gameInv from '@/../public/images/projects/GameInv.webp';
import terminalMinesweeper from '@/../public/images/projects/terminal-minesweeper.webp';
import routerWebLed from '@/../public/images/projects/router-web-led.webp';
import biggerHotbarMcPlugin from '@/../public/images/projects/BiggerHotbar-MC-Plugin.webp';

const projects = [
  {
    name: 'real_division',
    description: <>Generates <b>division</b> using the &quot;<b>division with a remainder</b>&quot; method, mimicking
      how it is
      done manually on paper. Has a <b>Next.js</b> and Python <b>Tkinter</b> UI.</>,
    image: realDivision,
    link: 'https://github.com/MP3Martin/real_division'
  },
  {
    name: 'GameInv',
    description: <>A project showcasing how you can connect <b>C# backend</b> and <b>Next.js frontend together</b>.</>,
    image: gameInv,
    link: 'https://github.com/MP3Martin/GameInv'
  },
  {
    name: 'terminal-minesweeper',
    description: <>The popular <b>game</b> written in <b>C#,</b> running <b>in the terminal</b>. (not an exact copy of
      the original game).</>,
    image: terminalMinesweeper,
    link: 'https://github.com/MP3Martin/terminal-minesweeper'
  },
  {
    name: 'router-web-led',
    description: <>Control your <b>router LEDs</b> from a cool <b>command line TUI</b>.</>,
    image: routerWebLed,
    link: 'https://github.com/MP3Martin/router-web-led'
  },
  {
    name: 'BiggerHotbar-MC-Plugin',
    description: <>Minecraft Java Edition Spigot plugin that makes your hotbar bigger (using scrolling).</>,
    image: biggerHotbarMcPlugin,
    link: 'https://github.com/MP3Martin/BiggerHotbar-MC-Plugin'
  }
];

const checkOutVariations = [
  'Check Out',
  'Go See',
  'See More',
  'Learn More',
  'Take A Look',
  'Dive In',
  'Look Now',
  'Try Now',
  'See Details',
  'Go Explore',
  'View More',
  'Find Out'
];

const pickRandom = (arr, n) => {
  const shuffled = arr.sort(() => Math.random() - 0.5);

  return Array.from({ length: n }, (_, i) => shuffled[i % shuffled.length]);
};

export default function Projects () {
  const randomVariations = pickRandom(checkOutVariations, projects.length);

  return (
    <>
      <PageInfo description="Projects made by me" title="Projects - MP3Martin" />
      <PageTitle>Projects</PageTitle>
      <p className="text-lg mb-4">
        This is a list of my favourite project made by me. See more on my&nbsp;
        <Link isExternal href="https://github.com/MP3Martin?tab=repositories">GitHub</Link>.
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {
          projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              checkOutVariation={randomVariations[index]}
              description={project.description}
              image={project.image}
              link={project.link}
              name={project.name}
            />
          ))
        }
      </div>
    </>
  );
}
