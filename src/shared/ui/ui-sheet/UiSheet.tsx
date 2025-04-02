import { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/utils/cn';

interface Props extends PropsWithChildren {
  className?: string;
}

export const UiSheet: FC<Props> = ({ children, className }) => {
  return (
    <div className={cn('rounded-2xl bg-white p-4 shadow-lg shadow-slate-800/10', className)}>
      {children}
    </div>
  );
};
