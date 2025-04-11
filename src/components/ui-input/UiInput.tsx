import { forwardRef, HTMLProps } from 'react';
import { cn } from '@/shared/utils';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
}

const UiInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, label, error, ...updatedProps } = props;

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
          'placeholder:text-c-slate-400 rounded-xl border bg-white px-4 py-3 outline-none focus:ring',
          { 'focus:border-c-blue-500 focus:ring-c-blue-500 border-c-slate-300': !error },
          { 'border-c-red-500 focus:border-c-red-500 focus:ring-c-red-500': error },
          className,
        )}
      />
      {error && <div className='text-c-red-500 mt-1 text-left text-sm'>{error}</div>}
    </div>
  );
});

UiInput.displayName = 'UiInput';

export { UiInput };
