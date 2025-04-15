'use client';

import { FC } from 'react';
import { useOpenModal } from '@/shared/utils';
import { UiDelimiter, UiSheet } from '@/components';
import { useFindSubjectsQuery } from '@/entities/subjects';
import { OpenCreateFilter } from '@/features/open-create-filter';
import { SelectFilterItem, SelectFilterItemSkeleton } from '@/features/select-filter-item';
import { ResetFilterItem } from '@/features/reset-filter-item';
import { CreateSubjectModal } from '@/features/create-subject-modal';

export const TheFilterSubjects: FC = () => {
  const { isOpenModal, openModal, closeModal } = useOpenModal('modalOverlay', 'modalCloseButton');
  const { data: subjects, isLoading } = useFindSubjectsQuery();

  return (
    <UiSheet>
      <section className='space-y-2'>
        <h2 className='text-lg font-medium'>Предметы</h2>
        <div className='space-y-1'>
          {isLoading &&
            Array(3)
              .fill(0)
              .map((_, index) => <SelectFilterItemSkeleton key={index} />)}
          {!isLoading && (
            <>
              <ul className='space-y-1'>
                {subjects?.map(subject => (
                  <li key={subject.subjectId}>
                    <SelectFilterItem filterName='subject' title={subject.title} />
                  </li>
                ))}
              </ul>
              <div>
                <OpenCreateFilter onClickButton={openModal} />
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
