import { PropsWithChildren } from 'react';
import { AuthProvider } from '@/shared/providers';
import { UiLogo, UiSheet } from '@/components';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <div className='mx-auto max-w-sm space-y-8 py-8 lg:py-32'>
        <UiLogo className='mx-auto' />
        <p className='text-center font-medium'>
          Помощник для контролирования <br /> учебных работ
        </p>
        <UiSheet>
          <div className='space-y-4'>{children}</div>
        </UiSheet>
      </div>
    </AuthProvider>
  );
}
