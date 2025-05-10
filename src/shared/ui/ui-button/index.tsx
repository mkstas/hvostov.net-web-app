import { FC, PropsWithChildren } from 'react';
import { cn } from '../cn';

interface Props extends PropsWithChildren {
  className?: string;
  variant?: 'md' | 'lg';
  color?: 'blue' | 'red' | 'green' | 'slate';
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}

export const UiButton: FC<Props> = props => {
  const { children, className, variant = 'md', color = 'blue', disabled = false, type, onClick } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        'rounded-xl font-medium text-white outline-offset-3 transition-colors',
        {
          'px-3 py-2': variant === 'md',
          'px-4 py-3': variant === 'lg',
          'bg-c-blue-500 outline-c-blue-500 hover:bg-c-blue-600': !disabled && color === 'blue',
          'bg-c-blue-400': disabled && color === 'blue',
          'bg-c-red-500 outline-c-red-500 hover:bg-c-red-600': !disabled && color === 'red',
          'bg-c-red-400': disabled && color === 'red',
          'bg-c-green-500 outline-c-green-500 hover:bg-c-green-600': !disabled && color === 'green',
          'bg-c-green-400': disabled && color === 'green',
          'bg-c-slate-200 outline-c-slate-500 hover:bg-c-slate-300 text-c-slate-500': !disabled && color === 'slate',
          'bg-c-slate-400': disabled && color === 'green',
          'cursor-pointer': !disabled,
          'cursor-not-allowed': disabled,
        },
        className,
      )}
    >
      {children}
    </button>
  );
};
