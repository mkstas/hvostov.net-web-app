import { FC } from 'react';
import { UserIcon } from '@heroicons/react/24/solid';

interface Props {
  onClick: () => void;
}

export const OpenHeaderSubmenu: FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      id='headerOpenMenu'
      className='bg-c-yellow-500 hover:bg-c-yellow-600 outline-c-yellow-500 cursor-pointer rounded-xl p-2 outline-offset-3 transition-colors'
    >
      <UserIcon className='size-5 text-white' />
    </button>
  );
};
