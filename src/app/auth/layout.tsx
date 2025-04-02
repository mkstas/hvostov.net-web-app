import { PropsWithChildren } from 'react';
import { UiSheet } from '@/shared/ui';

export default function AuthLayot({ children }: PropsWithChildren) {
  return (
    <div className='mx-auto max-w-sm space-y-16 pt-32'>
      <div className='space-y-3 text-center'>
        <h1 className='text-2xl font-bold'>АнтиХвост</h1>
        <span className='text-lg font-medium'>Мир, где сбываются мечты!</span>
      </div>
      <UiSheet className='space-y-6 text-center'>{children}</UiSheet>
      <div className='text-center'>© АнтихВост 2025-2025</div>
    </div>
  );
}
