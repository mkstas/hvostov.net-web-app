'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { redirect } from 'next/navigation';
import { AuthData, useLoginMutation } from '@/entities/auth';
import { UiButton, UiForm } from '@/shared/ui';
import { cn } from '@/shared/ui/cn';

export const UserLoginForm: FC = () => {
  const { control, handleSubmit, setValue } = useForm<AuthData>({ mode: 'onChange' });
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();

  const onSubmit = (formData: AuthData) => {
    const phone = formData.phone.replace(/[\D]/g, '');
    login({ phone });
  };

  useEffect(() => {
    if (isSuccess) {
      setValue('phone', '');
      redirect('/dashboard');
    }
  }, [isSuccess, isError, isLoading, setValue]);

  return (
    <UiForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='phone'
        control={control}
        defaultValue=''
        rules={{
          required: 'Номер телефона обязателен',
          validate: value => value.replace(/\D/g, '').length === 11 || 'Введите корректный номер телефона',
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <div className='grid'>
            <label htmlFor='phone' className='pb-1 text-left text-sm font-medium'>
              Номер телефона
            </label>
            <IMaskInput
              id='phone'
              className={cn(
                'placeholder:text-c-slate-500 w-full rounded-xl border bg-white px-4 py-2.75 outline-none focus:ring',
                {
                  'focus:border-c-blue-500 focus:ring-c-blue-500 border-c-slate-400': !error,
                  'border-c-red-500 focus:border-c-red-500 focus:ring-c-red-500': error,
                },
              )}
              mask='+7 (000) 000-00-00'
              dispatch={(appended, dynamicMasked) => {
                (dynamicMasked.value + appended).replace(/\D/g, '');
                return dynamicMasked.compiledMasks[0];
              }}
              placeholder='+7 ( ___ ) ___ - __ - __'
              value={value}
              onAccept={value => onChange(value)}
            />
            {error && <p className='text-c-red-500 mt-1 text-left text-sm font-medium'>{error.message}</p>}
          </div>
        )}
      />
      <UiButton variant='lg' disabled={isLoading}>
        Войти
      </UiButton>
    </UiForm>
  );
};
