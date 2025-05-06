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
    <UiModal onClickClose={closeModal} className='space-y-4'>
      <h2 className='pr-9 text-lg font-semibold'>Редактирование типа работы</h2>
      <UpdateTaskTypeForm closeModal={closeModal} taskType={taskType} />
    </UiModal>
  );
};
