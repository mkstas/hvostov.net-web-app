import { UiHeading, UiLink } from '@/shared/ui';
import { ROUTES } from '@/shared/utils/constants';
import { RegisterUserForm } from '@/features/register-user-form';

export default function AuthRegister() {
  return (
    <div className='space-y-5 text-center'>
      <UiHeading variant='h2'>Регистрация</UiHeading>
      <RegisterUserForm />
      <UiLink href={ROUTES.AUTH_LOGIN}>Есть аккаунт? Войти</UiLink>
    </div>
  );
}
