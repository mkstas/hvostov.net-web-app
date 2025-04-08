'use client';

import { FC, PropsWithChildren, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useCheckAuth } from '@/shared/hooks';
import { ROUTES } from '@/shared/routes';

export const AuthLoginProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isLoggedIn } = useCheckAuth();

  useEffect(() => {
    if (!isLoading && isLoggedIn) redirect(ROUTES.INDEX);
  }, [isLoading, isLoggedIn]);

  if (isLoading || isLoggedIn) {
    return null;
  }

  return children;
};
