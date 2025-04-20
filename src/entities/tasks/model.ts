export interface Task {
  taskId: number;
  subjectId: number;
  taskTypeId: number;
  title: string;
  description: string;
  deadline: string;
  isDone: boolean;
  isHidden: boolean;
}
