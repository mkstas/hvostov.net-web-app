import { UiModal } from '@/components';
import { CreateTaskTypeForm } from '@/features/create-task-type-form';
import { FC } from 'react';

interface Props {
  closeModal: () => void;
}

export const CreatTaskTypeModal: FC<Props> = ({ closeModal }) => {
  return (
    <UiModal onClickClose={closeModal} className='space-y-4'>
      <h2 className='text-lg font-semibold'>Добавление типа работы</h2>
      <CreateTaskTypeForm closeModal={closeModal} />
    </UiModal>
  );
};
