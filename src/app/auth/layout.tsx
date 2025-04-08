import { PropsWithChildren } from 'react';
import { AuthProvider } from '@/shared/providers';
import { UiLogo, UiSheet } from '@/shared/ui';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <div className='mx-auto max-w-sm space-y-8 pt-16 pb-16 sm:space-y-16 sm:pt-32'>
        <div className='flex justify-center'>
          <UiLogo />
        </div>
        <UiSheet>
          <div className='space-y-6 text-center'>{children}</div>
        </UiSheet>
      </div>
    </AuthProvider>
  );
}
