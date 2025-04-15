export interface TaskCreateData {
  subjectId: number;
  taskTypeId: number;
  title: string;
  description: string;
  deadline: string;
}

export interface Task extends TaskCreateData {
  taskId: number;
}
