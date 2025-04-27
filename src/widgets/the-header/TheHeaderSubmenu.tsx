'use client';

import { FC } from 'react';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { UiSheet } from '@/components';
import { useHeaderSubmenu } from './useHeaderSubmenu';

export const TheHeaderSubmenu: FC = () => {
  const { onClickExit } = useHeaderSubmenu();

  return (
    <div
      id='headerSubmenu'
      className='shadow-c-slate-500/10 absolute top-16 -right-4 w-60 overflow-hidden rounded-3xl shadow-lg'
    >
      <UiSheet>
        <ul className='-mx-4 -my-1'>
          <li>
            <button
              onClick={onClickExit}
              className='hover:bg-c-slate-200 focus-visible:bg-c-slate-200 flex w-full cursor-pointer items-center gap-x-4 px-4 py-2 transition-colors outline-none'
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
