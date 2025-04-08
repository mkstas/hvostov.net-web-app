import { BellIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';

export const OpenNotifications: FC = () => {
  return (
    <button className='bg-blue hover:bg-blue-dark cursor-pointer rounded-xl p-2 transition-colors'>
      <BellIcon className='size-5 text-white' />
    </button>
  );
};
