import { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/utils';

interface Props extends PropsWithChildren {
  className?: string;
}

export const UiSkeleton: FC<Props> = ({ children, className }) => {
  return <div className={cn('animate-pulse rounded-xl bg-slate-200', className)}>{children}</div>;
};
