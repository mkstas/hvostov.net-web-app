'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiInput } from '@/components';
import { Subtask } from '@/entities/subtasks';
import { useCreateSubtaskMutation } from '@/entities/subtasks/service';

interface Props {
  taskId: number;
}

export const CreateSubtaskForm: FC<Props> = ({ taskId }) => {
  const { control, formState, handleSubmit, setValue } = useForm<Partial<Subtask>>({ mode: 'onChange' });
  const [createSubtask, { isSuccess }] = useCreateSubtaskMutation();

  const onSubmitForm = (formData: Partial<Subtask>) => {
    const data: Partial<Subtask> = { taskId, description: formData.description };
    createSubtask(data);
  };

  useEffect(() => {
    if (isSuccess) {
      setValue('description', '');
    }
  }, [isSuccess, setValue]);

  return (
    <UiForm onSubmit={handleSubmit(formData => onSubmitForm(formData))}>
      <div className='grid items-start gap-4 sm:grid-cols-[1fr_auto]'>
        <Controller
          control={control}
          name='description'
          defaultValue=''
          rules={{
            required: 'Это поле обязательно',
          }}
          render={({ field }) => (
            <UiInput
              type='text'
              id='description'
              placeholder='Подзадача'
              error={formState.errors.description?.message}
              {...field}
            />
          )}
        />
        <UiButton>Добавить</UiButton>
      </div>
    </UiForm>
  );
};
