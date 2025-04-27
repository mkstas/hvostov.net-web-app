'use client';

import { useCallback, useEffect, useState } from 'react';

export const useOpenModal = (overlayId: string, closeButtonId: string) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setIsOpenModal(false);
    document.body.classList.remove('overflow-hidden');
  };

  const onClickModal = useCallback(
    (event: Event) => {
      const modalOverlay = (event?.target as HTMLElement) === document.getElementById(overlayId);
      const modalCloseButton = (event?.target as HTMLElement).closest(`#${closeButtonId}`);
      if (modalOverlay || modalCloseButton) closeModal();
    },
    [closeButtonId, overlayId],
  );

  useEffect(() => {
    if (isOpenModal) {
      window.addEventListener('mousedown', onClickModal);
    } else {
      window.removeEventListener('mousedown', onClickModal);
    }
  }, [isOpenModal, onClickModal]);

  return { isOpenModal, setIsOpenModal, openModal, closeModal, onClickModal };
};
