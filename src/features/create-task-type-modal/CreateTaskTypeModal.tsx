import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiModal, UiForm, UiInput, UiButton } from '@/components';
import { useCreateTaskTypeMutation, TaskTypeData } from '@/entities/task-types';

export const CreateTaskTypeModal: FC = () => {
  const { control, formState, handleSubmit } = useForm<TaskTypeData>({ mode: 'onChange' });

  const [createTaskType, {}] = useCreateTaskTypeMutation();

  return (
    <UiModal>
      <h3 className='mb-4 font-semibold'>Добавление типа работы</h3>
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
