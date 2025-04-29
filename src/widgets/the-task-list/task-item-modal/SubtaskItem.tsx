import { FC } from 'react';
import { CheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import { cn } from '@/shared/utils';
import { UiButton } from '@/components';
import { Subtask, useDeleteSubtaskMutation, useUpdateSubtaskMutation } from '@/entities/subtasks';

interface Props {
  subtask: Subtask;
}

export const SubtaskItem: FC<Props> = ({ subtask }) => {
  const [updateSubtask, {}] = useUpdateSubtaskMutation();
  const [deleteSubtask, {}] = useDeleteSubtaskMutation();

  const onClickDone = () => updateSubtask({ subtaskId: subtask.subtaskId, isDone: true });
  const onClickUnDone = () => updateSubtask({ subtaskId: subtask.subtaskId, isDone: false });
  const onClickDelete = () => deleteSubtask(subtask.subtaskId);

  return (
    <div className='grid grid-cols-[1fr_auto] items-center'>
      <p className={cn({ 'text-c-slate-500 line-through': subtask.isDone })}>{subtask.description}</p>
      <div className='flex gap-x-1'>
        {subtask.isDone ? (
          <UiButton onClick={onClickUnDone} color='slate' className='rounded-lg p-1'>
            <CheckIcon className='size-4' />
          </UiButton>
        ) : (
          <UiButton onClick={onClickDone} color='green' className='rounded-lg p-1'>
            <CheckIcon className='size-4' />
          </UiButton>
        )}
        <UiButton onClick={onClickDelete} color='red' className='rounded-lg p-1'>
          <TrashIcon className='size-4' />
        </UiButton>
      </div>
    </div>
  );
};
