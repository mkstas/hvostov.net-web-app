import { FC } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { useFindSubtasksQuery, useUpdateSubtaskMutation } from '@/entities/subtasks';
import { CreateSubtaskForm } from '@/features/create-subtask-form';
import { cn } from '@/shared/utils';

interface Props {
  taskId: number;
}

export const SubtaskList: FC<Props> = ({ taskId }) => {
  const { data: subtasks } = useFindSubtasksQuery(taskId);
  const [updateSubtask, {}] = useUpdateSubtaskMutation();

  const onClickDoneSubtask = (subtaskId: number) => {
    updateSubtask({ subtaskId, isDone: true });
  };

  return (
    <div>
      <CreateSubtaskForm taskId={taskId} />
      <ul>
        {subtasks?.map(subtask => (
          <li key={subtask.subtaskId} className='flex items-center justify-between space-x-4'>
            <p className={cn({ 'line-through': subtask.isDone })}>{subtask.description}</p>
            {!subtask.isDone && (
              <button
                onClick={() => onClickDoneSubtask(subtask.subtaskId)}
                className='bg-c-green-500 cursor-pointer rounded-xl p-2'
              >
                <CheckIcon className='size-4 text-white' />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
