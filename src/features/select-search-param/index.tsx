import { FC, useEffect, useState } from 'react';
import { useCustomSearchParams } from '@/shared/hooks';
import { cn } from '@/shared/ui/cn';

interface Props {
  param: string;
  value: {
    id: number;
    title: string;
  };
}

export const SelectSearchParam: FC<Props> = ({ param, value }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { getSearchParams, appendSearchParam, deleteSearchParam } = useCustomSearchParams(param);

  const onClickButton = () => {
    if (getSearchParams().find(param => param === String(value.id))) {
      deleteSearchParam(String(value.id));
    } else {
      appendSearchParam(String(value.id));
    }
  };

  useEffect(() => {
    if (getSearchParams().find(param => param === String(value.id))) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [getSearchParams, value]);

  return (
    <button
      onClick={onClickButton}
      className={cn('outline-c-slate-600 w-full cursor-pointer rounded-xl px-2 py-1 text-left transition-colors', {
        'bg-c-slate-200 hover:bg-c-slate-300': !isSelected,
        'text-c-blue-600 bg-c-sky-400 hover:bg-c-sky-500': isSelected,
      })}
    >
      {value.title}
    </button>
  );
};
