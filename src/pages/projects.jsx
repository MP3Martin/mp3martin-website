import React from 'react';

import PageInfo from '@/components/PageInfo';
import ProjectCard from '@/components/ProjectCard';
import PageTitle from '@/components/PageTitle';
import Link from '@/components/Link';
import realDivision from '@/../public/images/projects/real_division.webp';
import gameInv from '@/../public/images/projects/GameInv.webp';
import terminalMinesweeper from '@/../public/images/projects/terminal-minesweeper.webp';

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
    description: <>The popular <b>game</b> written in <b>C#,</b> running <b>in the terminal</b>. (not an exact copy of the original game).</>,
    image: terminalMinesweeper,
    link: 'https://github.com/MP3Martin/terminal-minesweeper'
  }
];

export default function Projects () {
  return (
    <>
      <PageInfo description="Projects made by me" title="Projects - MP3Martin" />
      <PageTitle>Projects</PageTitle>
      <p className="text-lg mb-4">
        This is a list of my favourite project made by me. See more on my&nbsp;
        <Link isExternal className="text-[length:inherit]"
              href="https://github.com/MP3Martin?tab=repositories">GitHub</Link>.
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {
          projects.map((project) => (
            <ProjectCard key={project.name} description={project.description} image={project.image}
                         link={project.link} name={project.name} />
          ))
        }
      </div>
    </>
  );
}
