import { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/cn';

interface Props extends PropsWithChildren {
  className?: string;
}

export const UiSheet: FC<Props> = ({ children, className }) => {
  return <div className={cn('rounded-3xl bg-white p-4', className)}>{children}</div>;
};
