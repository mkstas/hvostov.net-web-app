import { cn } from '@/shared/utils/cn';
import { forwardRef, HTMLProps } from 'react';

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
        <label htmlFor={updatedProps.id} className='pb-1 text-left'>
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...updatedProps}
        className='rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-600 focus:ring focus:ring-indigo-600'
      />
      {error && <span className='text-red-600'>{error}</span>}
    </div>
  );
});

UiTextField.displayName = 'UiTextField';

export { UiTextField };
