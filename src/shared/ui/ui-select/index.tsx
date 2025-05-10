import { forwardRef, HTMLProps } from 'react';
import { cn } from '../cn';

interface Props extends HTMLProps<HTMLSelectElement> {
  className?: string;
  label?: string;
  error?: string;
  variant?: 'md' | 'lg';
  options: { value: number; label: string }[];
}

const UiSelect = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { className, label, error, variant = 'md', options, ...updatedProps } = props;

  return (
    <div className='grid'>
      {label && (
        <label htmlFor={updatedProps.id} className='pb-1 text-left text-sm font-medium'>
          {label}
        </label>
      )}
      <select
        ref={ref}
        {...updatedProps}
        className={cn(
          'rounded-xl border bg-white outline-none focus:ring',
          {
            'px-3 py-2': variant === 'md',
            'px-4 py-3': variant === 'lg',
            'focus:border-c-blue-500 focus:ring-c-blue-500 border-c-slate-400': !error,
            'border-c-red-500 focus:border-c-red-500 focus:ring-c-red-500': error,
          },
          className,
        )}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className='text-c-red-500 mt-1 text-left text-sm font-medium'>{error}</div>}
    </div>
  );
});

UiSelect.displayName = 'UiSelect';

export { UiSelect };
