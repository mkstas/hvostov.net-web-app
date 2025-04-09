'use client';

import { FC, PropsWithChildren, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useCheckAuth } from '@/shared/utils';
import { ROUTES } from '@/shared/routes';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isLoggedIn } = useCheckAuth();

  useEffect(() => {
    if (!isLoading && isLoggedIn) redirect(ROUTES.DASHBOARD);
  }, [isLoading, isLoggedIn]);

  if (isLoading || isLoggedIn) {
    return null;
  }

  return children;
};
