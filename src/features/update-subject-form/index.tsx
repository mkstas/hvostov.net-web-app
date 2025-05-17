import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiForm, UiInput, UiButton } from '@/shared/ui';
import { Subject, useUpdateSubjectMutation } from '@/entities/subject';

interface Props {
  subject: Subject;
  onCloseModal: () => void;
}

export const UpdateSubjectForm: FC<Props> = ({ subject, onCloseModal }) => {
  const { control, formState, handleSubmit } = useForm<Partial<Subject>>({ mode: 'onChange' });
  const [updateSubject, { isSuccess }] = useUpdateSubjectMutation();

  useEffect(() => {
    if (isSuccess) onCloseModal();
  }, [isSuccess, onCloseModal]);

  return (
    <UiForm onSubmit={handleSubmit(formData => updateSubject({ ...formData, subjectId: subject.subjectId }))}>
      <Controller
        control={control}
        name='title'
        defaultValue={subject.title}
        rules={{
          required: 'Обязательное поле',
          maxLength: {
            value: 30,
            message: 'Не более 30 символов',
          },
        }}
        render={({ field }) => (
          <UiInput
            type='text'
            id='title'
            label='Название дисциплины'
            placeholder='Программирование'
            error={formState.errors.title?.message}
            {...field}
          />
        )}
      />
      <div className='ml-auto'>
        <UiButton>Сохранить</UiButton>
      </div>
    </UiForm>
  );
};
