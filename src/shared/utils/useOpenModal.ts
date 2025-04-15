'use client';

import { useCallback, useEffect, useState } from 'react';

export const useOpenModal = (overlayId: string, closeButtonId: string) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const onClickModal = useCallback(
    (event: Event) => {
      const modalOverlay = (event?.target as HTMLElement) === document.getElementById(overlayId);
      const modalCloseButton = (event?.target as HTMLElement).closest(`#${closeButtonId}`);
      if (modalOverlay || modalCloseButton) setIsOpenModal(false);
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
