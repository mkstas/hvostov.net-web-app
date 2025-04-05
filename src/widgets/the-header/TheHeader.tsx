import { FC } from 'react';
import { Pacifico } from 'next/font/google';
import { BellIcon, UserIcon } from '@heroicons/react/24/solid';
import { cn } from '@/shared/utils/cn';

const pacifico = Pacifico({ weight: '400' });

export const TheHeader: FC = () => {
  return (
    <header className='flex items-center justify-between rounded-b-2xl bg-white p-4'>
      <span className={cn('font-semibold', pacifico.className)}>АнтиХвост</span>
      <div className='flex items-center gap-3'>
        <button className='group cursor-pointer p-2'>
          <BellIcon className='group-hover:text-custom-blue size-4 text-slate-500 transition-colors' />
        </button>
        <button className='group cursor-pointer p-2'>
          <UserIcon className='group-hover:text-custom-blue size-4 text-slate-500 transition-colors' />
        </button>
      </div>
    </header>
  );
};
