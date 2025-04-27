import { Metadata } from 'next';
import { AuthProvider } from '@/shared/providers';
import { UiLink, UiLogo } from '@/components';
import { ROUTES } from '@/shared/routes';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Index() {
  return (
    <AuthProvider>
      <main>
        <h1>
          <span className='hidden'>АнтиХвост</span>
          <UiLogo />
        </h1>
        <div>
          <UiLink href={ROUTES.LOGIN}>Войти</UiLink>
          <UiLink href={ROUTES.REGISTER}>Регистрация</UiLink>
        </div>
      </main>
    </AuthProvider>
  );
}
