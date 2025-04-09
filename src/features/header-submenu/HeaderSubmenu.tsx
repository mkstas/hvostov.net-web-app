'use client';

import { FC } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { AdjustmentsHorizontalIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { UiSheet } from '@/components';
import { useAppDispatch, api } from '@/shared/stores';
import { ROUTES } from '@/shared/routes';
import { useLogoutUserMutation } from '@/entities/users';

export const HeaderSubmenu: FC = () => {
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
      className='shadow-font/5 absolute top-16 -right-4 z-50 w-60 overflow-hidden rounded-3xl shadow-lg'
    >
      <UiSheet>
        <ul className='-mx-4 -my-1'>
          <li>
            <Link
              href={ROUTES.SETTINGS}
              className='flex w-full cursor-pointer items-center gap-4 px-4 py-2 transition-colors hover:bg-slate-200'
            >
              <AdjustmentsHorizontalIcon className='text-c-blue-500 size-6' />
              <span>Настройки</span>
            </Link>
          </li>
          <li>
            <button
              onClick={onClickExit}
              className='flex w-full cursor-pointer items-center gap-4 px-4 py-2 transition-colors hover:bg-slate-200'
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
