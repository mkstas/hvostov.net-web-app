import { FC } from 'react';
import { UiSkeleton } from '@/components';

export const TaskItemInfoSkeleton: FC = () => {
  return (
    <div className='space-y-4'>
      <div className='space-y-1'>
        <UiSkeleton className='h-7 w-56' />
        <UiSkeleton className='h-5 w-40' />
        <UiSkeleton className='h-5 w-40' />
      </div>
      <UiSkeleton className='h-12' />
    </div>
  );
};
