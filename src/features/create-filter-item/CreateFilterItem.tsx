import { FC } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

export const CreateFilterItem: FC = () => {
  return (
    <button className='bg-c-slate-200 hover:bg-c-slate-300 cursor-pointer rounded-xl p-2 transition-colors'>
      <PlusIcon className='size-4' />
    </button>
  );
};
