import { UiSkeleton } from '@/components';
import { FC } from 'react';

export const SubtaskItemSkeleton: FC = () => {
  return (
    <div className='grid grid-cols-[1fr_auto] gap-x-2'>
      <UiSkeleton className='h-6' />
      <UiSkeleton className='h-6 w-20' />
    </div>
  );
};
