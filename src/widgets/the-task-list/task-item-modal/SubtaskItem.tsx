import { FC } from 'react';
import { Subtask } from '@/entities/subtasks';
import { UiButton } from '@/components';
import { CheckIcon } from '@heroicons/react/24/solid';

interface Props {
  subtask: Subtask;
}

export const SubtaskItem: FC<Props> = ({ subtask }) => {
  return (
    <div className='grid grid-cols-[1fr_auto]'>
      <p>{subtask.description}</p>
      <div className='flex space-x-2'>
        <UiButton className='rounded-xl p-1'>
          <CheckIcon className='size-4' />
        </UiButton>
      </div>
    </div>
  );
};
