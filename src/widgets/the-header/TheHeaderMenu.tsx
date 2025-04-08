'use client';

import { FC, useEffect, useState } from 'react';
import { OpenNotifications } from '@/features/open-notifications';
import { OpenHeaderSubmenu } from '@/features/open-header-submenu';
import { HeaderSubmenu } from '@/features/header-submenu';

export const TheHeaderMenu: FC = () => {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);

  const openSubmenu = () => {
    setIsOpenSubmenu(!isOpenSubmenu);
  };

  const closeSubmenu = (event: Event) => {
    const headerSubmenu = (event?.target as HTMLElement).closest('#headerSubmenu');
    const headerOpenSubmenu = (event?.target as HTMLElement).closest('#headerOpenMenu');
    if (!headerSubmenu && !headerOpenSubmenu) setIsOpenSubmenu(false);
  };

  useEffect(() => {
    if (isOpenSubmenu) {
      window.addEventListener('mousedown', closeSubmenu);
    } else {
      window.removeEventListener('mousedown', closeSubmenu);
    }
  }, [isOpenSubmenu]);

  return (
    <div className='relative'>
      <ul className='flex items-center gap-3'>
        <li className='flex'>
          <OpenNotifications />
        </li>
        <li className='flex'>
          <OpenHeaderSubmenu onClick={openSubmenu} />
        </li>
      </ul>
      {isOpenSubmenu && <HeaderSubmenu />}
    </div>
  );
};
