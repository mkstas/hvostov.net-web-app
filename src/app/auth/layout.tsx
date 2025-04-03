import { PropsWithChildren } from 'react';
import { UiSheet } from '@/shared/ui';

export default function AuthLayot({ children }: PropsWithChildren) {
  return (
    <div className='mx-auto max-w-sm space-y-8 py-16 sm:space-y-16'>
      <div className='space-y-3 text-center'>
        <h1 className='text-2xl font-bold'>АнтиХвост</h1>
      </div>
      <UiSheet className='space-y-6 text-center'>{children}</UiSheet>
    </div>
  );
}
