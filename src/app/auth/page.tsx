import { UiHeading, UiLink } from '@/shared/ui';
import { ROUTES } from '@/shared/utils/constants';
import { LoginUserForm } from '@/features/login-user-form';

export default function AuthLogin() {
  return (
    <>
      <UiHeading variant='h2'>Вход</UiHeading>
      <LoginUserForm />
      <UiLink href={ROUTES.AUTH_REGISTER}>Нет аккаунта? Зарегистрироваться</UiLink>
    </>
  );
}
