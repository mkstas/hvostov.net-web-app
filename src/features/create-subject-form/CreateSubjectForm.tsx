'use client';

import { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { UiForm, UiInput, UiButton } from '@/components';
import { Subject, useCreateSubjectMutation } from '@/entities/subjects';

interface Props {
  closeModal: () => void;
}

export const CreateSubjectForm: FC<Props> = ({ closeModal }) => {
  const { control, formState, handleSubmit } = useForm<Partial<Subject>>({ mode: 'onChange' });
  const [createSubject, { isSuccess }] = useCreateSubjectMutation();

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
    <UiForm onSubmit={handleSubmit(formData => createSubject(formData))}>
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
            label='Название предмета'
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
