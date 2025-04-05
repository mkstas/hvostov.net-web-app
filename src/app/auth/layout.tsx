import { PropsWithChildren } from 'react';
import { Pacifico } from 'next/font/google';
import { UiSheet } from '@/shared/ui-kit';
import { cn } from '@/shared/utils/cn';

const pacifico = Pacifico({ weight: '400' });

export default function AuthLayot({ children }: PropsWithChildren) {
  return (
    <div className='mx-auto max-w-sm space-y-8 py-16 sm:space-y-16'>
      <div className='space-y-3 text-center'>
        <h1 className={cn('text-2xl', pacifico.className)}>АнтиХвост</h1>
      </div>
      <UiSheet className='space-y-6 text-center'>{children}</UiSheet>
    </div>
  );
}
