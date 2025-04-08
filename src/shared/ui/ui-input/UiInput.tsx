import { forwardRef, HTMLProps } from 'react';
import { cn } from '@/shared/hooks';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
}

const UiInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, label, error, ...updatedProps } = props;

  return (
    <div className={cn('grid', className)}>
      {label && (
        <label htmlFor={updatedProps.id} className='pb-1 text-left text-sm font-medium'>
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...updatedProps}
        className={cn(
          'rounded-xl border bg-white px-4 py-3 outline-none placeholder:text-slate-400 focus:ring',
          { 'focus:border-blue focus:ring-blue border-slate-300': !error },
          { 'border-red-600 focus:border-red-600 focus:ring-red-600': error },
        )}
      />
      {error && <div className='mt-2 text-left text-sm text-red-600'>{error}</div>}
    </div>
  );
});

UiInput.displayName = 'UiInput';

export { UiInput };
