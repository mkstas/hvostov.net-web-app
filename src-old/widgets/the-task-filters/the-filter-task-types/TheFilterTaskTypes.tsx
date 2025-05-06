'use client';

import { FC, useState } from 'react';
import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useOpenModal } from '@/shared/utils';
import { UiDelimiter, UiSheet } from '@/components';
import { TaskType, useFindTaskTypesQuery } from '@/entities/task-types';
import { SelectFilterItem, SelectFilterItemSkeleton } from '@/features/select-filter-item';
import { ResetFilterItem } from '@/features/reset-filter-item';
import { CreatTaskTypeModal } from './CreateTaskTypeModal';
import { UpdateTaskTypeModal } from './UpdateTaskTypeModal';

export const TheFilterTaskTypes: FC = () => {
  const { data: taskTypes, isLoading, isSuccess } = useFindTaskTypesQuery();
  const [currentTaskType, setCurrentTaskType] = useState<TaskType>();

  const {
    isOpenModal: isOpenModalCreate,
    openModal: openModalCreate,
    closeModal: closeModalCreate,
  } = useOpenModal('modalOverlay', 'modalCloseButton');

  const {
    isOpenModal: isOpenModalUpdate,
    openModal: openModalUpdate,
    closeModal: closeModalUpdate,
  } = useOpenModal('modalOverlay', 'modalCloseButton');

  const onOpenModalUpdate = (taskType: TaskType) => {
    setCurrentTaskType(() => taskType);
    openModalUpdate();
  };

  return (
    <UiSheet className='max-lg:rounded-none'>
      <section className='space-y-2'>
        <h2 className='text-lg font-medium'>Типы работ</h2>
        <div className='space-y-1'>
          {isLoading &&
            Array(3)
              .fill(0)
              .map((_, index) => <SelectFilterItemSkeleton key={index} />)}
          {!isLoading && isSuccess && (
            <ul className='space-y-1'>
              {taskTypes?.map(taskType => (
                <li key={taskType.taskTypeId} className='flex gap-x-2'>
                  <SelectFilterItem
                    filterName='taskTypeId'
                    filterValue={{ id: taskType.taskTypeId, title: taskType.title }}
                  />
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
            <>
              <div>
                <button
                  onClick={openModalCreate}
                  className='bg-c-slate-200 hover:bg-c-slate-300 outline-c-slate-600 cursor-pointer rounded-xl p-2 transition-colors'
                >
                  <PlusIcon className='size-4' />
                </button>
                {isOpenModalCreate && <CreatTaskTypeModal closeModal={closeModalCreate} />}
              </div>
              {isOpenModalUpdate && <UpdateTaskTypeModal taskType={currentTaskType!} closeModal={closeModalUpdate} />}
            </>
          )}
        </div>
        <UiDelimiter />
        <ResetFilterItem filterName='taskTypeId' />
      </section>
    </UiSheet>
  );
};
