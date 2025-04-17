'use client';

import { FC, useState } from 'react';
import { useOpenModal } from '@/shared/utils';
import { Task, useFindTasksQuery } from '@/entities/tasks';
import { TaskListItem } from './TaskListItem';
import { TaskListItemSkeleton } from './TaskListItemSkeleton';
import { TaskListItemModal } from './TaskListItemModal';

export const TheTaskList: FC = () => {
  const { data: tasks, isLoading, isSuccess } = useFindTasksQuery();
  const { isOpenModal, openModal } = useOpenModal('modalOverlay', 'modalCloseButton');

  const [currentTask, setCurrentTask] = useState<Task>({
    taskId: 0,
    subjectId: 0,
    taskTypeId: 0,
    title: '',
    description: '',
    deadline: '',
  });

  const onClickTask = (task: Task) => {
    setCurrentTask(task);
    openModal();
  };

  return (
    <div>
      <ul className='grid grid-cols-3 gap-4'>
        {isLoading &&
          Array(6)
            .fill(0)
            .map((_, index) => <TaskListItemSkeleton key={index} />)}
        {!isLoading &&
          isSuccess &&
          tasks.map(task => (
            <li key={task.taskId}>
              <TaskListItem task={task} onClick={() => onClickTask(task)} />
            </li>
          ))}
      </ul>
      {isOpenModal && <TaskListItemModal task={currentTask} />}
    </div>
  );
};
