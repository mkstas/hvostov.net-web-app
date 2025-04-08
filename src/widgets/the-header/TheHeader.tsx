import { FC } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/shared/routes';
import { UiLogo, UiSheet } from '@/shared/ui';
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
