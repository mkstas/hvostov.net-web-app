'use client';

import { useEffect, useState } from 'react';

export const useOpenModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const onClickModal = (event: Event) => {
    const modalOverlay = (event?.target as HTMLElement) === document.getElementById('modalOverlay');
    const modalCloseButton = (event?.target as HTMLElement).closest('#modalCloseButton');
    if (modalOverlay || modalCloseButton) setIsOpenModal(false);
  };

  useEffect(() => {
    if (isOpenModal) {
      window.addEventListener('mousedown', onClickModal);
    } else {
      window.removeEventListener('mousedown', onClickModal);
    }
  }, [isOpenModal]);

  return { isOpenModal, setIsOpenModal, openModal, closeModal, onClickModal };
};
