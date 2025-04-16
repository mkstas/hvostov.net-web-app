'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiModal, UiForm, UiInput, UiButton } from '@/components';
import { SubjectFormData, useCreateSubjectMutation } from '@/entities/subjects';

interface Props {
  closeModal: () => void;
}

export const CreateSubjectModal: FC<Props> = ({ closeModal }) => {
  const { control, formState, handleSubmit } = useForm<SubjectFormData>({ mode: 'onChange' });
  const [createSubject, { isSuccess }] = useCreateSubjectMutation();

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
    <UiModal title='Добавление учебной дисциплины' overlayId='modalOverlay' closeButtonId='modalCloseButton'>
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
    </UiModal>
  );
};
