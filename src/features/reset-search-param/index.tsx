import { FC } from 'react';
import { useCustomSearchParams } from '@/shared/hooks';

interface Props {
  param: string;
}

export const ResetSearchParam: FC<Props> = ({ param }) => {
  const { getSearchParams, deleteSearchParam } = useCustomSearchParams(param);

  const onClickButton = () => {
    getSearchParams().forEach(param => deleteSearchParam(param));
  };

  return (
    <button
      onClick={onClickButton}
      className='text-c-blue-500 hover:text-c-blue-600 outline-c-slate-600 w-full cursor-pointer font-medium transition-colors'
    >
      Сбросить
    </button>
  );
};
