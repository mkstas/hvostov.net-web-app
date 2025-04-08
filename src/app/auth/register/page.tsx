import { Metadata } from 'next';
import { ROUTES } from '@/shared/routes';
import { UiLink } from '@/shared/ui';
import { FormRegisterUser } from '@/features/form-register-user';

export const metadata: Metadata = {
  title: 'АнтиХвост | Регистрация',
};

export default function AuthRegister() {
  return (
    <>
      <h1 className='text-xl font-semibold'>Регистрация</h1>
      <FormRegisterUser />
      <div>
        <span>Нет аккаунта? </span>
        <UiLink href={ROUTES.LOGIN}>Войти в аккаунт</UiLink>
      </div>
    </>
  );
}
