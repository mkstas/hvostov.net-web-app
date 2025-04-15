'use client';

import { useCallback, useEffect, useState } from 'react';

export const useOpenSubmenu = (submenuId: string, openSubmenuId: string) => {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);

  const openSubmenu = () => {
    setIsOpenSubmenu(!isOpenSubmenu);
  };

  const closeSubmenu = useCallback(
    (event: Event) => {
      const headerSubmenu = (event?.target as HTMLElement).closest(`#${submenuId}`);
      const headerOpenSubmenu = (event?.target as HTMLElement).closest(`#${openSubmenuId}`);
      if (!headerSubmenu && !headerOpenSubmenu) setIsOpenSubmenu(false);
    },
    [submenuId, openSubmenuId],
  );

  useEffect(() => {
    if (isOpenSubmenu) {
      window.addEventListener('mousedown', closeSubmenu);
    } else {
      window.removeEventListener('mousedown', closeSubmenu);
    }
  }, [isOpenSubmenu, closeSubmenu]);

  return { isOpenSubmenu, setIsOpenSubmenu, openSubmenu, closeSubmenu };
};
