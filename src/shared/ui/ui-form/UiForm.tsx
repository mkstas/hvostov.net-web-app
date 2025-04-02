import { cn } from '@/shared/utils/cn';
import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  onSubmit?: () => void;
}

export const UiForm: FC<Props> = ({ children, className, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={cn('grid gap-4', className)}>
      {children}
    </form>
  );
};
