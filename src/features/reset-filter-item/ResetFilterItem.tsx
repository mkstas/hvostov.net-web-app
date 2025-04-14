import { FC } from 'react';
import { useResetFilter } from './useResetFilter';

interface Props {
  filterName: string;
}

export const ResetFilterItem: FC<Props> = ({ filterName }) => {
  const { onClickButton } = useResetFilter(filterName);

  return (
    <button
      onClick={onClickButton}
      className='text-c-blue-500 hover:text-c-blue-600 outline-c-slate-600 w-full cursor-pointer font-medium transition-colors'
    >
      Сбросить
    </button>
  );
};
