import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';

interface Props {
  onClickButton: () => void;
}

export const OpenUpdateTask: FC<Props> = ({ onClickButton }) => {
  return (
    <button
      className='hover:bg-c-slate-300 outline-c-slate-600 cursor-pointer rounded-xl p-2 transition-colors'
      onClick={onClickButton}
    >
      <PencilSquareIcon className='text-c-slate-500 size-5' />
    </button>
  );
};
