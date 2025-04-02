import { PropsWithChildren } from 'react';
import { Providers } from '@/shared/utils/providers';
import './styles.css';

export default function RootLayot({ children }: PropsWithChildren) {
  return (
    <html lang='ru'>
      <body className='bg-slate-50 text-slate-800'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
