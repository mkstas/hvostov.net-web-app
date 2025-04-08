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
      className='bg-yellow hover:bg-yellow-dark cursor-pointer rounded-xl p-2 transition-colors'
    >
      <UserIcon className='size-5 text-white' />
    </button>
  );
};
