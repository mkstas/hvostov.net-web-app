import { PropsWithChildren } from 'react';
import { Providers } from '@/shared/utils/providers';
import './styles.css';

export default function RootLayot({ children }: PropsWithChildren) {
  return (
    <html lang='ru'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
