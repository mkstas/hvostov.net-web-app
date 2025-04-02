import { forwardRef, HTMLProps } from 'react';
import { cn } from '@/shared/utils/cn';

interface Props extends HTMLProps<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
}

const UiTextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
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
          { 'border-slate-300 focus:border-indigo-600 focus:ring-indigo-600': !error },
          { 'border-red-600 focus:border-red-600 focus:ring-red-600': error },
        )}
      />
      {error && <span className='text-left text-red-600'>{error}</span>}
    </div>
  );
});

UiTextField.displayName = 'UiTextField';

export { UiTextField };
