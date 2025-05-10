import { Metadata } from 'next';
import { UiSheet } from '@/shared/ui';
import { UserLoginForm } from '@/features/user-login-form';
import { TheLogo } from '@/widgets/the-logo';
import { AuthProvider } from '@/shared/providers';

export const metadata: Metadata = {
  title: 'АнтиХвост | Вход',
};

export default function Index() {
  return (
    <AuthProvider>
      <div className='mx-auto max-w-sm space-y-8 py-8 lg:py-32'>
        <TheLogo className='mx-auto' />
        <p className='text-center font-medium'>
          Помощник для контролирования <br /> учебных работ
        </p>
        <UiSheet>
          <UserLoginForm />
        </UiSheet>
      </div>
    </AuthProvider>
  );
}
