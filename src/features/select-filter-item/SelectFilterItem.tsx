'use client';

import { FC } from 'react';
import { cn } from '@/shared/utils';

interface Props {
  title: string;
  isSelected: boolean;
}

export const SelectFilterItem: FC<Props> = ({ title, isSelected }) => {
  return (
    <button
      className={cn('w-full cursor-pointer rounded-xl px-2 py-1 text-left transition-colors', {
        'bg-c-slate-200 hover:bg-c-blue-300': !isSelected,
        'text-c-blue-500 bg-c-blue-300': isSelected,
      })}
    >
      {title}
    </button>
  );
};
