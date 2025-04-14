'use client';

import { FC } from 'react';
import { UiDelimiter, UiSheet } from '@/components';
import { useOpenModal } from '@/shared/utils';
import { useFindTaskTypesQuery } from '@/entities/task-types';
import { SelectFilterItem, SelectFilterItemSkeleton } from '@/features/select-filter-item';
import { CreateFilterItem } from '@/features/create-filter-item';
import { ResetFilterItem } from '@/features/reset-filter-item';
import { CreateTaskTypeModal } from '@/features/create-task-type-modal';

export const TheFilterTaskTypes: FC = () => {
  const { isOpenModal, openModal, closeModal } = useOpenModal();
  const { data: taskTypes, isLoading: isLoadingWorkTypes } = useFindTaskTypesQuery();

  return (
    <UiSheet>
      <section className='space-y-2'>
        <h2 className='text-lg font-medium'>Типы работ</h2>
        <div className='space-y-1'>
          {isLoadingWorkTypes &&
            Array(3)
              .fill(0)
              .map((_, index) => <SelectFilterItemSkeleton key={index} />)}
          {!isLoadingWorkTypes && (
            <>
              <ul className='space-y-1'>
                {taskTypes?.map(taskType => (
                  <li key={taskType.taskTypeId}>
                    <SelectFilterItem filterName='task-type' title={taskType.title} />
                  </li>
                ))}
              </ul>
              <div>
                <CreateFilterItem onClickButton={openModal} />
                {isOpenModal && <CreateTaskTypeModal closeModal={closeModal} />}
              </div>
            </>
          )}
        </div>
        <UiDelimiter />
        <ResetFilterItem filterName='task-type' />
      </section>
    </UiSheet>
  );
};
