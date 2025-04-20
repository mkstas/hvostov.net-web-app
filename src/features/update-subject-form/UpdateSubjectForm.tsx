'use client';

import { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { UiButton, UiForm, UiInput } from '@/components';
import { useFilterParams } from '@/shared/utils';
import { Subject, useDeleteSubjectMutation, useUpdateSubjectMutation } from '@/entities/subjects';

interface Props {
  subject: Subject;
  closeModal: () => void;
}

export const UpdateSubjectForm: FC<Props> = ({ closeModal, subject }) => {
  const { control, formState, handleSubmit } = useForm<Partial<Subject>>({ mode: 'onChange' });
  const { deleteFilterParam } = useFilterParams('subject');
  const [updateSubject, { isSuccess: isSuccessUpdated }] = useUpdateSubjectMutation();
  const [deleteSubject, { isSuccess: isSuccessDeleted }] = useDeleteSubjectMutation();

  useEffect(() => {
    if (isSuccessUpdated || isSuccessDeleted) {
      deleteFilterParam(subject.title);
      closeModal();
    }
  }, [isSuccessUpdated, isSuccessDeleted, subject.title, deleteFilterParam, closeModal]);

  return (
    <UiForm onSubmit={handleSubmit(formData => updateSubject({ subjectId: subject.subjectId, ...formData }))}>
      <Controller
        control={control}
        name='title'
        defaultValue={subject.title}
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
      <div className='ml-auto flex space-x-4'>
        <UiButton>Обновить</UiButton>
        <UiButton type='button' color='red' onClick={() => deleteSubject(subject.subjectId)}>
          Удалить
        </UiButton>
      </div>
    </UiForm>
  );
};
