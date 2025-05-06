import { useFilterParams } from '@/shared/utils';

export const useResetFilter = (filterName: string) => {
  const { getFilterParams, deleteFilterParam } = useFilterParams(filterName);

  const onClickButton = () => {
    const filterParams = getFilterParams();
    filterParams.forEach(param => deleteFilterParam(param));
  };

  return { onClickButton };
};
