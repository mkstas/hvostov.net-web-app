import { PropsWithChildren } from 'react';
import { Onest } from 'next/font/google';
import { StoreProvider } from '@/shared/providers';
import '@/shared/styles.css';

const onest = Onest({
  subsets: ['cyrillic-ext', 'latin-ext'],
});

export default function IndexLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ru' className={onest.className}>
      <head>
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <meta http-equiv='Content-Security-Policy' content='upgrade-insecure-requests' />
      </head>
      <body className='bg-c-slate-200 text-c-slate-600'>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
