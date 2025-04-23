import { FC } from 'react';
import { useFindSubtasksQuery } from '@/entities/subtasks';
import { CreateSubtaskForm } from '@/features/create-subtask-form';
import { SubtaskItem } from './SubtaskItem';
import { SubtaskItemSkeleton } from './SubtaskItemSkeleton';

interface Props {
  taskId: number;
}

export const SubtaskLIst: FC<Props> = ({ taskId }) => {
  const { data: subtasks, isLoading, isSuccess } = useFindSubtasksQuery(taskId);

  return (
    <div className='space-y-4'>
      <h3 className='text-lg font-medium'>Список подзадач</h3>
      <CreateSubtaskForm taskId={taskId} />
      <ul className='space-y-1'>
        {!isLoading &&
          isSuccess &&
          subtasks.map(subtask => (
            <li key={subtask.subtaskId}>
              <SubtaskItem subtask={subtask} />
            </li>
          ))}
        {isLoading &&
          Array(3)
            .fill(0)
            .map((_, index) => (
              <li key={index}>
                <SubtaskItemSkeleton />
              </li>
            ))}
      </ul>
    </div>
  );
};
