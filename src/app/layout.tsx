import { PropsWithChildren } from 'react';
import { Onest } from 'next/font/google';
import { Providers } from '@/shared/providers';

import './styles.css';

const onest = Onest({
  subsets: ['cyrillic', 'latin'],
});

export default function RootLayot({ children }: PropsWithChildren) {
  return (
    <html lang='ru' className={onest.className}>
      <body className='bg-custom-slate text-slate-800'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
