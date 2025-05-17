'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiInput } from '@/shared/ui';
import { TaskType, useCreateTaskTypeMutation } from '@/entities/task-type';

interface Props {
  onCloseModal: () => void;
}

export const CreateTaskTypeForm: FC<Props> = ({ onCloseModal }) => {
  const { control, formState, handleSubmit } = useForm<Partial<TaskType>>({ mode: 'onChange' });
  const [createTaskType, { isSuccess }] = useCreateTaskTypeMutation();

  useEffect(() => {
    if (isSuccess) onCloseModal();
  }, [isSuccess, onCloseModal]);

  return (
    <UiForm onSubmit={handleSubmit(createTaskType)}>
      <Controller
        control={control}
        name='title'
        defaultValue=''
        rules={{
          required: 'Обязательное поле',
          maxLength: {
            value: 30,
            message: 'Не более 30 символов',
          },
        }}
        render={({ field }) => (
          <UiInput
            type='text'
            id='title'
            label='Название типа работы'
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
