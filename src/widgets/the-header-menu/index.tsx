'use client';

import { FC } from 'react';
import { BellAlertIcon, BellIcon, UserIcon } from '@heroicons/react/24/solid';
import { useSubmenu } from '@/shared/hooks';
import { useFindAllSubjectQuery } from '@/entities/subject';
import { useFindNotificationsQuery } from '@/entities/task';
import { HeaderMenuNotifications } from './HeaderMenuNotifications';
import { HeaderMenuActions } from './HeaderMenuActions';

export const TheHeaderMenu: FC = () => {
  const { isOpenSubmenu: isOpenNotifications, openSubmenu: openNotifications } = useSubmenu(
    'header_notifications',
    'header_open_notifications',
  );

  const { isOpenSubmenu: isOpenActions, openSubmenu: openActions } = useSubmenu(
    'header_actions',
    'header_open_actions',
  );

  const { data: tasks, isLoading: isLoadingNotifications } = useFindNotificationsQuery();
  const { data: subjects, isLoading: isLoadingSubjects } = useFindAllSubjectQuery();

  const filteredTasks = tasks?.filter(task => {
    const currentUnix = Date.parse(new Date().toString());
    if (!task.isDone) {
      const deadlineUnix = Date.parse(task.deadline) + 86400000;
      if (deadlineUnix - currentUnix < 86400000 * 3) {
        return task;
      }
    }
  });

  return (
    <div>
      <div className='space-x-2'>
        <button
          onClick={openNotifications}
          id='header_open_notifications'
          className='bg-c-blue-500 hover:bg-c-blue-600 outline-c-blue-500 relative cursor-pointer rounded-xl p-2 outline-offset-3 transition-colors'
        >
          {!!filteredTasks?.length ? (
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
        <button
          onClick={openActions}
          id='header_open_actions'
          className='bg-c-orange-500 hover:bg-c-orange-600 outline-c-orange-500 cursor-pointer rounded-xl p-2 outline-offset-3 transition-colors'
        >
          <UserIcon className='size-5 text-white' />
        </button>
      </div>
      {!isLoadingSubjects && !isLoadingNotifications && isOpenNotifications && (
        <HeaderMenuNotifications tasks={filteredTasks!} subjects={subjects!} />
      )}
      {isOpenActions && <HeaderMenuActions />}
    </div>
  );
};
