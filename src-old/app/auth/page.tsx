import { Metadata } from 'next';
import { ROUTES } from '@/shared/routes';
import { UiDelimiter, UiLink } from '@/components';
import { UserLoginForm } from '@/features/user-login-form';

export const metadata: Metadata = {
  title: 'АнтиХвост | Вход в аккаунт',
};

export default function Login() {
  return (
    <>
      <h1 className='text-center text-xl font-semibold'>Вход в аккаунт</h1>
      <UserLoginForm />
      <UiDelimiter className='mx-auto w-4/5' />
      <div className='text-center'>
        <span>Нет аккаунта? </span>
        <UiLink href={ROUTES.REGISTER}>Зарегистрироваться</UiLink>
      </div>
    </>
  );
}
