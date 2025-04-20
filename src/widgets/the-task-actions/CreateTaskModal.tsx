import { FC } from 'react';
import { UiModal } from '@/components';
import { CreateTaskForm } from '@/features/create-task-form';

interface Props {
  closeModal: () => void;
}

export const CreateTaskModal: FC<Props> = ({ closeModal }) => {
  return (
    <UiModal title='Добавление работы' overlayId='modalOverlay' closeButtonId='modalCloseButton'>
      <CreateTaskForm closeModal={closeModal} />
    </UiModal>
  );
};
