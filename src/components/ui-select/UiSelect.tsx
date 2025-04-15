import { forwardRef, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLSelectElement> {
  options: { value: string; label: string }[];
  label?: string;
  error?: string;
}

const UiSelect = forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { options, label, error, id, ...updatedProps } = props;

  return (
    <div className='grid'>
      {label && (
        <label htmlFor={id} className='pb-1 text-left text-sm font-medium'>
          {label}
        </label>
      )}
      <select ref={ref} id={id} {...updatedProps}>
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
