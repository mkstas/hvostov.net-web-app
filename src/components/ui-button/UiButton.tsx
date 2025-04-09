import { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/utils';

interface Props extends PropsWithChildren {
  className?: string;
  variant?: 'sm' | 'md';
  disabled?: boolean;
  onClick?: () => void;
}

export const UiButton: FC<Props> = ({ children, className, variant = 'md', disabled = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'rounded-xl font-medium text-white outline-offset-3 transition-colors',
        { 'bg-c-blue-500 outline-c-blue-500 hover:bg-c-blue-600 cursor-pointer': !disabled },
        { 'bg-c-blue-400 cursor-not-allowed': disabled },
        { 'px-2 py-1': variant === 'sm' },
        { 'px-4 py-3': variant === 'md' },
        className,
      )}
    >
      {children}
    </button>
  );
};
