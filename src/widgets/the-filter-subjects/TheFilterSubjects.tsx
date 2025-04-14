'use client';

import { FC } from 'react';
import { UiDelimiter, UiSheet } from '@/components';
import { useOpenModal } from '@/shared/utils';
import { useFindSubjectsQuery } from '@/entities/subjects';
import { SelectFilterItem, SelectFilterItemSkeleton } from '@/features/select-filter-item';
import { CreateFilterItem } from '@/features/create-filter-item';
import { ResetFilterItem } from '@/features/reset-filter-item';
import { CreateSubjectModal } from '@/features/create-subject-modal';

export const TheFilterSubjects: FC = () => {
  const { isOpenModal, openModal, closeModal } = useOpenModal();
  const { data: subjects, isLoading: isLoadingSubjects } = useFindSubjectsQuery();

  return (
    <UiSheet>
      <section className='space-y-2'>
        <h2 className='text-lg font-medium'>Предметы</h2>
        <div className='space-y-1'>
          {isLoadingSubjects &&
            Array(3)
              .fill(0)
              .map((_, index) => <SelectFilterItemSkeleton key={index} />)}
          {!isLoadingSubjects && (
            <>
              <ul className='space-y-1'>
                {subjects?.map(subject => (
                  <li key={subject.subjectId}>
                    <SelectFilterItem filterName='subject' title={subject.title} />
                  </li>
                ))}
              </ul>
              <div>
                <CreateFilterItem onClickButton={openModal} />
                {isOpenModal && <CreateSubjectModal closeModal={closeModal} />}
              </div>
            </>
          )}
        </div>
        <UiDelimiter />
        <ResetFilterItem filterName='subject' />
      </section>
    </UiSheet>
  );
};
