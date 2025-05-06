'use client';

import { useEffect, useState } from 'react';
import { useFilterParams } from '@/shared/utils';

export const useSelectFilter = (filterName: string, value: string) => {
  const [isSelected, setIsSelected] = useState(false);
  const { getFilterParams, appendFilterParam, deleteFilterParam } = useFilterParams(filterName);

  const onClickButton = () => {
    const filterParams = getFilterParams();
    if (filterParams.find(param => param === value)) {
      deleteFilterParam(value);
    } else {
      appendFilterParam(value);
    }
  };

  useEffect(() => {
    const filterParams = getFilterParams();
    if (filterParams.find(param => param === value)) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [getFilterParams, value]);

  return { isSelected, onClickButton };
};
