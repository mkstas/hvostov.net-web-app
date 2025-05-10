import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'АнтиХвост | Страница не найдена',
};

export default function NotFound() {
  return (
    <div className='flex h-screen items-center justify-center gap-y-4 px-2'>
      <div className='space-y-2 text-center'>
        <h1 className='text-base font-medium'>Страница не найдена</h1>
        <Link className='text-c-blue-500 outline-c-blue-500 outline-offset-3 not-hover:underline' href='/'>
          Вернуться
        </Link>
      </div>
    </div>
  );
}
