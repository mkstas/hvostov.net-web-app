import { Metadata } from 'next';
import { ROUTES } from '@/shared/routes';
import { UiLink } from '@/shared/ui';
import { FormLoginUser } from '@/features/form-login-user';

export const metadata: Metadata = {
  title: 'АнтиХвост | Вход в аккаунт',
};

export default function AuthLogin() {
  return (
    <>
      <h1 className='text-xl font-semibold'>Вход в аккаунт</h1>
      <FormLoginUser />
      <div>
        <span>Нет аккаунта? </span>
        <UiLink href={ROUTES.REGISTER}>Зарегистрироваться</UiLink>
      </div>
    </>
  );
}
