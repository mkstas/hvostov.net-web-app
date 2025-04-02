'use client';

import { FC, PropsWithChildren } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '@/shared/utils/stores';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};
