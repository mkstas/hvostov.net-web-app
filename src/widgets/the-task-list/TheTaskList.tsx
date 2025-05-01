'use client';

import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ClipboardDocumentListIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useOpenModal } from '@/shared/utils';
import { UiButton } from '@/components';
import { Task, useFindTasksQuery } from '@/entities/tasks';
import { TaskItem, TaskItemSkeleton } from './task-item';
import { TaskItemModal } from './task-item-modal';
import { CreateTaskItemModal } from './CreateTaskItemModal';

export const TheTaskList: FC = () => {
  const [filteredTasks, setFilteredTasks] = useState<Task[] | undefined>();
  const [currentTask, setCurrentTask] = useState<Task | undefined>();
  const searchParams = useSearchParams();
  const { data: tasks, isLoading, isSuccess } = useFindTasksQuery(searchParams.toString());

  const {
    isOpenModal: isOpenModalTask,
    openModal: openModalTask,
    closeModal: closeModalTask,
  } = useOpenModal('modalOverlay', 'modalCloseButton');

  const {
    isOpenModal: isOpenModalCreate,
    openModal: openModalCreate,
    closeModal: closeModalCreate,
  } = useOpenModal('modalOverlay', 'modalCloseButton');

  const onClickTask = (task: Task) => {
    setCurrentTask(task);
    openModalTask();
  };

  const searchTasks = (event: ChangeEvent<HTMLInputElement>) => {
    const newTasks = tasks?.filter(task => task.title.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredTasks(newTasks);
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setFilteredTasks(tasks);
    }
  }, [isLoading, isSuccess, tasks]);

  return (
    <>
      <div className='grid items-center gap-4 sm:grid-cols-[1fr_auto]'>
        <div className='relative'>
          <input
            onChange={event => searchTasks(event)}
            placeholder='Название работы'
            className='focus:border-c-blue-500 focus:ring-c-blue-500 border-c-slate-400 placeholder:text-c-slate-500 w-full rounded-xl border bg-white px-3 py-1.75 pr-10 outline-none focus:ring'
          />
          <MagnifyingGlassIcon className='text-c-slate-500 absolute top-1/2 right-4 size-4 -translate-y-1/2' />
        </div>
        <div>
          <UiButton onClick={openModalCreate} className='max-sm:w-full'>
            Добавить работу
          </UiButton>
          {isOpenModalCreate && <CreateTaskItemModal closeModal={closeModalCreate} />}
        </div>
      </div>
      <div>
        <ul className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {!isLoading &&
            isSuccess &&
            filteredTasks?.map(task => (
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
        {!isLoading && !filteredTasks?.length && (
          <div className='grid justify-center gap-y-4 py-8'>
            <ClipboardDocumentListIcon className='text-c-slate-500 mx-auto size-12' />
            <div className='font-medium'>Работы не найдены</div>
          </div>
        )}
        {isOpenModalTask && <TaskItemModal taskId={currentTask!.taskId} onCloseModal={closeModalTask} />}
      </div>
    </>
  );
};
