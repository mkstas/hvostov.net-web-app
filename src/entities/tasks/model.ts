export interface TaskFormData {
  subjectId: number;
  taskTypeId: number;
  title: string;
  description: string;
  deadline: string;
}

export interface Task extends TaskFormData {
  taskId: number;
}
