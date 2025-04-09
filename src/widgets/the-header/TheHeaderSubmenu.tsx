'use client';

import { FC } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { AdjustmentsHorizontalIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { UiSheet } from '@/components';
import { ROUTES } from '@/shared/routes';
import { useAppDispatch, api } from '@/shared/stores';
import { useLogoutUserMutation } from '@/entities/users';

export const TheHeaderSubmenu: FC = () => {
  const dispatch = useAppDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const onClickExit = async () => {
    await logoutUser();
    dispatch(api.util.resetApiState());
    redirect(ROUTES.INDEX);
  };

  return (
    <div
      id='headerSubmenu'
      className='shadow-c-slate-500/10 absolute top-16 -right-4 z-50 w-60 overflow-hidden rounded-3xl shadow-lg'
    >
      <UiSheet>
        <ul className='-mx-4 -my-1'>
          <li>
            <Link
              href={ROUTES.SETTINGS}
              className='hover:bg-c-slate-200 flex w-full cursor-pointer items-center gap-4 px-4 py-2 transition-colors'
            >
              <AdjustmentsHorizontalIcon className='text-c-blue-500 size-6' />
              <span>Настройки</span>
            </Link>
          </li>
          <li>
            <button
              onClick={onClickExit}
              className='hover:bg-c-slate-200 flex w-full cursor-pointer items-center gap-4 px-4 py-2 transition-colors'
            >
              <ArrowRightStartOnRectangleIcon className='text-c-blue-500 size-6' />
              <span>Выйти</span>
            </button>
          </li>
        </ul>
      </UiSheet>
    </div>
  );
};
