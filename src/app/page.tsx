import { Metadata } from 'next';
import { AppLogotype } from '@/widgets/app-logotype';
import { LoginForm } from '@/features/login-form';
import { UiSheet } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Index() {
  return (
    <div className='mx-auto max-w-sm space-y-8 py-8 lg:py-32'>
      <AppLogotype className='mx-auto' />
      <p className='text-center font-medium'>
        Помощник для контролирования <br /> учебных работ
      </p>
      <UiSheet>
        <LoginForm />
      </UiSheet>
    </div>
  );
}
