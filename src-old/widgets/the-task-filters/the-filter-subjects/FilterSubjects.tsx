'use client';

import { FC, useState } from 'react';
import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useOpenModal } from '@/shared/utils';
import { UiDelimiter, UiSheet } from '@/components';
import { Subject, useFindSubjectsQuery } from '@/entities/subjects';
import { SelectFilterItem, SelectFilterItemSkeleton } from '@/features/select-filter-item';
import { ResetFilterItem } from '@/features/reset-filter-item';
import { CreateSubjectModal } from './CreateSubjectModal';
import { UpdateSubjectModal } from './UpdateSubjectModal';

export const FilterSubjects: FC = () => {
  const { data: subjects, isLoading, isSuccess } = useFindSubjectsQuery();
  const [currentSubject, setCurrentSubject] = useState<Subject>();

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

  const onOpenModalUpdate = (subject: Subject) => {
    setCurrentSubject(() => subject);
    openModalUpdate();
  };

  return (
    <UiSheet className='max-lg:rounded-b-none'>
      <section className='space-y-2'>
        <h2 className='text-lg font-medium'>Учебные дисциплины</h2>
        <div className='space-y-1'>
          {isLoading &&
            Array(3)
              .fill(0)
              .map((_, index) => <SelectFilterItemSkeleton key={index} />)}
          {!isLoading && isSuccess && (
            <ul className='space-y-1'>
              {subjects?.map(subject => (
                <li key={subject.subjectId} className='flex gap-x-2'>
                  <SelectFilterItem
                    filterName='subjectId'
                    filterValue={{ id: subject.subjectId, title: subject.title }}
                  />
                  <button
                    onClick={() => onOpenModalUpdate(subject)}
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
                {isOpenModalCreate && <CreateSubjectModal closeModal={closeModalCreate} />}
              </div>
              {isOpenModalUpdate && <UpdateSubjectModal closeModal={closeModalUpdate} subject={currentSubject!} />}
            </>
          )}
        </div>
        <UiDelimiter />
        <ResetFilterItem filterName='subjectId' />
      </section>
    </UiSheet>
  );
};
