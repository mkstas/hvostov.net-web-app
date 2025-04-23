import { FC } from 'react';
import { cn } from '@/shared/utils';
import { Task } from '@/entities/tasks';
import { useFindSubtasksQuery } from '@/entities/subtasks';
import { OpenUpdateTask } from '@/features/open-update-task';
import { useTask } from '../useTask';

interface Props {
  task: Task;
  onClickUpdate: () => void;
}

export const TaskItemInfo: FC<Props> = ({ task, onClickUpdate }) => {
  const { convertDeadline, getSubject, getTaskType } = useTask(task.deadline, task.subjectId, task.taskTypeId);
  const { data: subtasks, isSuccess } = useFindSubtasksQuery(task.taskId);
  const isDoneSubtasks = subtasks?.filter(item => item.isDone);
  const progress = (Number(isDoneSubtasks?.length) / Number(subtasks?.length)) * 100;

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
        {isSuccess && (
          <div className='bg-c-slate-400 relative h-1 max-w-40 rounded-full'>
            <div
              style={{ width: `${progress}%` }}
              className={cn(`absolute top-0 left-0 h-full rounded-full`, {
                'bg-c-red-500': progress <= 30,
                'bg-c-orange-500': progress > 30 && progress < 100,
                'bg-c-green-500': progress === 100,
              })}
            ></div>
          </div>
        )}
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
