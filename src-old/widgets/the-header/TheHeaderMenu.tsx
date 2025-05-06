'use client';

import { FC } from 'react';
import { BellAlertIcon, BellIcon, UserIcon } from '@heroicons/react/24/solid';
import { useOpenSubmenu } from '@/shared/utils';
import { useFindTasksQuery } from '@/entities/tasks';
import { TheHeaderNotifications } from './TheHeaderNotifications';
import { TheHeaderSubmenu } from './TheHeaderSubmenu';

export const TheHeaderMenu: FC = () => {
  const { data: tasks } = useFindTasksQuery('');
  const { isOpenSubmenu: isOpenNotifications, openSubmenu: openNotifications } = useOpenSubmenu(
    'headerNotifications',
    'headerOpenNotifications',
  );
  const { isOpenSubmenu, openSubmenu } = useOpenSubmenu('headerSubmenu', 'headerOpenMenu');

  const currentUnix = Date.parse(new Date().toString());
  const filteredTasks = tasks?.filter(task => {
    if (!task.isDone) {
      const deadlineUnix = Date.parse(task.deadline) + 86400000;
      if (deadlineUnix - currentUnix < 86400000 * 3) {
        return task;
      }
    }
  });

  return (
    <div>
      <ul className='flex items-center gap-x-3'>
        <li className='flex'>
          <button
            onClick={openNotifications}
            id='headerOpenNotifications'
            className='bg-c-blue-500 hover:bg-c-blue-600 outline-c-blue-500 relative cursor-pointer rounded-xl p-2 outline-offset-3 transition-colors'
          >
            {filteredTasks?.length ? (
              <>
                <BellAlertIcon className='size-5 text-white' />
                <span className='bg-c-red-500 absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full text-xs leading-none text-white'>
                  {filteredTasks.length}
                </span>
              </>
            ) : (
              <BellIcon className='size-5 text-white' />
            )}
          </button>
        </li>
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
      {isOpenNotifications && <TheHeaderNotifications />}
      {isOpenSubmenu && <TheHeaderSubmenu />}
    </div>
  );
};
