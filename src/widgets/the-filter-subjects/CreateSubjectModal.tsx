import { FC } from 'react';
import { UiModal } from '@/components';
import { CreateSubjectForm } from '@/features/create-subject-form';

interface Props {
  closeModal: () => void;
}

export const CreateSubjectModal: FC<Props> = ({ closeModal }) => {
  return (
    <UiModal title='Добавление учебной дисциплины' overlayId='modalOverlay' closeButtonId='modalCloseButton'>
      <CreateSubjectForm closeModal={closeModal} />
    </UiModal>
  );
};
