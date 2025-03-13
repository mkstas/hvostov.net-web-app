import { PropsWithChildren } from 'react';
import './styles.css';

export default function RootLayot({ children }: PropsWithChildren) {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  );
}
