'use client';

import { FC } from 'react';
import { useFindTasksQuery } from '@/entities/tasks';
import { TaskListItem } from './TaskListItem';
import { TaskListItemSkeleton } from './TaskListItemSkeleton';

export const TheTaskList: FC = () => {
  const { data: tasks, isLoading: isLoadingTasks } = useFindTasksQuery();

  return (
    <ul className='grid grid-cols-3 gap-4'>
      {isLoadingTasks &&
        Array(6)
          .fill(0)
          .map((_, index) => <TaskListItemSkeleton key={index} />)}
      {!isLoadingTasks &&
        tasks?.map(task => (
          <li key={task.taskId}>
            <TaskListItem {...task} />
          </li>
        ))}
    </ul>
  );
};
