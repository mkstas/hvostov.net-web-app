'use client';

import { FC, useState } from 'react';
import { EllipsisVerticalIcon, PlusIcon } from '@heroicons/react/24/solid';
import { UiDelimiter, UiModal, UiSheet, UiSkeleton } from '@/shared/ui';
import { useModal } from '@/shared/hooks';
import { Subject, useFindAllSubjectQuery } from '@/entities/subject';
import { ResetSearchParam } from '@/features/reset-search-param';
import { SelectSearchParam } from '@/features/select-search-param';
import { CreateSubjectForm } from '@/features/create-subject-form';
import { UpdateSubjectForm } from '@/features/update-subject-form';

export const TaskFiltersSubject: FC = () => {
  const { data: subjects, isLoading, isSuccess } = useFindAllSubjectQuery();
  const [currentSubject, setCurrentSubject] = useState<Subject>();
  const { isOpenModal: isOpenModalCreate, openModal: openModalCreate, closeModal: closeModalCreate } = useModal();
  const { isOpenModal: isOpenModalUpdate, openModal: openModalUpdate, closeModal: closeModalUpdate } = useModal();

  const onOpenModalUpdate = (subject: Subject) => {
    setCurrentSubject(subject);
    openModalUpdate();
  };

  return (
    <UiSheet>
      <section className='space-y-2'>
        <h2 className='text-lg font-medium'>Учебные дисциплины</h2>
        <div className='space-y-1'>
          {isLoading &&
            Array(3)
              .fill(0)
              .map((_, index) => <UiSkeleton key={index} className='h-8' />)}
          {!isLoading && isSuccess && (
            <ul className='space-y-1'>
              {subjects?.map(subject => (
                <li key={subject.subjectId} className='flex gap-x-2'>
                  <SelectSearchParam param='subjectId' value={{ id: subject.subjectId, title: subject.title }} />
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
                    <h2 className='pr-9 text-lg font-semibold'>Учебная дисциплина</h2>
                    <CreateSubjectForm onCloseModal={closeModalCreate} />
                  </div>
                </UiModal>
              )}
              {isOpenModalUpdate && (
                <UiModal onClickClose={closeModalUpdate}>
                  <div className='space-y-4'>
                    <h2 className='pr-9 text-lg font-semibold'>Учебная дисциплина</h2>
                    <UpdateSubjectForm onCloseModal={closeModalUpdate} subject={currentSubject!} />
                  </div>
                </UiModal>
              )}
            </div>
          )}
        </div>
        <UiDelimiter />
        <ResetSearchParam param='subjectId' />
      </section>
    </UiSheet>
  );
};
