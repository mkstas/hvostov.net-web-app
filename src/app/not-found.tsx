import { Metadata } from 'next';
import { ROUTES } from '@/shared/routes';
import { UiLink } from '@/shared/ui';

export const metadata: Metadata = {
  title: 'АнтиХвост | Страница не найдена',
};

export default function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4 px-2'>
      <div className='flex w-full items-center justify-center gap-4'>
        <div className='h-0.25 w-full max-w-60 bg-slate-300'></div>
        <span>Страница не найдена</span>
        <div className='h-0.25 w-full max-w-60 bg-slate-300'></div>
      </div>
      <UiLink href={ROUTES.DASHBOARD}>Вернуться</UiLink>
    </div>
  );
}
