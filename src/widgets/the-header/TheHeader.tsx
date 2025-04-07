'use client';

import { FC } from 'react';
import { UiLogo } from '@/shared/ui-kit';
import { TheHeaderMenu } from './TheHeaderMenu';

export const TheHeader: FC = () => {
  return (
    <header className='relative flex items-center justify-between rounded-b-3xl bg-white p-3'>
      <div className='w-24'>
        <UiLogo />
      </div>
      <TheHeaderMenu />
    </header>
  );
};
