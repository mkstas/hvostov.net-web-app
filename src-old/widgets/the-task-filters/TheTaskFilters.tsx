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
      <div className='fixed bottom-0 left-0 z-20 w-full rounded-t-3xl bg-white lg:hidden'>
        <button onClick={() => setIsOpenFilters(!isOpenFilters)} className='group w-full cursor-pointer p-4'>
          <FunnelIcon className='text-c-slate-500 group-hover:text-c-blue-500 mx-auto size-4 transition-colors' />
        </button>
      </div>
      <div
        className={cn('grid max-lg:fixed max-lg:left-0 max-lg:h-full max-lg:w-full', {
          'max-lg:bg-c-slate-600/20 top-0 max-lg:z-50 max-lg:grid-rows-[1fr_auto] max-lg:items-end': isOpenFilters,
          'max-lg:-bottom-full': !isOpenFilters,
        })}
      >
        <div className='max-lg:h-full max-lg:max-h-96 max-lg:overflow-y-auto max-lg:rounded-t-3xl max-lg:bg-white lg:grid lg:gap-y-4'>
          <FilterSubjects />
          <TheFilterTaskTypes />
        </div>
        <div className='bg-white lg:hidden'>
          <button onClick={() => setIsOpenFilters(!isOpenFilters)} className='group w-full cursor-pointer p-4'>
            <FunnelIcon className='text-c-slate-500 group-hover:text-c-blue-500 mx-auto size-4 transition-colors' />
          </button>
        </div>
      </div>
    </>
  );
};
