'use client';

import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ClipboardDocumentListIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { UiButton, UiModal, UiSheet, UiSkeleton } from '@/shared/ui';
import { useModal } from '@/shared/hooks';
import { useFindAllSubjectQuery } from '@/entities/subject';
import { useFindAllTaskTypeQuery } from '@/entities/task-type';
import { Task, useFindAllTaskQuery } from '@/entities/task';
import { CreateTaskForm } from '@/features/create-task-form';
import { TaskListItem } from './TaskListItem';
import { TaskListItemModal } from './TaskListItemModal';

export const TheTaskList: FC = () => {
  const searchParams = useSearchParams();

  const { data: subjects, isLoading: isLoadingSubject } = useFindAllSubjectQuery();
  const { data: taskTypes, isLoading: isLoadingTaskType } = useFindAllTaskTypeQuery();

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isSuccess: isSuccessTasks,
    isError: isErrorTasks,
  } = useFindAllTaskQuery(searchParams.toString());

  const { isOpenModal: isOpenModalCreate, openModal: openModalCreate, closeModal: closeModalCreate } = useModal();
  const { isOpenModal: isOpenModalTask, openModal: openModalTask, closeModal: closeModalTask } = useModal();

  const [currentTaskId, setCurrentTaskId] = useState<number>(0);
  const [searchedTasks, setSearchedTasks] = useState<Task[]>([]);

  const onClickTask = (taskId: number) => {
    setCurrentTaskId(taskId);
    openModalTask();
  };

  const searchTasks = (event: ChangeEvent<HTMLInputElement>) => {
    if (!!tasks?.length && isSuccessTasks) {
      const newTasks = tasks?.filter(task => task.title.toLowerCase().includes(event.target.value.toLowerCase()));
      setSearchedTasks(newTasks!);
    } else {
      setSearchedTasks([]);
    }
  };

  useEffect(() => {
    if (isErrorTasks) {
      setSearchedTasks([]);
    }
    if (!isLoadingTasks && isSuccessTasks) {
      setSearchedTasks(tasks);
    }
  }, [isLoadingTasks, isSuccessTasks, isErrorTasks, tasks]);

  return (
    <UiSheet>
      <section className='space-y-4'>
        {isLoadingSubject && isLoadingTaskType ? (
          <UiSkeleton className='h-10' />
        ) : (
          <div className='grid max-sm:space-y-4 sm:grid-cols-[1fr_auto] sm:space-x-4'>
            <div className='relative'>
              <input
                onChange={event => searchTasks(event)}
                placeholder='Название работы'
                className='focus:border-c-blue-500 focus:ring-c-blue-500 border-c-slate-400 placeholder:text-c-slate-500 w-full rounded-xl border bg-white px-3 py-1.75 pr-10 outline-none focus:ring'
              />
              <MagnifyingGlassIcon className='text-c-slate-500 absolute top-1/2 right-4 size-4 -translate-y-1/2' />
            </div>
            {!!subjects?.length && !!taskTypes?.length && (
              <div>
                <UiButton className='w-full' onClick={openModalCreate}>
                  Добавить работу
                </UiButton>
                {isOpenModalCreate && (
                  <UiModal onClickClose={closeModalCreate}>
                    <div className='space-y-4'>
                      <h2 className='pr-9 text-lg font-semibold'>Учебная дисциплина</h2>
                      <CreateTaskForm onCloseModal={closeModalCreate} />
                    </div>
                  </UiModal>
                )}
              </div>
            )}
          </div>
        )}
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {isLoadingTasks
            ? Array(3)
                .fill(0)
                .map((_, index) => <UiSkeleton key={index} className='h-30.5 rounded-2xl' />)
            : !!searchedTasks.length &&
              searchedTasks?.map(task => (
                <TaskListItem key={task.taskId} onClickTask={() => onClickTask(task.taskId)} task={task} />
              ))}
          {isOpenModalTask && (
            <TaskListItemModal
              onCloseModal={closeModalTask}
              taskId={currentTaskId}
              subjects={subjects!}
              taskTypes={taskTypes!}
            />
          )}
        </div>
      </section>
      {!isLoadingTasks && !searchedTasks.length && (
        <div className='grid justify-center gap-y-4 py-8'>
          <ClipboardDocumentListIcon className='text-c-slate-500 mx-auto size-12' />
          <div className='font-medium'>Работы не найдены</div>
        </div>
      )}
    </UiSheet>
  );
};
