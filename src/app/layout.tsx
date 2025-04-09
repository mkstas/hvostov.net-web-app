import { PropsWithChildren } from 'react';
import { Onest } from 'next/font/google';
import { StoreProvider } from '@/shared/providers';
import '@/shared/styles.css';

const onest = Onest({
  subsets: ['cyrillic', 'latin'],
});

export default function IndexLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ru' className={onest.className}>
      <body className='bg-c-slate-200 text-c-slate-500'>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
