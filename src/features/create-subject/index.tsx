'use client';

import { FC } from 'react';
import { useModal } from '@/shared/hooks';
import { UiModal } from '@/shared/ui';
import { CreateSubjectForm } from './CreateSubjectForm';

export const CreateSubject: FC = () => {
  const { isOpenModal, openModal, closeModal } = useModal();

  return (
    <div>
      <button
        onClick={openModal}
        className='border-c-slate-400 hover:bg-c-slate-300 outline-c-slate-600 flex h-24 w-full cursor-pointer items-center justify-center rounded-2xl border border-dashed px-6 py-4 transition-colors'
      >
        <span className='font-medium'>Добавить учебную дисциплину</span>
      </button>
      {isOpenModal && (
        <UiModal onClickClose={closeModal}>
          <div className='space-y-4'>
            <h2 className='pr-9 text-lg font-semibold'>Учебная дисциплина</h2>
            <CreateSubjectForm closeModal={closeModal} />
          </div>
        </UiModal>
      )}
    </div>
  );
};
