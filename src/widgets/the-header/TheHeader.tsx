import { FC } from 'react';
import Link from 'next/link';
import { UiLogo, UiSheet } from '@/components';
import { ROUTES } from '@/shared/routes';
import { TheHeaderMenu } from './TheHeaderMenu';

export const TheHeader: FC = () => {
  return (
    <UiSheet className='rounded-t-none'>
      <header className='relative flex items-center justify-between'>
        <Link href={ROUTES.DASHBOARD}>
          <UiLogo />
        </Link>
        <TheHeaderMenu />
      </header>
    </UiSheet>
  );
};
