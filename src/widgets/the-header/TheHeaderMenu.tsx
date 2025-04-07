'use client';

import { FC, useState } from 'react';
import { OpenHeaderSubmenu } from '@/features/open-header-submenu';
import { HeaderSubmenu } from '@/features/header-submenu';

export const TheHeaderMenu: FC = () => {
  const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(true);

  const openSubmenu = () => {
    setIsOpenSubmenu(true);
  };

  return (
    <div className='relative'>
      <ul className='flex items-center gap-3'>
        <li className='flex'>
          <OpenHeaderSubmenu onClick={openSubmenu} />
        </li>
      </ul>
      {isOpenSubmenu && <HeaderSubmenu />}
    </div>
  );
};
