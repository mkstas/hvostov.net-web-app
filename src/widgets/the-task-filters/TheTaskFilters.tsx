'use client';

import { FC, useState } from 'react';
import { FunnelIcon } from '@heroicons/react/16/solid';
import { cn } from '@/shared/utils';
import { FilterSubjects } from './the-filter-subjects';
import { TheFilterTaskTypes } from './the-filter-task-types';

export const TheTaskFilters: FC = () => {
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);

  return (
    <>
      <div
        className={cn('max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full', {
          'max-lg:bg-c-slate-600/20 z-50': isOpenFilters,
        })}
      >
        <div
          className={cn(
            'max-lg:fixed max-lg:-bottom-120 max-lg:left-0 max-lg:z-50 max-lg:max-h-96 max-lg:w-full max-lg:overflow-y-auto max-lg:rounded-t-3xl lg:space-y-4',
            { 'max-lg:-translate-y-132': isOpenFilters },
          )}
        >
          <FilterSubjects />
          <TheFilterTaskTypes />
        </div>
      </div>
      <div
        className={cn('fixed bottom-0 left-0 z-50 flex w-full bg-white lg:hidden', {
          'rounded-t-3xl': !isOpenFilters,
        })}
      >
        <button onClick={() => setIsOpenFilters(!isOpenFilters)} className='flex-1 p-4'>
          <FunnelIcon className='text-c-slate-500 mx-auto size-4' />
        </button>
      </div>
    </>
  );
};
