import { useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';

export { api };

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
