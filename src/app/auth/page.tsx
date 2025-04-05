import { Metadata } from 'next';
import { UiLink } from '@/shared/ui-kit';
import { ROUTES } from '@/shared/routes';
import { LoginUserForm } from '@/features/login-user-form';

export const metadata: Metadata = {
  title: 'АнтиХвост | Вход в аккаунт',
};

export default function AuthLogin() {
  return (
    <>
      <h2 className='text-xl font-semibold'>Вход в аккаунт</h2>
      <LoginUserForm />
      <div>
        <span>Нет аккаунта? </span>
        <UiLink href={ROUTES.AUTH_REGISTER}>Зарегистрироваться</UiLink>
      </div>
    </>
  );
}
