import { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/utils/cn';

interface Props extends PropsWithChildren {
  className?: string;
  variant?: 'h1' | 'h2' | 'h3';
}

export const UiHeading: FC<Props> = ({ children, className, variant = 'h1' }) => {
  const Tag = variant;
  const variants = { h1: 'text-2xl', h2: 'text-xl', h3: 'text-lg' };

  return <Tag className={cn('font-bold', className, variants[variant])}>{children}</Tag>;
};
