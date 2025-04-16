import { FC } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';

interface Props {
  onClickButton: () => void;
}

export const OpenUpdateFilter: FC<Props> = ({ onClickButton }) => {
  return (
    <button
      onClick={onClickButton}
      className='hover:bg-c-slate-300 outline-c-slate-600 cursor-pointer rounded-xl p-1 transition-colors'
    >
      <EllipsisVerticalIcon className='size-5' />
    </button>
  );
};
