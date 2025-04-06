'use client';

import { redirect } from 'next/navigation';
import { FC, PropsWithChildren } from 'react';
import { ROUTES } from '@/shared/routes';
import { useFindUserQuery } from '@/entities/users';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isError, isSuccess } = useFindUserQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    redirect(ROUTES.INDEX);
  }

  if (isError) {
    return children;
  }
};
