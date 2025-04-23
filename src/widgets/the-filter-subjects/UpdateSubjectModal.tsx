import { FC } from 'react';
import { UiModal } from '@/components';
import { Subject } from '@/entities/subjects';
import { UpdateSubjectForm } from '@/features/update-subject-form';

interface Props {
  subject: Subject;
  closeModal: () => void;
}

export const UpdateSubjectModal: FC<Props> = ({ closeModal, subject }) => {
  return (
    <UiModal onClickClose={closeModal} className='space-y-4'>
      <h2 className='text-lg font-semibold'>Редактирование учебной дисциплины</h2>
      <UpdateSubjectForm closeModal={closeModal} subject={subject} />
    </UiModal>
  );
};
