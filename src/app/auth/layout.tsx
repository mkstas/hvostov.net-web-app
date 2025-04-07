import { PropsWithChildren } from 'react';
import { UiSheet, UiLogo } from '@/shared/ui-kit';
import { AuthProvider } from './provider';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <div className='mx-auto max-w-sm space-y-8 py-16 sm:space-y-16'>
        <div className='flex justify-center'>
          <h1 className='hidden'>АнтиХвост</h1>
          <UiLogo />
        </div>
        <UiSheet className='space-y-6 text-center'>{children}</UiSheet>
      </div>
    </AuthProvider>
  );
}
