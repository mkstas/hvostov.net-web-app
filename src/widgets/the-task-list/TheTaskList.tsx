'use client';

import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ClipboardDocumentListIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useOpenModal } from '@/shared/utils';
import { UiButton } from '@/components';
import { Task, useFindTasksQuery } from '@/entities/tasks';
import { TaskItem, TaskItemSkeleton } from './task-item';
import { TaskItemModal } from './task-item-modal';
import { CreateTaskModal } from './CreateTaskModal';

export const TheTaskList: FC = () => {
  const [filteredTasks, setFilteredTasks] = useState<Task[] | undefined>(undefined);
  const searchParams = useSearchParams();
  const { data: tasks, isLoading, isSuccess, isError } = useFindTasksQuery(searchParams.toString());
  const { isOpenModal, openModal, closeModal } = useOpenModal('modalOverlay', 'modalCloseButton');
  const {
    isOpenModal: isOpenModalCreate,
    openModal: openModalCreate,
    closeModal: closeModalCreate,
  } = useOpenModal('modalOverlay', 'modalCloseButton');

  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  const onClickTask = (task: Task) => {
    setCurrentTask(task);
    openModal();
  };

  const searchTasks = (event: ChangeEvent<HTMLInputElement>) => {
    const newTasks = tasks?.filter(task => task.title.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredTasks(newTasks);
  };

  useEffect(() => {
    if (isSuccess) {
      setFilteredTasks(tasks);
    }
  }, [isSuccess, tasks]);

  return (
    <section className='space-y-4'>
      <div className='grid grid-cols-[1fr_auto] items-center gap-x-4'>
        <div className='relative'>
          <input
            onChange={event => searchTasks(event)}
            placeholder='Название работы'
            className='focus:border-c-blue-500 focus:ring-c-blue-500 border-c-slate-400 placeholder:text-c-slate-500 w-full rounded-xl border bg-white px-3 py-1.75 pr-10 outline-none focus:ring'
          />
          <MagnifyingGlassIcon className='text-c-slate-500 absolute top-1/2 right-4 size-4 -translate-y-1/2' />
        </div>
        <div>
          <UiButton onClick={openModalCreate}>Добавить работу</UiButton>
          {isOpenModalCreate && <CreateTaskModal closeModal={closeModalCreate} />}
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
        {(!isLoading && isError) ||
          (!filteredTasks?.length && (
            <div className='text-c-slate-500 grid justify-center gap-y-4 py-8'>
              <ClipboardDocumentListIcon className='mx-auto size-12' />
              <div>Работ еще нет</div>
            </div>
          ))}
        {isOpenModal && <TaskItemModal taskId={currentTask!.taskId} onCloseModal={closeModal} />}
      </div>
    </section>
  );
};
