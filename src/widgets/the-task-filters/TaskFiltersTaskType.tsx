'use client';

import { FC, useState } from 'react';
import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useModal } from '@/shared/hooks';
import { UiSheet, UiSkeleton, UiModal, UiDelimiter } from '@/shared/ui';
import { TaskType, useFindAllTaskTypeQuery } from '@/entities/task-type';
import { ResetSearchParam } from '@/features/reset-search-param';
import { SelectSearchParam } from '@/features/select-search-param';
import { CreateTaskTypeForm } from '@/features/create-task-type-form';
import { UpdateTaskTypeForm } from '@/features/update-task-type-form';

export const TaskFiltersTaskType: FC = () => {
  const { data: taskTypes, isLoading, isSuccess } = useFindAllTaskTypeQuery();
  const [currentTaskType, setCurrentTaskType] = useState<TaskType>();
  const { isOpenModal: isOpenModalCreate, openModal: openModalCreate, closeModal: closeModalCreate } = useModal();
  const { isOpenModal: isOpenModalUpdate, openModal: openModalUpdate, closeModal: closeModalUpdate } = useModal();

  const onOpenModalUpdate = (taskType: TaskType) => {
    setCurrentTaskType(taskType);
    openModalUpdate();
  };

  return (
    <UiSheet>
      <section className='space-y-2'>
        <h2 className='text-lg font-medium'>Типы работ</h2>
        <div className='space-y-1'>
          {isLoading &&
            Array(3)
              .fill(0)
              .map((_, index) => <UiSkeleton key={index} className='h-8' />)}
          {!isLoading && isSuccess && (
            <ul className='space-y-1'>
              {taskTypes?.map(taskType => (
                <li key={taskType.taskTypeId} className='flex gap-x-2'>
                  <SelectSearchParam param='taskTypeId' value={{ id: taskType.taskTypeId, title: taskType.title }} />
                  <button
                    onClick={() => onOpenModalUpdate(taskType)}
                    className='hover:bg-c-slate-300 outline-c-slate-600 cursor-pointer rounded-xl p-1 transition-colors'
                  >
                    <EllipsisVerticalIcon className='size-5' />
                  </button>
                </li>
              ))}
            </ul>
          )}
          {!isLoading && (
            <div>
              <button
                onClick={openModalCreate}
                className='bg-c-slate-200 hover:bg-c-slate-300 outline-c-slate-600 cursor-pointer rounded-xl p-2 transition-colors'
              >
                <PlusIcon className='size-4' />
              </button>
              {isOpenModalCreate && (
                <UiModal onClickClose={closeModalCreate}>
                  <div className='space-y-4'>
                    <h2 className='pr-9 text-lg font-semibold'>Тип работы</h2>
                    <CreateTaskTypeForm onCloseModal={closeModalCreate} />
                  </div>
                </UiModal>
              )}
              {isOpenModalUpdate && (
                <UiModal onClickClose={closeModalUpdate}>
                  <div className='space-y-4'>
                    <h2 className='pr-9 text-lg font-semibold'>Тип работы</h2>
                    <UpdateTaskTypeForm onCloseModal={closeModalUpdate} taskType={currentTaskType!} />
                  </div>
                </UiModal>
              )}
            </div>
          )}
        </div>
        <UiDelimiter />
        <ResetSearchParam param='taskTypeId' />
      </section>
    </UiSheet>
  );
};
