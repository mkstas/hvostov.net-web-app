import { FC } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

interface Props {
  onClick: () => void;
}

export const OpenHeaderSubmenu: FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className='cursor-pointer'>
      <UserCircleIcon className='text-custom-yellow size-9' />
    </button>
  );
};
