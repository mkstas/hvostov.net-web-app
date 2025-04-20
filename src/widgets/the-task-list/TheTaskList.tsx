'use client';

import { FC, useState } from 'react';
import { useOpenModal } from '@/shared/utils';
import { Task, useFindTasksQuery } from '@/entities/tasks';
import { TaskListItem } from './task-list-item/TaskListItem';
import { TaskListItemSkeleton } from './task-list-item/TaskListItemSkeleton';
import { TaskListItemModal } from './task-list-item/TaskListItemModal';

export const TheTaskList: FC = () => {
  const { data: tasks, isLoading, isSuccess } = useFindTasksQuery();
  const { isOpenModal, openModal, closeModal } = useOpenModal('modalOverlay', 'modalCloseButton');
  const [currentTask, setCurrentTask] = useState<Task>();

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
            .map((_, index) => (
              <li key={index}>
                <TaskListItemSkeleton />
              </li>
            ))}
        {!isLoading &&
          isSuccess &&
          tasks.map(task => (
            <li key={task.taskId}>
              <TaskListItem task={task} onClick={() => onClickTask(task)} />
            </li>
          ))}
      </ul>
      {isOpenModal && <TaskListItemModal taskId={currentTask!.taskId} onCloseModal={closeModal} />}
    </div>
  );
};
