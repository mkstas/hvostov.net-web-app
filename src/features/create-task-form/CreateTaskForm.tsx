import { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { UiForm, UiInput, UiTextArea, UiSelect, UiButton } from '@/components';
import { Task, useCreateTaskMutation } from '@/entities/tasks';
import { useCreateTaskForm } from './useCreateTaskForm';

interface Props {
  closeModal: () => void;
}

export const CreateTaskForm: FC<Props> = ({ closeModal }) => {
  const { subjects, taskTypes, convertSubjectsToOptions, convertTaskTypesToOptions } = useCreateTaskForm();
  const { control, formState, handleSubmit } = useForm<Partial<Task>>({ mode: 'onChange' });
  const [createTask, { isSuccess }] = useCreateTaskMutation();

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
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
      {subjects && (
        <Controller
          control={control}
          name='subjectId'
          defaultValue={subjects[0].subjectId}
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
      )}
      {taskTypes && (
        <Controller
          control={control}
          name='taskTypeId'
          defaultValue={taskTypes[0].taskTypeId}
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
      )}
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
      <div className='ml-auto'>
        <UiButton>Добавить</UiButton>
      </div>
    </UiForm>
  );
};
