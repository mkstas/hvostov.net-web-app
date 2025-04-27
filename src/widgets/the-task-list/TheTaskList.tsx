'use client';

import { FC, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid';
import { useOpenModal } from '@/shared/utils';
import { Task, useFindTasksQuery } from '@/entities/tasks';
import { TaskItem, TaskItemSkeleton } from './task-item';
import { TaskItemModal } from './task-item-modal';

export const TheTaskList: FC = () => {
  const searchParams = useSearchParams();
  const { data: tasks, isLoading, isSuccess, isError } = useFindTasksQuery(searchParams.toString());
  const { isOpenModal, openModal, closeModal } = useOpenModal('modalOverlay', 'modalCloseButton');
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const onClickTask = (task: Task) => {
    setCurrentTask(task);
    openModal();
  };

  return (
    <div>
      <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {!isLoading &&
          isSuccess &&
          tasks.map(task => (
            <li key={task.taskId}>
              <TaskItem task={task} onClickTask={() => onClickTask(task)} />
            </li>
          ))}
        {isLoading &&
          Array(3)
            .fill(0)
            .map((_, index) => (
              <li key={index}>
                <TaskItemSkeleton />
              </li>
            ))}
      </ul>
      {!isLoading && isError && (
        <div className='text-c-slate-500 grid justify-center gap-y-4 py-8'>
          <ClipboardDocumentListIcon className='mx-auto size-12' />
          <div>Работ еще нет</div>
        </div>
      )}
      {isOpenModal && <TaskItemModal taskId={currentTask!.taskId} onCloseModal={closeModal} />}
    </div>
  );
};
