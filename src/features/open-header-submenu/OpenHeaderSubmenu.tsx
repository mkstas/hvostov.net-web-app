import { FC } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

interface Props {
  onClick: () => void;
}

export const OpenHeaderSubmenu: FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} id='headerOpenMenu' className='group cursor-pointer'>
      <UserCircleIcon className='text-yellow group-hover:text-yellow-dark size-9 transition-colors' />
    </button>
  );
};
