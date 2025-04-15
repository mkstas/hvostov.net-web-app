export interface TaskTypeCreateData {
  title: string;
}

export interface TaskType extends TaskTypeCreateData {
  taskTypeId: number;
}
