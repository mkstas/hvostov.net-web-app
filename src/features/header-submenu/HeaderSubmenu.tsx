'use client';

import { FC } from 'react';
import { redirect } from 'next/navigation';
import { useAppDispatch, api } from '@/shared/store';
import { UiButton, UiSheet } from '@/shared/ui-kit';
import { ROUTES } from '@/shared/routes';
import { useLogoutUserMutation } from '@/entities/users';

export const HeaderSubmenu: FC = () => {
  const dispatch = useAppDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const onClickExit = async () => {
    await logoutUser();
    dispatch(api.util.resetApiState());
    redirect(ROUTES.AUTH_LOGIN);
  };

  return (
    <div className='absolute top-16 -right-3'>
      <UiSheet>
        <UiButton onClick={onClickExit}>Выйти</UiButton>
      </UiSheet>
    </div>
  );
};
