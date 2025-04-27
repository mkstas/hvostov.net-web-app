'use client';

import { FC } from 'react';
import { useOpenSubmenu } from '@/shared/utils';
import { TheHeaderSubmenu } from './TheHeaderSubmenu';
import { UserIcon } from '@heroicons/react/24/solid';

export const TheHeaderMenu: FC = () => {
  const { isOpenSubmenu, openSubmenu } = useOpenSubmenu('headerSubmenu', 'headerOpenMenu');

  return (
    <div>
      <ul className='flex items-center gap-x-3'>
        <li className='flex'>
          <button
            onClick={openSubmenu}
            id='headerOpenMenu'
            className='bg-c-orange-500 hover:bg-c-orange-600 outline-c-orange-500 cursor-pointer rounded-xl p-2 outline-offset-3 transition-colors'
          >
            <UserIcon className='size-5 text-white' />
          </button>
        </li>
      </ul>
      {isOpenSubmenu && <TheHeaderSubmenu />}
    </div>
  );
};
