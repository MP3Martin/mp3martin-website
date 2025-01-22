import React from 'react';
import {
  IconBrandAdobeIllustrator,
  IconBrandAdobePhotoshop,
  IconBrandAdobePremier,
  IconBrandAdobeXd,
  IconBrandCSharp, IconBrandDocker, IconBrandFigma,
  IconBrandJavascript,
  IconBrandKotlin, IconBrandNextjs,
  IconBrandPython
} from '@tabler/icons-react';

import SectionTitle from '@/components/SectionTitle';
import { useWindowSize } from '@/hooks/useWindowSize';
import SkillIcons from '@/components/SkillIcons';

const programmingIcons = [
  {
    icon: IconBrandCSharp,
    className: 'text-blue-500',
    tooltip: 'C#',
    link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)'
  },
  {
    icon: IconBrandJavascript,
    className: 'text-yellow-500',
    tooltip: 'JavaScript',
    link: 'https://en.wikipedia.org/wiki/JavaScript'
  },
  {
    icon: IconBrandPython,
    className: 'text-green-500',
    tooltip: 'Python',
    link: 'https://en.wikipedia.org/wiki/Python_(programming_language)'
  },
  {
    icon: IconBrandKotlin,
    className: 'text-purple-500',
    tooltip: 'Kotlin',
    link: 'https://en.wikipedia.org/wiki/Kotlin_(programming_language)'
  },
  {
    icon: IconBrandNextjs,
    className: 'text-zinc-200',
    tooltip: 'Next.js',
    link: 'https://en.wikipedia.org/wiki/Next.js'
  },
  {
    icon: IconBrandDocker,
    className: 'text-[#1D63ED]',
    tooltip: 'Docker',
    link: 'https://en.wikipedia.org/wiki/Docker_(software)'
  }
];

const creativeIcons = [
  {
    icon: IconBrandAdobePhotoshop,
    className: 'text-[#2DAAFF]',
    tooltip: 'Photoshop',
    link: 'https://en.wikipedia.org/wiki/Adobe_Photoshop'
  },
  {
    icon: IconBrandAdobeIllustrator,
    className: 'text-[#FF9B00]',
    tooltip: 'Illustrator',
    link: 'https://en.wikipedia.org/wiki/Adobe_Illustrator'
  },
  {
    icon: IconBrandAdobeXd,
    className: 'text-[#FF61F6]',
    tooltip: 'XD',
    link: 'https://en.wikipedia.org/wiki/Adobe_XD'
  },
  {
    icon: IconBrandAdobePremier,
    className: 'text-[#9A9AFF]',
    tooltip: 'Premiere Pro',
    link: 'https://en.wikipedia.org/wiki/Adobe_Premiere_Pro'
  },
  {
    icon: IconBrandFigma,
    className: 'text-[#F96040]',
    tooltip: 'Figma',
    link: 'https://en.wikipedia.org/wiki/Figma'
  }
];

export default function Skills () {
  const windowSize = useWindowSize();

  return (
    <div className="index-section">
      <SectionTitle>Skills</SectionTitle>
      <p className="text-lg">
        I enjoy programming with C#, JavaScript, Python and Kotlin. I do both backend and frontend development.
        As a student, I am actively enhancing my skills in software development.
      </p>
      <SkillIcons icons={programmingIcons} windowSize={windowSize} />
      <p className="text-lg mt-8">
        In addition to programming, I work with various design tools, including Photoshop, Illustrator, and XD. I also
        have experience with video editing software like Adobe Premiere Pro.
      </p>
      <SkillIcons icons={creativeIcons} windowSize={windowSize} />
    </div>
  );
}
