import { FC } from 'react';
import { FindWork } from '@/features/find-work';
import { OpenSortWorks } from '@/features/open-sort-works';
import { UiButton } from '@/components';

export const TheWorkActions: FC = () => {
  return (
    <div className='relative grid grid-cols-[auto_1fr_auto] items-center space-x-4'>
      <OpenSortWorks />
      <FindWork />
      <UiButton className='py-1.5'>Добавить работу</UiButton>
    </div>
  );
};
