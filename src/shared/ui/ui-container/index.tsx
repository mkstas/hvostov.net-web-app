import { FC, PropsWithChildren } from 'react';
import { cn } from '../cn';

interface Props extends PropsWithChildren {
  className?: string;
}

export const UiContainer: FC<Props> = ({ children, className }) => {
  return <div className={cn('mx-auto max-w-6xl', className)}>{children}</div>;
};
