import { FC } from 'react';
import { UiLogo, UiSheet } from '@/components';
import { TheHeaderMenu } from './TheHeaderMenu';

export const TheHeader: FC = () => {
  return (
    <UiSheet className='rounded-t-none'>
      <header className='relative z-10 flex items-center justify-between gap-x-4'>
        <UiLogo />
        <TheHeaderMenu />
      </header>
    </UiSheet>
  );
};
