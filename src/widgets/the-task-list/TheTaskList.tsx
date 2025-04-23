'use client';

import { FC, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useOpenModal } from '@/shared/utils';
import { Task, useFindTasksQuery } from '@/entities/tasks';
import { TaskItem, TaskItemSkeleton } from './task-item';
import { TaskItemModal } from './task-item-modal';

export const TheTaskList: FC = () => {
  const searchParams = useSearchParams();
  const { data: tasks, isLoading, isSuccess } = useFindTasksQuery(searchParams.toString());
  const { isOpenModal, openModal, closeModal } = useOpenModal('modalOverlay', 'modalCloseButton');
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const onClickTask = (task: Task) => {
    setCurrentTask(task);
    openModal();
  };

  return (
    <div>
      <ul className='grid grid-cols-3 gap-4'>
        {!isLoading &&
          isSuccess &&
          tasks.map(task => (
            <li key={task.taskId}>
              <TaskItem task={task} onClickTask={() => onClickTask(task)} />
            </li>
          ))}
        {isLoading &&
          Array(6)
            .fill(0)
            .map((_, index) => (
              <li key={index}>
                <TaskItemSkeleton />
              </li>
            ))}
      </ul>
      {isOpenModal && <TaskItemModal taskId={currentTask!.taskId} onCloseModal={closeModal} />}
    </div>
  );
};
