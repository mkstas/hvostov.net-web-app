import { AuthProvider } from '@/shared/providers';
import { ROUTES } from '@/shared/routes';
import { UiButtonLink, UiLogo } from '@/shared/ui';

export default function Index() {
  return (
    <AuthProvider>
      <div className='flex h-screen flex-col items-center justify-center gap-16 px-2'>
        <UiLogo />
        <div className='grid max-w-md grid-cols-2 gap-4'>
          <UiButtonLink href={ROUTES.LOGIN}>Войти</UiButtonLink>
          <UiButtonLink href={ROUTES.REGISTER}>Зарегистрироваться</UiButtonLink>
        </div>
      </div>
    </AuthProvider>
  );
}
