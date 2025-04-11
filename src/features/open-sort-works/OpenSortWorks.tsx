import { FC } from 'react';
import { ArrowsUpDownIcon } from '@heroicons/react/24/solid';

export const OpenSortWorks: FC = () => {
  return (
    <button className='hover:bg-c-slate-300 bg-c-slate-200 cursor-pointer rounded-xl p-2 transition-colors'>
      <ArrowsUpDownIcon className='size-5' />
    </button>
  );
};
