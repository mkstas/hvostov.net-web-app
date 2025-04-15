export interface TaskData {
  subjectId: number;
  taskTypeId: number;
  title: string;
  description: string;
  deadline: Date;
}

export interface Task extends TaskData {
  taskId: number;
}
