'use client';

import { FC } from 'react';
import Link from 'next/link';
import { AdjustmentsHorizontalIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { ROUTES } from '@/shared/routes';
import { UiSheet } from '@/components';
import { useHeaderSubmenu } from './useHeaderSubmenu';

export const TheHeaderSubmenu: FC = () => {
  const { onClickExit } = useHeaderSubmenu();

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
              className='hover:bg-c-slate-200 focus-visible:bg-c-slate-200 flex w-full cursor-pointer items-center gap-4 px-4 py-2 transition-colors outline-none'
            >
              <AdjustmentsHorizontalIcon className='text-c-blue-500 size-6' />
              <span>Настройки</span>
            </Link>
          </li>
          <li>
            <button
              onClick={onClickExit}
              className='hover:bg-c-slate-200 focus-visible:bg-c-slate-200 flex w-full cursor-pointer items-center gap-4 px-4 py-2 transition-colors outline-none'
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
