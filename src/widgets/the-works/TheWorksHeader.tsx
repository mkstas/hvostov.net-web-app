import { FC } from 'react';
import { ArrowsUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { UiButton } from '@/components';

export const TheWorksHeader: FC = () => {
  return (
    <div className='grid grid-cols-[auto_1fr_auto] items-center gap-4'>
      <button className='hover:bg-c-slate-300 bg-c-slate-200 cursor-pointer rounded-xl p-2 transition-colors'>
        <ArrowsUpDownIcon className='size-5' />
      </button>
      <div className='relative'>
        <input
          type='text'
          className='focus:border-c-blue-500 focus:ring-c-blue-500 border-c-slate-300 w-full rounded-xl border py-1.25 pr-8 pl-4 outline-none focus:ring'
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
