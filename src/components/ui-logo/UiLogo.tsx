import { FC } from 'react';
import Image from 'next/image';
import { Pacifico } from 'next/font/google';
import { cn } from '@/shared/utils';

const pacifico = Pacifico({ subsets: ['cyrillic-ext', 'latin-ext'], weight: '400' });

interface Props {
  className?: string;
}

export const UiLogo: FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center justify-center gap-x-2', pacifico.className, className)}>
      <Image src='logotype.svg' alt='Иконка логитипа' width={32} height={32} />
      <div className='text-2xl'>Антихвост</div>
    </div>
  );
};
