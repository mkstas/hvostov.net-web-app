import { FC } from 'react';
import { UiModal } from '@/components';
import { TaskType } from '@/entities/task-types';
import { UpdateTaskTypeForm } from '@/features/update-task-type-form';

interface Props {
  taskType: TaskType;
  closeModal: () => void;
}

export const UpdateTaskTypeModal: FC<Props> = ({ closeModal, taskType }) => {
  return (
    <UiModal title='Редактирование учебной дисциплины' overlayId='modalOverlay' closeButtonId='modalCloseButton'>
      <UpdateTaskTypeForm closeModal={closeModal} taskType={taskType} />
    </UiModal>
  );
};
