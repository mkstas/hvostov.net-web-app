'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/shared/routes';
import { UiButton, UiForm, UiInput } from '@/shared/ui';
import { AuthData } from '@/entities/auth';

export const UserLoginForm: FC = () => {
  const { control, formState, handleSubmit, setError, setValue, setFocus } = useForm<AuthData>({ mode: 'onChange' });
  const [loginUser, { isLoading, isSuccess, isError }] = useLoginUserMutation();

  useEffect(() => {
    if (isSuccess) {
      setValue('phone', '');
      redirect(ROUTES.DASHBOARD);
    }
  }, [isSuccess, isError, isLoading, setError, setValue, setFocus]);

  return (
    <UiForm onSubmit={handleSubmit(formData => loginUser(formData))}>
      <Controller
        control={control}
        name='phone'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
          minLength: {
            value: 11,
            message: 'Не менее 11 символов',
          },
        }}
        render={({ field }) => (
          <UiInput
            type='text'
            id='password'
            label='Пароль'
            variant='lg'
            error={formState.errors.phone?.message}
            {...field}
          />
        )}
      />
      <UiButton variant='lg' disabled={isLoading}>
        Войти
      </UiButton>
    </UiForm>
  );
};
