'use client';

import { FC } from 'react';
import { BellIcon, UserIcon } from '@heroicons/react/24/solid';
import { useSubmenu } from '@/shared/hooks';
import { HeaderMenuActions } from './HeaderMenuActions';
import { HeaderMenuNotifications } from './HeaderMenuNotifications';

export const HeaderMenu: FC = () => {
  const { isOpenSubmenu: isOpenNotifications, openSubmenu: openNotifications } = useSubmenu(
    'header_notifications',
    'header_open_notifications',
  );

  const { isOpenSubmenu: isOpenActions, openSubmenu: openActions } = useSubmenu(
    'header_actions',
    'header_open_actions',
  );

  return (
    <div>
      <div className='space-x-2'>
        <button
          onClick={openNotifications}
          id='header_open_notifications'
          className='bg-c-blue-500 hover:bg-c-blue-600 outline-c-blue-500 relative cursor-pointer rounded-xl p-2 outline-offset-3 transition-colors'
        >
          <BellIcon className='size-5 text-white' />
        </button>
        <button
          onClick={openActions}
          id='header_open_actions'
          className='bg-c-orange-500 hover:bg-c-orange-600 outline-c-orange-500 cursor-pointer rounded-xl p-2 outline-offset-3 transition-colors'
        >
          <UserIcon className='size-5 text-white' />
        </button>
      </div>
      {isOpenNotifications && <HeaderMenuNotifications />}
      {isOpenActions && <HeaderMenuActions />}
    </div>
  );
};
