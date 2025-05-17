'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiInput } from '@/shared/ui';
import { Subject, useCreateSubjectMutation } from '@/entities/subject';

interface Props {
  onCloseModal: () => void;
}

export const CreateSubjectForm: FC<Props> = ({ onCloseModal }) => {
  const { control, formState, handleSubmit } = useForm<Partial<Subject>>({ mode: 'onChange' });
  const [createSubject, { isSuccess }] = useCreateSubjectMutation();

  useEffect(() => {
    if (isSuccess) onCloseModal();
  }, [isSuccess, onCloseModal]);

  return (
    <UiForm onSubmit={handleSubmit(createSubject)}>
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
            label='Название дисциплины'
            placeholder='Программирование'
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
