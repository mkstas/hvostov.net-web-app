import { PropsWithChildren } from 'react';
import { Onest } from 'next/font/google';
import { StoreProvider } from '@/shared/providers';

import './styles.css';

const onest = Onest({
  subsets: ['cyrillic', 'latin'],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ru' className={onest.className}>
      <body className='bg-custom-slate text-slate-800'>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
