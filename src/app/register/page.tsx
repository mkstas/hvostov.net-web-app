import { UiLink, UiLogo, UiSheet } from '@/components';
import { ROUTES } from '@/shared/routes';
import { FormRegisterUser } from '@/features/form-register-user';
import { AuthProvider } from '@/shared/providers';

export default function Register() {
  return (
    <AuthProvider>
      <div className='mx-auto max-w-sm space-y-8 py-32'>
        <UiLogo className='mx-auto' />
        <UiSheet>
          <div className='space-y-8'>
            <h1 className='text-center text-xl font-semibold'>Регистрация</h1>
            <FormRegisterUser />
            <div className='text-center'>
              <span>Есть аккаунт? </span>
              <UiLink href={ROUTES.INDEX}>Войти в аккаунт</UiLink>
            </div>
          </div>
        </UiSheet>
      </div>
    </AuthProvider>
  );
}
