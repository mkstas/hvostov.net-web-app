import { PropsWithChildren } from 'react';
import { UiSheet, UiLogo } from '@/shared/ui-kit';
import { AuthLoginProvider } from './provider';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <AuthLoginProvider>
      <div className='mx-auto max-w-sm space-y-8 py-16 sm:space-y-16'>
        <div className='flex justify-center'>
          <UiLogo />
        </div>
        <UiSheet className='space-y-6 text-center'>{children}</UiSheet>
      </div>
    </AuthLoginProvider>
  );
}
