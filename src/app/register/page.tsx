import { Metadata } from 'next';
import { AuthProvider } from '@/shared/providers';
import { ROUTES } from '@/shared/routes';
import { UiDelimiter, UiLink, UiLogo, UiSheet } from '@/components';
import { UserRegisterForm } from '@/features/user-register-form';

export const metadata: Metadata = {
  title: 'АнтиХвост | Регистрация',
};

export default function Register() {
  return (
    <AuthProvider>
      <div className='mx-auto max-w-sm space-y-8 py-32'>
        <UiLogo className='mx-auto' />
        <UiSheet>
          <div className='space-y-4'>
            <h1 className='text-center text-xl font-semibold'>Регистрация</h1>
            <UserRegisterForm />
            <UiDelimiter className='mx-auto w-4/5' />
            <div className='text-center'>
              <span>Есть аккаунт? </span>
              <UiLink href={ROUTES.INDEX}>Войти в аккаунт</UiLink>
            </div>
          </div>
        </UiSheet>
      </div>
    </AuthProvider>
  );
}
