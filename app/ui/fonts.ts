//You'll use this file to keep the fonts that will be used throughout your application.

//Import the Inter font from the next/font/google module - this will be your primary font. Then, specify what subset you'd like to load. In this case, 'latin':
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({subsets: ['latin']});

export const lusitana = Lusitana({weight: ['400', '700'], subsets: ['latin']});