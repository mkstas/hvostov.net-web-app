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
      className='bg-c-orange-500 hover:bg-c-orange-600 outline-c-orange-500 cursor-pointer rounded-xl p-2 outline-offset-3 transition-colors'
    >
      <UserIcon className='size-5 text-white' />
    </button>
  );
};
