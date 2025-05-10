import { forwardRef, HTMLProps } from 'react';
import { cn } from '../cn';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
  variant?: 'md' | 'lg';
}

const UiInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, label, error, variant = 'md', ...updatedProps } = props;

  return (
    <div className={cn('grid')}>
      {label && (
        <label htmlFor={updatedProps.id} className='pb-1 text-left text-sm font-medium'>
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...updatedProps}
        className={cn(
          'placeholder:text-c-slate-500 w-full rounded-xl border bg-white outline-none focus:ring',
          {
            'px-3 py-1.75': variant === 'md',
            'px-4 py-2.75': variant === 'lg',
            'focus:border-c-blue-500 focus:ring-c-blue-500 border-c-slate-400': !error,
            'border-c-red-500 focus:border-c-red-500 focus:ring-c-red-500': error,
          },
          className,
        )}
      />
      {error && <div className='text-c-red-500 mt-1 text-left text-sm font-medium'>{error}</div>}
    </div>
  );
});

UiInput.displayName = 'UiInput';

export { UiInput };
