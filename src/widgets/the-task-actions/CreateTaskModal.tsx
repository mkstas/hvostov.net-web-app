import { FC } from 'react';
import { UiModal } from '@/components';
import { CreateTaskForm } from '@/features/create-task-form';

interface Props {
  closeModal: () => void;
}

export const CreateTaskModal: FC<Props> = ({ closeModal }) => {
  return (
    <UiModal onClickClose={closeModal} className='space-y-4'>
      <h2 className='text-xl font-semibold'>Создание работы</h2>
      <CreateTaskForm closeModal={closeModal} />
    </UiModal>
  );
};
