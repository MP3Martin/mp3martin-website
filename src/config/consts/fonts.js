import { Fira_Code as FontMono, Inter as FontSans, JetBrains_Mono as FontJetBrains } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono'
});

export const fontJetbrains = FontJetBrains({
  subsets: ['latin'],
  variable: '--font-jetbrains'
});
