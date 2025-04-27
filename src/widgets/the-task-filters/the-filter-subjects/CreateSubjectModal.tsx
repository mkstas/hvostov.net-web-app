import { FC } from 'react';
import { UiModal } from '@/components';
import { CreateSubjectForm } from '@/features/create-subject-form';

interface Props {
  closeModal: () => void;
}

export const CreateSubjectModal: FC<Props> = ({ closeModal }) => {
  return (
    <UiModal onClickClose={closeModal} className='space-y-4'>
      <h2 className='pr-9 text-lg font-semibold'>Добавление учебной дисциплины</h2>
      <CreateSubjectForm closeModal={closeModal} />
    </UiModal>
  );
};
