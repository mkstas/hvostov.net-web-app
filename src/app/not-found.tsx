import { Metadata } from 'next';
import { ROUTES } from '@/shared/routes';
import { UiDelimiter, UiLink } from '@/components';

export const metadata: Metadata = {
  title: 'АнтиХвост | Страница не найдена',
};

export default function NotFound() {
  return (
    <div className='flex h-screen items-center justify-center gap-y-4 px-2'>
      <div className='flex w-full items-center justify-center gap-x-4'>
        <UiDelimiter className='w-full max-w-60' />
        <div className='space-y-2 text-center'>
          <h1 className='text-base font-medium'>Страница не найдена</h1>
          <UiLink href={ROUTES.INDEX}>Вернуться</UiLink>
        </div>
        <UiDelimiter className='w-full max-w-60' />
      </div>
    </div>
  );
}
