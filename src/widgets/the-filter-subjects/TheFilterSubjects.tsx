'use client';

import { FC, useEffect, useState } from 'react';
import { UiDelimiter, UiSheet } from '@/components';
import { useFindSubjectsQuery } from '@/entities/subjects';
import { SelectFilterItem, SelectFilterItemSkeleton } from '@/features/select-filter-item';
import { CreateFilterItem } from '@/features/create-filter-item';
import { ResetFilterItem } from '@/features/reset-filter-item';
import { CreateSubjectModal } from '@/features/create-subject-modal';

export const TheFilterSubjects: FC = () => {
  const { data: subjects, isLoading: isLoadingSubjects } = useFindSubjectsQuery();
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
        <h2 className='text-lg font-medium'>Предметы</h2>
        <div className='space-y-1'>
          {isLoadingSubjects && skeletonArray.map((_, index) => <SelectFilterItemSkeleton key={index} />)}
          {!isLoadingSubjects && (
            <>
              <ul className='space-y-1'>
                {subjects?.map(subject => (
                  <li key={subject.subjectId}>
                    <SelectFilterItem title={subject.title} isSelected={false} />
                  </li>
                ))}
              </ul>
              <div>
                <CreateFilterItem onClick={() => setIsOpenModal(true)} />
                {isOpenModal && <CreateSubjectModal />}
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
