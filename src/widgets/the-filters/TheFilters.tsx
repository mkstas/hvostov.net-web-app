'use client';

import { FC, useState } from 'react';
import { FunnelIcon } from '@heroicons/react/16/solid';
import { TheFilterSubjects } from '../the-filter-subjects';
import { TheFilterTaskTypes } from '../the-filter-task-types';
import { cn } from '@/shared/utils';

export const TheFilters: FC = () => {
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);

  return (
    <>
      <div
        className={cn('max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full', {
          'max-lg:bg-c-slate-600/20 z-50': isOpenFilters,
          '-z-50': !isOpenFilters,
        })}
      >
        <div
          className={cn(
            'left-0 overflow-y-auto max-lg:fixed max-lg:-bottom-120 max-lg:z-50 max-lg:max-h-96 max-lg:w-full max-lg:rounded-t-3xl lg:space-y-4',
            { 'max-lg:-translate-y-134': isOpenFilters },
          )}
        >
          <TheFilterSubjects />
          <TheFilterTaskTypes />
        </div>
      </div>
      <div
        className={cn('fixed bottom-0 left-0 z-50 flex w-full bg-white lg:hidden', {
          'rounded-t-3xl': !isOpenFilters,
        })}
      >
        <button onClick={() => setIsOpenFilters(!isOpenFilters)} className='flex-1 p-4'>
          <FunnelIcon className='text-c-slate-500 mx-auto size-6' />
        </button>
      </div>
    </>
  );
};
