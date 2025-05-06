'use client';

import { FC } from 'react';
import { cn } from '@/shared/utils';
import { useSelectFilter } from './useSelectFilter';

interface Props {
  filterValue: {
    id: number;
    title: string;
  };
  filterName: string;
}

export const SelectFilterItem: FC<Props> = ({ filterName, filterValue }) => {
  const { isSelected, onClickButton } = useSelectFilter(filterName, filterValue.id.toString());

  return (
    <button
      onClick={onClickButton}
      className={cn('outline-c-slate-600 w-full cursor-pointer rounded-xl px-2 py-1 text-left transition-colors', {
        'bg-c-slate-200 hover:bg-c-slate-300': !isSelected,
        'text-c-blue-600 bg-c-sky-400 hover:bg-c-sky-500': isSelected,
      })}
    >
      {filterValue.title}
    </button>
  );
};
