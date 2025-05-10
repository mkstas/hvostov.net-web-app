import { FC, PropsWithChildren } from 'react';
import { cn } from '../cn';

interface Props extends PropsWithChildren {
  className?: string;
  onSubmit?: () => void;
}

export const UiForm: FC<Props> = ({ children, className, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={cn('grid gap-y-4', className)}>
      {children}
    </form>
  );
};
