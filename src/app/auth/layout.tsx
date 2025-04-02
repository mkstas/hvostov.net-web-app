import { PropsWithChildren } from 'react';

export default function AuthLayot({ children }: PropsWithChildren) {
  return (
    <div className='mx-auto max-w-sm space-y-16 py-20'>
      <div className='space-y-3 text-center'>
        <h1 className='text-2xl font-bold'>АнтиХвост</h1>
        <span className='text-lg font-medium'>Мир, где сбываются мечты!</span>
      </div>
      <div className='mx-auto w-full rounded-2xl bg-white p-4 shadow-lg shadow-slate-800/10'>
        {children}
      </div>
      <div className='text-center'>© АнтихВост 2025-2025</div>
    </div>
  );
}
