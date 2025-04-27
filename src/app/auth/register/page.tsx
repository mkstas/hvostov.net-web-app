import { Metadata } from 'next';
import { ROUTES } from '@/shared/routes';
import { UiDelimiter, UiLink } from '@/components';
import { UserRegisterForm } from '@/features/user-register-form';

export const metadata: Metadata = {
  title: 'АнтиХвост | Регистрация',
};

export default function Register() {
  return (
    <>
      <h1 className='text-center text-xl font-semibold'>Регистрация</h1>
      <UserRegisterForm />
      <UiDelimiter className='mx-auto w-4/5' />
      <div className='text-center'>
        <span>Есть аккаунт? </span>
        <UiLink href={ROUTES.LOGIN}>Войти в аккаунт</UiLink>
      </div>
    </>
  );
}
