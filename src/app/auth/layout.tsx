import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { AuthProvider } from '@/shared/providers';
import { ROUTES } from '@/shared/routes';
import { UiLogo, UiSheet } from '@/components';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <div className='mx-auto max-w-sm space-y-8 py-32'>
        <Link href={ROUTES.INDEX} className='block'>
          <UiLogo className='mx-auto' />
        </Link>
        <UiSheet>
          <div className='space-y-4'>{children}</div>
        </UiSheet>
      </div>
    </AuthProvider>
  );
}
