'use client';

import { redirect } from 'next/navigation';
import { useAppDispatch, api } from '@/shared/stores';
import { ROUTES } from '@/shared/routes';
import { useLogoutUserMutation } from '@/entities/users';

export const useHeaderSubmenu = () => {
  const dispatch = useAppDispatch();
  const [logoutUser, {}] = useLogoutUserMutation();

  const onClickExit = async () => {
    await logoutUser();
    dispatch(api.util.resetApiState());
    redirect(ROUTES.INDEX);
  };

  return { onClickExit };
};
