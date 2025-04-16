'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useFilterParams } from '@/shared/utils';
import { UiButton, UiForm, UiInput, UiModal } from '@/components';
import { Subject, SubjectFormData, useDeleteSubjectMutation, useUpdateSubjectMutation } from '@/entities/subjects';

interface Props {
  subject: Subject;
  closeModal: () => void;
}

export const UpdateSubjectModal: FC<Props> = ({ subject, closeModal }) => {
  const { control, formState, handleSubmit } = useForm<SubjectFormData>({ mode: 'onChange' });
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
    <UiModal title='Редактирование учебной дисциплины' overlayId='modalOverlay' closeButtonId='modalCloseButton'>
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
    </UiModal>
  );
};
