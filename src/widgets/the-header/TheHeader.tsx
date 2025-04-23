import { FC } from 'react';
import { UiLogo, UiSheet } from '@/components';
import { TheHeaderMenu } from './TheHeaderMenu';

export const TheHeader: FC = () => {
  return (
    <UiSheet className='rounded-t-none'>
      <header className='relative z-50 flex items-center justify-between'>
        <UiLogo />
        <TheHeaderMenu />
      </header>
    </UiSheet>
  );
};
