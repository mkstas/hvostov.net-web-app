import { FC } from 'react';
import { Task } from '@/entities/tasks';
import { OpenUpdateTask } from '@/features/open-update-task';
import { useTask } from '../useTask';

interface Props {
  task: Task;
  onClickUpdate: () => void;
}

export const TaskItemInfo: FC<Props> = ({ task, onClickUpdate }) => {
  const { convertDeadline, getSubject, getTaskType } = useTask(task.deadline, task.subjectId, task.taskTypeId);

  return (
    <section className='relative space-y-2'>
      <div className='absolute top-10 right-0'>
        <OpenUpdateTask onClickButton={onClickUpdate} />
      </div>
      <div>
        <h2 className='text-2xl font-semibold'>{task.title}</h2>
        <div className='text-c-slate-500 text-sm'>
          {getSubject()}, {getTaskType()}
        </div>
        <time dateTime={convertDeadline()} className='text-sm'>
          Срок сдачи: {convertDeadline()}
        </time>
      </div>
      {task.description && (
        <div>
          <h3 className='text-lg font-medium'>Описание работы</h3>
          <p>{task.description}</p>
        </div>
      )}
    </section>
  );
};
