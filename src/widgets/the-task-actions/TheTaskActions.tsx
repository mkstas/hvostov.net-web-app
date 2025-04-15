'use client';

import { FC } from 'react';
import { useOpenModal } from '@/shared/utils';
import { OpenCreateTask } from '@/features/open-create-task';
import { CreateTaskModal } from '@/features/create-task-modal';

export const TheTaskActions: FC = () => {
  const { isOpenModal, openModal, closeModal } = useOpenModal();

  return (
    <div className='grid grid-cols-[auto_1fr_auto] items-center space-x-4'>
      <div></div>
      <div></div>
      <div>
        <OpenCreateTask onClickButton={openModal} />
        {isOpenModal && <CreateTaskModal closeModal={closeModal} />}
      </div>
    </div>
  );
};
