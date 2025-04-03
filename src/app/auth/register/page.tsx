import { UiHeading, UiLink } from '@/shared/ui';
import { ROUTES } from '@/shared/utils/constants';
import { RegisterUserForm } from '@/features/register-user-form';

export default function AuthRegister() {
  return (
    <>
      <UiHeading variant='h2'>Регистрация</UiHeading>
      <RegisterUserForm />
      <div>
        <span>Есть аккаунт? </span>
        <UiLink href={ROUTES.AUTH_LOGIN}>Войти</UiLink>
      </div>
    </>
  );
}
