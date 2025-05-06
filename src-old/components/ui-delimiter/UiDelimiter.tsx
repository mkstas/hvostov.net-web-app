import { FC } from 'react';
import { cn } from '@/shared/utils';

interface Props {
  className?: string;
}

export const UiDelimiter: FC<Props> = ({ className }) => {
  return <div className={cn('bg-c-slate-400 h-0.25', className)}></div>;
};
