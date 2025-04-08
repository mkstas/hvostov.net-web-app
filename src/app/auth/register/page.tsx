import { Metadata } from 'next';
import { UiLink } from '@/shared/ui-kit';
import { ROUTES } from '@/shared/routes';
import { RegisterUserForm } from '@/features/register-user-form';

export const metadata: Metadata = {
  title: 'АнтиХвост | Регистрация',
};

export default function AuthRegister() {
  return (
    <>
      <h1 className='text-xl font-semibold'>Регистрация</h1>
      <RegisterUserForm />
      <div>
        <span>Есть аккаунт? </span>
        <UiLink href={ROUTES.AUTH_LOGIN}>Войти в аккаунт</UiLink>
      </div>
    </>
  );
}
