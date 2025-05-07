import { FC } from 'react';
import { UiSheet } from '@/shared/ui';

export const HeaderMenuNotifications: FC = () => {
  return (
    <div
      id='header_notifications'
      className='shadow-c-slate-500/10 absolute top-15 -right-4 w-full max-w-96 overflow-hidden rounded-3xl shadow-lg'
    >
      <UiSheet></UiSheet>
    </div>
  );
};
