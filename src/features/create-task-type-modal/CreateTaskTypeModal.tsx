'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiModal, UiForm, UiInput, UiButton } from '@/components';
import { useCreateTaskTypeMutation, TaskTypeData } from '@/entities/task-types';

interface Props {
  closeModal: () => void;
}

export const CreateTaskTypeModal: FC<Props> = ({ closeModal }) => {
  const { control, formState, handleSubmit } = useForm<TaskTypeData>({ mode: 'onChange' });
  const [createTaskType, { isSuccess: isSuccessCreate }] = useCreateTaskTypeMutation();

  useEffect(() => {
    if (isSuccessCreate) {
      closeModal();
    }
  }, [isSuccessCreate, closeModal]);

  return (
    <UiModal title='Добавление типа работы'>
      <UiForm onSubmit={handleSubmit(formData => createTaskType(formData))}>
        <Controller
          control={control}
          name='title'
          defaultValue=''
          rules={{
            required: 'Это поле обязательно',
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
    </UiModal>
  );
};
