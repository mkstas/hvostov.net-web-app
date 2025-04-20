import { UiModal } from '@/components';
import { CreateTaskTypeForm } from '@/features/create-task-type-form';
import { FC } from 'react';

interface Props {
  closeModal: () => void;
}

export const CreatTaskTypeModal: FC<Props> = ({ closeModal }) => {
  return (
    <UiModal title='Добавление типа работы' overlayId='modalOverlay' closeButtonId='modalCloseButton'>
      <CreateTaskTypeForm closeModal={closeModal} />
    </UiModal>
  );
};
