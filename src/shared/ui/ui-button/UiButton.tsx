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
        'bg-custom-blue rounded-xl px-4 py-3 font-medium text-white outline-offset-3 transition-colors',
        { 'outline-custom-blue cursor-pointer': !disabled },
        { 'cursor-not-allowed': disabled },
        className,
      )}
    >
      {children}
    </button>
  );
};
