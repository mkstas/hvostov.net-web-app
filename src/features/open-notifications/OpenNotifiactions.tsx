import { BellIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';

export const OpenNotifications: FC = () => {
  return (
    <button className='bg-c-blue-500 hover:bg-c-blue-600 outline-c-blue-500 cursor-pointer rounded-xl p-2 outline-offset-3 transition-colors'>
      <BellIcon className='size-5 text-white' />
    </button>
  );
};
