'use client';

import { FC, useEffect, useState } from 'react';
import { UiDelimiter, UiSheet } from '@/components';
import { useFindTaskTypesQuery } from '@/entities/task-types';
import { SelectFilterItem, SelectFilterItemSkeleton } from '@/features/select-filter-item';
import { CreateFilterItem } from '@/features/create-filter-item';
import { ResetFilterItem } from '@/features/reset-filter-item';
import { CreateTaskTypeModal } from '@/features/create-task-type-modal';

export const TheFilterTaskTypes: FC = () => {
  const { data: taskTypes, isLoading: isLoadingWorkTypes } = useFindTaskTypesQuery();
  const skeletonArray = Array(3).fill(0);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const closeModal = (event: Event) => {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalCloseButton = (event?.target as HTMLElement).closest('#modalCloseButton');
    if ((event?.target as HTMLElement) === modalOverlay || modalCloseButton) setIsOpenModal(false);
  };

  useEffect(() => {
    if (isOpenModal) {
      window.addEventListener('mousedown', closeModal);
    } else {
      window.removeEventListener('mousedown', closeModal);
    }
  }, [isOpenModal]);

  return (
    <UiSheet>
      <section className='space-y-2'>
        <h2 className='text-lg font-medium'>Типы работ</h2>
        <div className='space-y-1'>
          {isLoadingWorkTypes && skeletonArray.map((_, index) => <SelectFilterItemSkeleton key={index} />)}
          {!isLoadingWorkTypes && (
            <>
              <ul className='space-y-1'>
                {taskTypes?.map(taskType => (
                  <li key={taskType.taskTypeId}>
                    <SelectFilterItem title={taskType.title} isSelected={false} />
                  </li>
                ))}
              </ul>
              <div>
                <CreateFilterItem onClick={() => setIsOpenModal(true)} />
                {isOpenModal && <CreateTaskTypeModal />}
              </div>
            </>
          )}
        </div>
        <UiDelimiter />
        <ResetFilterItem />
      </section>
    </UiSheet>
  );
};
