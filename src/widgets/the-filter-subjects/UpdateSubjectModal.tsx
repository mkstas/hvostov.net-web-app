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
    <UiModal title='Редактирование учебной дисциплины' overlayId='modalOverlay' closeButtonId='modalCloseButton'>
      <UpdateSubjectForm closeModal={closeModal} subject={subject} />
    </UiModal>
  );
};
