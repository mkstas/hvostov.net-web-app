'use cleint';

import { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { UiForm, UiInput, UiButton } from '@/components';
import { TaskType, useCreateTaskTypeMutation } from '@/entities/task-types';

interface Props {
  closeModal: () => void;
}

export const CreateTaskTypeForm: FC<Props> = ({ closeModal }) => {
  const { control, formState, handleSubmit } = useForm<Partial<TaskType>>({ mode: 'onChange' });
  const [createTaskType, { isSuccess }] = useCreateTaskTypeMutation();

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
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
  );
};
