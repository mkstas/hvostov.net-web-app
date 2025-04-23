import { FC } from 'react';
import { useFindSubtasksQuery } from '@/entities/subtasks';
import { SubtaskItem } from './SubtaskItem';

interface Props {
  taskId: number;
}

export const SubtaskLIst: FC<Props> = ({ taskId }) => {
  const { data: subtasks, isLoading } = useFindSubtasksQuery(taskId);

  return (
    <div>
      <ul>
        {!isLoading &&
          subtasks &&
          subtasks.map(subtask => (
            <li key={subtask.subtaskId}>
              <SubtaskItem subtask={subtask} />
            </li>
          ))}
      </ul>
    </div>
  );
};
