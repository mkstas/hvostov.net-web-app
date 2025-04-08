import { FC } from 'react';
import { ArrowsUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { UiButton } from '@/shared/ui';

export const TheWorksHeader: FC = () => {
  return (
    <div className='grid grid-cols-[auto_1fr_auto] items-center gap-4'>
      <button className='cursor-pointer rounded-xl bg-slate-200 p-2 transition-colors hover:bg-slate-300'>
        <ArrowsUpDownIcon className='size-5' />
      </button>
      <div className='relative'>
        <input
          type='text'
          className='focus:border-blue focus:ring-blue w-full rounded-xl border border-slate-300 py-1.25 pr-8 pl-4 outline-none focus:ring'
          placeholder='Найти по названию...'
        />
        <div className='absolute top-1/2 right-2 -translate-1/2'>
          <MagnifyingGlassIcon className='size-5' />
        </div>
      </div>
      <UiButton className='py-1.5'>Добавить работу</UiButton>
    </div>
  );
};
