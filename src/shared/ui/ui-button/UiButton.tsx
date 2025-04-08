import { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/hooks';

interface Props extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const UiButton: FC<Props> = ({ children, className, disabled = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'rounded-xl px-4 py-3 font-medium text-white outline-offset-3 transition-colors',
        { 'bg-blue outline-blue hover:bg-blue-dark cursor-pointer': !disabled },
        { 'bg-blue-light cursor-not-allowed': disabled },
        className,
      )}
    >
      {children}
    </button>
  );
};
