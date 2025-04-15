import { FC } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

interface Props {
  onClickButton: () => void;
}

export const OpenCreateFilter: FC<Props> = ({ onClickButton }) => {
  return (
    <button
      onClick={onClickButton}
      className='bg-c-slate-200 hover:bg-c-slate-300 outline-c-slate-600 cursor-pointer rounded-xl p-2 transition-colors'
    >
      <PlusIcon className='size-4' />
    </button>
  );
};
