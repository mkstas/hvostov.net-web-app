import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiForm, UiInput, UiSelect, UiTextArea, UiButton } from '@/shared/ui';
import { Subject } from '@/entities/subject';
import { TaskType } from '@/entities/task-type';
import { Task, useUpdateTaskMutation } from '@/entities/task';

interface Props {
  task: Task;
  subjects: Subject[];
  taskTypes: TaskType[];
  onCloseUpdate: () => void;
}

export const UpdateTaskForm: FC<Props> = ({ task, subjects, taskTypes, onCloseUpdate }) => {
  const { control, formState, handleSubmit } = useForm<Partial<Task>>({ mode: 'onChange' });
  const [updateTask, { isSuccess }] = useUpdateTaskMutation();
  const date = new Date(task.deadline).toLocaleString('en-CA', { year: 'numeric', month: 'numeric', day: 'numeric' });

  const convertSubjectsToOptions = () => {
    const options: { value: number; label: string }[] = [];
    for (const subject of subjects!) {
      options.push({ value: subject.subjectId, label: subject.title });
    }
    return options;
  };

  const convertTaskTypesToOptions = () => {
    const options: { value: number; label: string }[] = [];
    for (const taskType of taskTypes!) {
      options.push({ value: taskType.taskTypeId, label: taskType.title });
    }
    return options;
  };

  const onSubmit = (formData: Partial<Task>) => {
    updateTask({ ...formData, taskId: task.taskId });
  };

  useEffect(() => {
    if (isSuccess) onCloseUpdate();
  }, [isSuccess, onCloseUpdate]);

  return (
    <UiForm onSubmit={handleSubmit(onSubmit)}>
      <div className='grid gap-4 sm:grid-cols-2'>
        <Controller
          control={control}
          name='title'
          defaultValue={task.title}
          rules={{
            required: 'Это поле обязательно',
            maxLength: {
              value: 30,
              message: 'Не более 30 символов',
            },
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
          defaultValue={date}
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
      </div>
      <div className='grid gap-4 sm:grid-cols-2'>
        <Controller
          control={control}
          name='subjectId'
          defaultValue={task.subjectId}
          render={({ field }) => (
            <UiSelect
              id='taskTypeId'
              label='Учебная дисциалина'
              error={formState.errors.subjectId?.message}
              options={convertSubjectsToOptions()}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name='taskTypeId'
          defaultValue={task.taskTypeId}
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
      </div>
      <Controller
        control={control}
        name='description'
        defaultValue={task.description}
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
      <div className='ml-auto space-x-2'>
        <UiButton>Сохранить</UiButton>
        <UiButton onClick={onCloseUpdate} type='button'>
          Отменить
        </UiButton>
      </div>
    </UiForm>
  );
};
