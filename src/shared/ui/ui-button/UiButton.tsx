import { FC, PropsWithChildren } from 'react';
import { cn } from '@/shared/utils/cn';

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
        'rounded-2xl bg-indigo-600 px-4 py-3 font-medium text-white outline-offset-3 transition-colors',
        { 'cursor-pointer outline-indigo-600 hover:bg-indigo-700': !disabled },
        { 'cursor-not-allowed bg-indigo-400': disabled },
        className,
      )}
    >
      {children}
    </button>
  );
};
