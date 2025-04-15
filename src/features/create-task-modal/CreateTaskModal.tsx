'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiInput, UiModal, UiSelect, UiTextArea } from '@/components';
import { TaskCreateData, useCreateTaskMutation } from '@/entities/tasks';
import { useCreateTaskModal } from './useCreateTaskModal';

interface Props {
  closeModal: () => void;
}

export const CreateTaskModal: FC<Props> = ({ closeModal }) => {
  const { subjects, taskTypes, convertSubjectsToOptions, convertTaskTypesToOptions } = useCreateTaskModal();
  const { control, formState, handleSubmit } = useForm<TaskCreateData>({ mode: 'onChange' });
  const [createTask, { isSuccess }] = useCreateTaskMutation();

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
    <UiModal title='Добавление работы' overlayId='modalOverlay' closeButtonId='modalCloseButton'>
      <UiForm onSubmit={handleSubmit(formData => createTask(formData))}>
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
              label='Название работы*'
              placeholder='Название...'
              error={formState.errors.title?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name='description'
          defaultValue=''
          render={({ field }) => (
            <UiTextArea
              id='description'
              label='Описание работы'
              rows={4}
              placeholder='Описание...'
              error={formState.errors.description?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name='deadline'
          defaultValue=''
          rules={{
            required: 'Это поле обязательно',
          }}
          render={({ field }) => (
            <UiInput
              type='date'
              id='deadline'
              label='День сдачи работы*'
              error={formState.errors.deadline?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name='subjectId'
          defaultValue={subjects![0].subjectId}
          render={({ field }) => (
            <UiSelect
              id='subjectId'
              label='Учебная дисциплина'
              error={formState.errors.subjectId?.message}
              options={convertSubjectsToOptions()}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name='taskTypeId'
          defaultValue={taskTypes![0].taskTypeId}
          render={({ field }) => (
            <UiSelect
              id='taskTypeId'
              label='Тип работы'
              error={formState.errors.taskTypeId?.message}
              options={convertTaskTypesToOptions()}
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
