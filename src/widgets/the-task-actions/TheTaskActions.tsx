'use client';

import { FC } from 'react';
import { useOpenModal } from '@/shared/utils';
import { UiButton } from '@/components';
import { CreateTaskModal } from './CreateTaskModal';

export const TheTaskActions: FC = () => {
  const { isOpenModal, openModal, closeModal } = useOpenModal('modalOverlay', 'modalCloseButton');

  return (
    <div className='grid grid-cols-[1fr_auto] items-center gap-x-4'>
      <div></div>
      <div>
        <UiButton onClick={openModal}>Добавить работу</UiButton>
        {isOpenModal && <CreateTaskModal closeModal={closeModal} />}
      </div>
    </div>
  );
};
