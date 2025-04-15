'use client';

import { FC } from 'react';
import { useOpenSubmenu } from '@/shared/utils';
import { OpenHeaderSubmenu } from '@/features/open-header-submenu';
import { TheHeaderSubmenu } from './TheHeaderSubmenu';

export const TheHeaderMenu: FC = () => {
  const { isOpenSubmenu, openSubmenu } = useOpenSubmenu('headerSubmenu', 'headerOpenMenu');

  return (
    <div className='relative'>
      <ul className='flex items-center space-x-3'>
        <li className='flex'>
          <OpenHeaderSubmenu onClick={openSubmenu} />
        </li>
      </ul>
      {isOpenSubmenu && <TheHeaderSubmenu />}
    </div>
  );
};
