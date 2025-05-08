import { FC } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useModal } from '@/shared/hooks';
import { UiModal } from '@/shared/ui';
import { CreateTaskTypeForm } from './CreateTaskTypeForm';

interface Props {
  subjectId: number;
}

export const CreateTaskType: FC<Props> = ({ subjectId }) => {
  const { isOpenModal, openModal, closeModal } = useModal();

  return (
    <div>
      <button
        onClick={openModal}
        className='bg-c-slate-200 hover:bg-c-slate-300 outline-c-slate-600 cursor-pointer rounded-xl p-2 transition-colors'
      >
        <PlusIcon className='size-4' />
      </button>
      {isOpenModal && (
        <UiModal onClickClose={closeModal}>
          <div className='space-y-4'>
            <h2 className='pr-9 text-lg font-semibold'>Учебная дисциплина</h2>
            <CreateTaskTypeForm subjectId={subjectId} closeModal={closeModal} />
          </div>
        </UiModal>
      )}
    </div>
  );
};
