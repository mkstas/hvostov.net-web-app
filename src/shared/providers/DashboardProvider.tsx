'use client';

import { FC, PropsWithChildren, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useCheckAuth } from '@/shared/hooks';

export const DashboardProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isLoggedIn } = useCheckAuth();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) redirect('/');
  }, [isLoading, isLoggedIn]);

  if (isLoading || !isLoggedIn) {
    return null;
  }

  return children;
};
