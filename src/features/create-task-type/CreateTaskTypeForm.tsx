'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Type, useCreateTypeMutation } from '@/entities/types';
import { UiButton, UiForm, UiInput } from '@/shared/ui';

interface Props {
  subjectId: number;
  closeModal: () => void;
}

export const CreateTaskTypeForm: FC<Props> = ({ subjectId, closeModal }) => {
  const { control, formState, handleSubmit } = useForm<Partial<Type>>({ mode: 'onChange' });
  const [createType, { isSuccess }] = useCreateTypeMutation();

  const onSubmit = (formaData: Partial<Type>) => {
    const data = { ...formaData, subjectId };
    createType(data);
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
    <UiForm onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='title'
        defaultValue=''
        rules={{
          required: 'Обязательное поле',
        }}
        render={({ field }) => (
          <UiInput
            type='text'
            id='title'
            label='Тип работы'
            placeholder='Лабораторная работа'
            error={formState.errors.title?.message}
            {...field}
          />
        )}
      />
      <div className='ml-auto'>
        <UiButton>Добавить</UiButton>
      </div>
    </UiForm>
  );
};
