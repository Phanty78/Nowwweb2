import { Montserrat } from 'next/font/google';
import { PT_Serif } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const ptSerif = PT_Serif({
  subsets: ['latin'],
  variable: '--font-pt-serif',
  weight: ['400'],
});
