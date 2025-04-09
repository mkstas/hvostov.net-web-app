import { Metadata } from 'next';
import { AuthProvider } from '@/shared/providers';
import { ROUTES } from '@/shared/routes';
import { UiDelimiter, UiLink, UiLogo, UiSheet } from '@/components';
import { FormLoginUser } from '@/features/form-login-user';

export const metadata: Metadata = {
  title: 'АнтиХвост | Вход в аккаунт',
};

export default function Index() {
  return (
    <AuthProvider>
      <div className='mx-auto max-w-sm space-y-8 py-32'>
        <UiLogo className='mx-auto' />
        <UiSheet>
          <div className='space-y-4'>
            <h1 className='text-center text-xl font-semibold'>Вход в аккаунт</h1>
            <FormLoginUser />
            <UiDelimiter className='mx-auto w-4/5' />
            <div className='text-center'>
              <span>Нет аккаунта? </span>
              <UiLink href={ROUTES.REGISTER}>Зарегистрироваться</UiLink>
            </div>
          </div>
        </UiSheet>
      </div>
    </AuthProvider>
  );
}
